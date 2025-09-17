import type { Ability } from "./types";

// Optional per-language overrides, keyed by ability id
import enAbilities from "../locales/en/abilities.json";
import ptAbilities from "../locales/pt-BR/abilities.json";

type AbilityTexts = { name?: string; desc?: string };

const ABILITIES_BY_LANG: Record<string, Record<string, AbilityTexts>> = {
  "pt-BR": ptAbilities as Record<string, AbilityTexts>,
  en: enAbilities as Record<string, AbilityTexts>,
};

export function getAbilityText(ability: Ability, language: string) {
  const lower = (language || '').toLowerCase();
  const langKey = lower.startsWith('pt') ? 'pt-BR' : lower.startsWith('en') ? 'en' : 'en';
  const map = ABILITIES_BY_LANG[langKey] || {};
  const tr = map[ability.id] || {};
  return {
    name: tr.name || ability.name,
    desc: tr.desc || ability.desc || "",
  };
}
