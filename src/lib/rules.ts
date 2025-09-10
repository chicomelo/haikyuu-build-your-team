import type { Team, Buff, Player } from './types'
import buffDescriptions from '../data/buffs.json'

// Simple synergy engine: if 2+ titulares compartilham um mesmo "link" (vínculo),
// considera uma sinergia ATIVA. (Futuro: distinguir ativo/passivo e regras específicas.)
export function computeBuffs(team: Team, players: Player[]): Buff[] {
  const byId = new Map(players.map(p => [p.id, p]))
  
  // Sinergias posicionais - requerem 2+ titulares
  const starters: Player[] = Object.values(team.slots)
    .map(pid => pid ? byId.get(pid)! : null)
    .filter(Boolean) as Player[]

  const positionalCounts = new Map<string, number>()
  for (const p of starters) {
    for (const link of p.links || []) {
      if (link.type === 'positional') {
        positionalCounts.set(link.name, (positionalCounts.get(link.name) || 0) + 1)
      }
    }
  }

  // Sinergias de vínculo - requerem apenas ter os jogadores no time
  const allPlayersInTeam = [
    ...Object.values(team.slots).filter(Boolean) as string[],
    ...team.bench.filter(Boolean) as string[]
  ].map(pid => byId.get(pid)!).filter(Boolean) as Player[]

  const bondCounts = new Map<string, number>()
  for (const p of allPlayersInTeam) {
    for (const link of p.links || []) {
      if (link.type === 'bond') {
        bondCounts.set(link.name, (bondCounts.get(link.name) || 0) + 1)
      }
    }
  }

  // Sinergias por escola - requerem 4+ titulares da mesma escola
  const schoolCounts = new Map<string, number>()
  for (const p of starters) {
    if (p.school) {
      schoolCounts.set(p.school, (schoolCounts.get(p.school) || 0) + 1)
    }
  }

  const buffs: Buff[] = []
  
  // Adicionar sinergias posicionais (2+ titulares)
  for (const [name, n] of positionalCounts) {
    if (n >= 2) {
      const desc = buffDescriptions[name as keyof typeof buffDescriptions] || undefined;
      buffs.push({ id: name, name, type: 'posicional', desc })
    }
  }
  
  // Adicionar sinergias de vínculo (apenas ter os jogadores no time)
  for (const [name, n] of bondCounts) {
    if (n >= 2) {
      const desc = buffDescriptions[name as keyof typeof buffDescriptions] || undefined;
      buffs.push({ id: name, name, type: 'vínculo', desc })
    }
  }
  
  // Adicionar sinergias por escola (4+ titulares da mesma escola)
  for (const [school, n] of schoolCounts) {
    if (n >= 4) {
      const name = `Equipe ${school}`;
      const desc = buffDescriptions[school as keyof typeof buffDescriptions] || undefined;
      buffs.push({ id: school, name, type: 'posicional', desc })
    }
  }
  
  return buffs
}
