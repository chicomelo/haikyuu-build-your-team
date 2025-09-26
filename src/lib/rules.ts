import type { Team, Buff, Player } from './types'
import { resources } from '../i18n'
import { getTranslatedBuffName, getBuffDescriptionsMap, slugify } from './buffTranslations'
import { linkDetails } from './dataRegistry'

type PlayerLink = NonNullable<Player['links']>[number]

// FunÃ§Ã£o para obter as descriÃ§Ãµes de buffs no idioma correto
function getBuffDescriptions(language: string) {
  // Converter 'pt-BR' para 'pt-BR' e 'en' para 'en'
  const langKey = language === 'pt' ? 'pt-BR' : language;
  return resources[langKey as keyof typeof resources]?.buffs || resources['pt-BR'].buffs;
}

// Simple synergy engine: if 2+ titulares compartilham um mesmo "link" (vÃ­nculo),
// considera uma sinergia ATIVA. (Futuro: distinguir ativo/passivo e regras especÃ­ficas.)

export function computeBuffs(team: Team, players: Player[], language: string = 'pt-BR'): Buff[] {
  const byId = new Map(players.map((p) => [p.id, p] as const))
  const descBySlug = getBuffDescriptionsMap(language)
  const descEnBySlug = getBuffDescriptionsMap('en')
  const looksBad = (s?: string) => !!s && /[\uFFFD\u0100-\u024F\u00C3\u00C2]/.test(s)
  void getBuffDescriptions(language)

  const resolveLinkSlug = (link: PlayerLink) => {
    let key = (link as any).key as string | undefined
    if (!key || (!(key in descBySlug) && !(key in descEnBySlug))) {
      const fallback = ((link as any).name as string | undefined) || key || ''
      key = slugify(fallback)
    }
    return key
  }

  const slugToAllPlayers = new Map<string, Set<string>>()
  const pageIdToPlayerId = new Map<number, string>()
  const pageIdRegex = /[?&]p=(\d+)/

  for (const player of players) {
    const metadataSource = player.metadata?.source
    if (metadataSource) {
      const match = metadataSource.match(pageIdRegex)
      if (match) {
        const pageId = Number(match[1])
        if (!Number.isNaN(pageId)) {
          pageIdToPlayerId.set(pageId, player.id)
        }
      }
    }

    const seenForPlayer = new Set<string>()
    for (const link of player.links || []) {
      const slug = resolveLinkSlug(link)
      if (!slug || seenForPlayer.has(slug)) continue
      seenForPlayer.add(slug)
      if (!slugToAllPlayers.has(slug)) {
        slugToAllPlayers.set(slug, new Set<string>())
      }
      slugToAllPlayers.get(slug)!.add(player.id)
    }
  }

  const linkRequiredPlayers = new Map<string, Set<string>>()
  for (const [slug, detail] of Object.entries(linkDetails)) {
    const set = new Set<string>()
    for (const member of detail?.members ?? []) {
      if (!member) continue
      let pageId = member.page_id
      if (pageId == null && member.url) {
        const match = member.url.match(pageIdRegex)
        if (match) {
          pageId = Number(match[1])
        }
      }
      if (pageId == null || Number.isNaN(pageId)) continue
      const playerId = pageIdToPlayerId.get(pageId)
      if (playerId) set.add(playerId)
    }
    if (set.size === 0) {
      const fallback = slugToAllPlayers.get(slug)
      if (fallback && fallback.size) {
        for (const id of fallback) set.add(id)
      }
    }
    if (set.size) {
      linkRequiredPlayers.set(slug, set)
    }
  }

  const starters: Player[] = Object.values(team.slots)
    .map((pid) => (pid ? byId.get(pid) ?? null : null))
    .filter(Boolean) as Player[]
  const addToMap = (map: Map<string, Set<string>>, slug: string, playerId: string) => {
    if (!map.has(slug)) {
      map.set(slug, new Set<string>())
    }
    map.get(slug)!.add(playerId)
  }

  const positionalStartersMap = new Map<string, Set<string>>()
  const bondStarterMap = new Map<string, Set<string>>()
  const collectLinks = (player: Player, type: PlayerLink['type'], target: Map<string, Set<string>>) => {
    const seen = new Set<string>()
    for (const link of player.links || []) {
      if (link.type !== type) continue
      const slug = resolveLinkSlug(link)
      if (!slug || seen.has(slug)) continue
      seen.add(slug)
      addToMap(target, slug, player.id)
    }
  }

  for (const starter of starters) {
    collectLinks(starter, 'positional', positionalStartersMap)
    collectLinks(starter, 'bond', bondStarterMap)
  }

  const rosterIds = new Set<string>()
  const rosterPlayers: Player[] = []
  const addPlayerToRoster = (playerId: string | null | undefined) => {
    if (!playerId || rosterIds.has(playerId)) return
    const player = byId.get(playerId)
    if (!player) return
    rosterIds.add(playerId)
    rosterPlayers.push(player)
  }
  for (const slot of Object.values(team.slots)) addPlayerToRoster(slot)
  for (const benchId of team.bench) addPlayerToRoster(benchId)

  const bondRosterMap = new Map<string, Set<string>>()
  for (const player of rosterPlayers) {
    collectLinks(player, 'bond', bondRosterMap)
  }

  const ensureRequirement = (slug: string): Set<string> | null => {
    const fromDetail = linkRequiredPlayers.get(slug)
    if (fromDetail && fromDetail.size > 0) return new Set(fromDetail)
    const fallback = slugToAllPlayers.get(slug)
    if (fallback && fallback.size > 0) return new Set(fallback)
    return null
  }

  const buffs: Buff[] = []

  for (const [slug, starterSet] of positionalStartersMap) {
    const required = ensureRequirement(slug)
    if (required && required.size > 0) {
      let allPresent = true
      for (const playerId of required) {
        if (!starterSet.has(playerId)) {
          allPresent = false
          break
        }
      }
      if (!allPresent) continue
    } else {
      const fallbackRequired = slugToAllPlayers.get(slug)?.size ?? 0
      if (fallbackRequired === 0 || starterSet.size < fallbackRequired) continue
    }

    const translatedName = getTranslatedBuffName(slug, language)
    let desc = descBySlug[slug]
    if (!desc || looksBad(desc)) desc = descEnBySlug[slug]
    buffs.push({ id: slug, name: translatedName, type: 'positional', desc })
  }

  for (const [slug, rosterSet] of bondRosterMap) {
    const starterSet = bondStarterMap.get(slug) || new Set<string>()
    if (starterSet.size === 0) continue

    const required = ensureRequirement(slug)
    if (required && required.size > 0) {
      let allPresent = true
      let hasStarter = false
      for (const playerId of required) {
        if (!rosterSet.has(playerId)) {
          allPresent = false
          break
        }
        if (starterSet.has(playerId)) {
          hasStarter = true
        }
      }
      if (!allPresent || !hasStarter) continue
    } else {
      const fallbackRequired = slugToAllPlayers.get(slug)?.size ?? 2
      if (rosterSet.size < fallbackRequired) continue
    }

    const translatedName = getTranslatedBuffName(slug, language)
    let desc = descBySlug[slug]
    if (!desc || looksBad(desc)) desc = descEnBySlug[slug]
    buffs.push({ id: slug, name: translatedName, type: 'bond', desc })
  }

  const schoolCounts = new Map<string, number>()
  for (const starter of starters) {
    if (!starter.school) continue
    schoolCounts.set(starter.school, (schoolCounts.get(starter.school) || 0) + 1)
  }
  for (const [school, count] of schoolCounts) {
    if (count >= 4) {
      const name = 'Equipe ' + school
      const translatedName = getTranslatedBuffName(name, language)
      const schoolSlug = slugify(school)
      let desc = descBySlug[schoolSlug] || undefined
      if (!desc || looksBad(desc)) desc = descEnBySlug[schoolSlug]
      buffs.push({ id: schoolSlug, name: translatedName, type: 'positional', desc })
    }
  }

  return buffs
}




