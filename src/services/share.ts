import type { Team, Position } from '../lib/types'
import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string'

type SharedData = {
  team: Team
  rotationLabels: Record<Position, string>
}

const PARAM = 't'

export function encodeTeamToQuery(team: Team, rotationLabels: Record<Position, string>): string {
  const data: SharedData = { team, rotationLabels }
  const json = JSON.stringify(data)
  const compressed = compressToEncodedURIComponent(json)
  const url = new URL(window.location.href)
  url.searchParams.set(PARAM, compressed)
  return url.toString()
}

export function decodeTeamFromQuery(): { team: Team, rotationLabels: Record<Position, string> } | null {
  try {
    const url = new URL(window.location.href)
    const value = url.searchParams.get(PARAM)
    
    if (!value) {
      return null
    }
    
    const json = decompressFromEncodedURIComponent(value)
    if (!json) return null
    
    const data = JSON.parse(json) as SharedData
    return data
  } catch {
    return null
  }
}

export function clearTeamQuery() {
  const url = new URL(window.location.href)
  url.searchParams.delete(PARAM)
  window.history.replaceState({}, '', url.toString())
}
