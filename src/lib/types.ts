export type PlayerRole = 'S' | 'MB' | 'WS' | 'OP' | 'L'

export type Ability = {
  id: string
  name: string
  desc?: string
}

export type Link = {
  // chave canônica sem acentos/espacos (ex.: 'dupla-excentrica')
  key?: string
  name: string
  type: 'positional' | 'bond'
}

export type Player = {
  id: string
  name: string
  role: PlayerRole
  avatar?: string // path or URL
  abilities: Ability[] // up to 4
  links?: Link[]
  school?: string // nome da escola
}

// Unique slot keys on court and their logical roles
export type SlotKey = 'S' | 'MB1' | 'WS1' | 'L' | 'WS2' | 'MB2' | 'OP'
export type Position = SlotKey

export type Team = {
  slots: Record<Position, string | null> // playerId or null
  bench: string[] // playerIds
}

export type Buff = {
  id: string
  name: string
  type: 'positional' | 'bond'
  desc?: string
}
