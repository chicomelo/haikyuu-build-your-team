// Teste direto para verificar a contagem de sinergias
import { playersData } from '../lib/dataRegistry'
import type { Player, Team } from '../lib/types'

const playersInfo = playersData as Player[]

// Criar um time de teste com Kageyama UR e Hinata SP
const testTeam: Team = {
  slots: {
    S: 'kageyama-ur',
    MB1: 'hinata-sp',
    WS1: null,
    L: null,
    WS2: null,
    MB2: null,
    OP: null
  },
  bench: []
}

// FunÃ§Ã£o de teste
function directTest() {
  const byId = new Map(playersInfo.map(p => [p.id, p]))
  
  // Obter jogadores titulares
  const starters: Player[] = Object.values(testTeam.slots)
    .map(pid => pid ? byId.get(pid)! : null)
    .filter(Boolean) as Player[]

  console.log('Jogadores titulares:')
  starters.forEach(p => {
    console.log(`- ${p.name} (${p.id})`)
    console.log(`  Links:`, p.links)
  })
  
  // Contar sinergias posicionais
  const positionalCounts = new Map<string, number>()
  for (const p of starters) {
    for (const link of p.links || []) {
      if (link.type === 'positional') {
        const currentCount = positionalCounts.get(link.key) || 0
        positionalCounts.set(link.key, currentCount + 1)
        console.log(`Incrementando contagem de "${link.key}": ${currentCount + 1}`)
      }
    }
  }

  console.log('Contagem final de sinergias posicionais:', positionalCounts)
  
  // Verificar sinergias com contagem >= 2
  const activeBuffs = []
  for (const [name, count] of positionalCounts) {
    if (count >= 2) {
      activeBuffs.push({ id: name, name, type: 'positional' })
      console.log(`Sinergia ativa: ${name} (contagem: ${count})`)
    }
  }
  
  console.log('Sinergias ativas encontradas:', activeBuffs)
  return activeBuffs.length > 0
}

// Executar teste
console.log('=== Teste de Sinergias Posicionais ===')
const result = directTest()
console.log('Resultado do teste:', result ? 'PASSOU' : 'FALHOU')
