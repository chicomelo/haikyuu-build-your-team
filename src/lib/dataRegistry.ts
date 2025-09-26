import rawPlayers from '../data/players_new.json';
import rawAbilityDetails from '../locales/abilities_new.json';
import rawLinkDetails from '../locales/links_new.json';
import rawResonanceDetails from '../locales/resonances_new.json';
import rawTypeDetails from '../data/types.json';

import type {
  AbilityDetail,
  LinkDetail,
  Player,
  PlayerType,
  PlayerTypeDetail,
  SkillResonanceDetail,
} from './types';

export const playersData = rawPlayers as Player[];
export const abilityDetails = rawAbilityDetails as Record<string, AbilityDetail>;
export const linkDetails = rawLinkDetails as Record<string, LinkDetail>;
export const resonanceDetails = rawResonanceDetails as Record<string, SkillResonanceDetail>;
export const playerTypeDetails = rawTypeDetails as Record<PlayerType, PlayerTypeDetail>;

export function resolveLanguage(language: string): string {
  const lower = (language || 'en').toLowerCase();
  if (lower.startsWith('pt')) return 'pt';
  if (lower.startsWith('en')) return 'en';
  if (lower.startsWith('ja')) return 'jp';
  return 'en';
}

export function pickLocalizedText(text: { [key: string]: string | null | undefined } | undefined, language: string, fallbackOrder: string[] = []): string {
  if (!text) return '';
  const primary = resolveLanguage(language);
  const order = [primary, ...fallbackOrder, 'en', 'pt', 'jp'];
  for (const key of order) {
    const value = text[key];
    if (value) return value;
  }
  const anyValue = Object.values(text).find((v) => v);
  return anyValue ?? '';
}
