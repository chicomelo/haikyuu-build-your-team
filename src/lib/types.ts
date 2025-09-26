export type PlayerRole = 'S' | 'MB' | 'WS' | 'OP' | 'L'
export type PlayerType = 'power' | 'block' | 'quick' | 'receive' | 'serve' | 'setter'

export type LocalizedText = {
  pt?: string | null
  en?: string | null
  jp?: string | null
}

export type AbilityRef = {
  id: string
}

export type AbilityDetail = {
  name: LocalizedText
  description: LocalizedText
  cooldown?: {
    value: number | null
    text?: string | LocalizedText | null
  }
  effects?: LocalizedText[]
}

export type LinkRef = {
  key: string
  type: 'positional' | 'bond'
}

export type LinkDetail = {
  type: 'positional' | 'bond'
  category?: 'kizuna' | 'kizuna_skill' | 'school'
  name: LocalizedText
  description: LocalizedText
  effects?: LocalizedText[]
  members?: Array<{ url: string; page_id?: number }>
}

export type SkillResonanceRef = {
  id: string
  order: number
  requiredSkillLevel?: number | null
}

export type SkillResonanceDetail = {
  characterId: string
  order: number
  requiredSkillLevel?: number | null
  name: LocalizedText
  effects: LocalizedText[]
}

export type Player = {
  id: string
  name: string
  role: PlayerRole
  avatar?: string
  abilities: AbilityRef[]
  links?: LinkRef[]
  school?: string
  types?: PlayerType[]
  skillResonances?: SkillResonanceRef[]
  metadata?: {
    source?: string
    fetchedAt?: string
  }
}

export type SlotKey = 'S' | 'MB1' | 'WS1' | 'L' | 'WS2' | 'MB2' | 'OP'
export type Position = SlotKey

export type Team = {
  slots: Record<Position, string | null>
  bench: string[]
}

export type Buff = {
  id: string
  name: string
  type: 'positional' | 'bond'
  desc?: string
}

export type PlayerTypeDetail = {
  name: LocalizedText
  description: LocalizedText
}
