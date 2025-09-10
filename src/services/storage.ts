import type { Team, Position } from '../lib/types'

type StoredData = {
  team: Team
  rotationLabels: Record<Position, string>
}

const KEY = 'hk:team:v2'

export function saveTeam(team: Team, rotationLabels: Record<Position, string>) {
  const data: StoredData = { team, rotationLabels }
  localStorage.setItem(KEY, JSON.stringify(data))
}

export function loadTeam(): { team: Team, rotationLabels: Record<Position, string> } | null {
  const raw = localStorage.getItem(KEY)
  if (!raw) return null
  try { 
    const data = JSON.parse(raw) as StoredData
    return data
  } catch { 
    return null 
  }
}
