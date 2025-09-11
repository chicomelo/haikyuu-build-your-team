import type { Team, Buff, Player } from './types'
import { resources } from '../i18n'
import { getTranslatedBuffName, getBuffDescriptionsMap, slugify } from './buffTranslations'

// Função para obter as descrições de buffs no idioma correto
function getBuffDescriptions(language: string) {
  // Converter 'pt-BR' para 'pt-BR' e 'en' para 'en'
  const langKey = language === 'pt' ? 'pt-BR' : language;
  return resources[langKey as keyof typeof resources]?.buffs || resources['pt-BR'].buffs;
}

// Simple synergy engine: if 2+ titulares compartilham um mesmo "link" (vínculo),
// considera uma sinergia ATIVA. (Futuro: distinguir ativo/passivo e regras específicas.)
export function computeBuffs(team: Team, players: Player[], language: string = 'pt-BR'): Buff[] {
  const byId = new Map(players.map(p => [p.id, p]))
  const buffDescriptions = getBuffDescriptions(language);
  const descBySlug = getBuffDescriptionsMap(language);
  const descEnBySlug = getBuffDescriptionsMap('en');
  const looksBad = (s?: string) => !!s && /[\uFFFD\u00C3\u00C2]/.test(s);
  
  // Sinergias posicionais - requerem 2+ titulares
  const starters: Player[] = Object.values(team.slots)
    .map(pid => pid ? byId.get(pid)! : null)
    .filter(Boolean) as Player[]

  const positionalCounts = new Map<string, number>()
  for (const p of starters) {
    for (const link of p.links || []) {
      if (link.type === 'positional') {
        let key = (link as any).key as string | undefined; if(!key || !(key in descBySlug)) key = slugify(link.name)
        positionalCounts.set(key, (positionalCounts.get(key) || 0) + 1)
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
        let key = (link as any).key as string | undefined; if(!key || !(key in descBySlug)) key = slugify(link.name)
        bondCounts.set(key, (bondCounts.get(key) || 0) + 1)
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
  for (const [slug, n] of positionalCounts) {
    if (n >= 2) {
      const translatedName = getTranslatedBuffName(slug, language);
      let desc = descBySlug[slug];
      if (!desc || looksBad(desc)) desc = descEnBySlug[slug]
      buffs.push({ id: slug, name: translatedName, type: 'positional', desc })
    }
  }
  
  // Adicionar sinergias de vínculo (apenas ter os jogadores no time)
  for (const [slug, n] of bondCounts) {
    if (n >= 2) {
      const translatedName = getTranslatedBuffName(slug, language);
      let desc = descBySlug[slug];
      if (!desc || looksBad(desc)) desc = descEnBySlug[slug]
      buffs.push({ id: slug, name: translatedName, type: 'bond', desc })
    }
  }
  
  // Adicionar sinergias por escola (4+ titulares da mesma escola)
  for (const [school, n] of schoolCounts) {
    if (n >= 4) {
      const name = `Equipe ${school}`;
      const translatedName = getTranslatedBuffName(name, language);
      const schoolSlug = slugify(school)
      let desc = descBySlug[schoolSlug] || undefined;
      if (!desc || looksBad(desc)) desc = descEnBySlug[schoolSlug]
      buffs.push({ id: schoolSlug, name: translatedName, type: 'positional', desc })
    }
  }
  
  return buffs
}



