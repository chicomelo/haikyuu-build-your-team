import { resources } from "../i18n";
import { linkDetails, pickLocalizedText, resolveLanguage } from "./dataRegistry";

export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type NameRecord = { pt: string; en: string; original: string };

function buildFallbackNames(): Record<string, NameRecord> {
  const src = (resources["pt-BR"] as any)?.buffNames || {};
  const out: Record<string, NameRecord> = {};
  for (const [original, tr] of Object.entries(src as Record<string, any>)) {
    const slug = slugify(original);
    const pt = (tr as any)?.pt || original;
    const en = (tr as any)?.en || original;
    out[slug] = { pt, en, original };
  }
  return out;
}

const FALLBACK_NAMES = buildFallbackNames();

const PT_NAME_OVERRIDES: Record<string, string> = {
  "dupla-excentrica": "Dupla Excêntrica",
  "genios-karasuno": "Gênios Karasuno",
  "observacao-de-flores-de-cerejeira": "Observação de flores de cerejeira",
  "deus-guardiao-e-ponta": "Deus Guardião e Ponta",
  "esquadrao-de-kiyoko": "Esquadrão de Kiyoko",
  "cerebro-e-comandante": "Cérebro e Comandante",
  "orientacao-educacional": "Orientação Educacional",
  "natacao": "Natação",
  "o-silencioso-e-o-sarcastico": "O Silencioso e o Sarcástico",
  "o-novo-capitao-e-o-novato-altao": "O Novo Capitão e o Novato Altão",
  "ace-incontestavel-e-ace": "Ace Incontestável e Ace",
  "a-forca-dos-gemeos": "A força dos Gêmeos",
  "cabeca-dos-gemeos": "Cabeça dos Gêmeos",
  "formacao-de-ace-flexivel": "Formação de Ace Flexível",
  "o-colega-de-time-enigmatico": "O Colega de Time Enigmático",
  "amigos-improvaveis": "Amigos Improváveis",
};

function getDetail(slug: string) {
  return linkDetails[slug];
}

export function getTranslatedBuffName(keyOrName: string, language: string): string {
  const langKey = resolveLanguage(language);
  const slug = slugify(keyOrName);
  const detail = getDetail(slug);
  if (detail) {
    const name = pickLocalizedText(detail.name, langKey);
    if (name) return name;
  }

  const fallback = FALLBACK_NAMES[slug];
  if (fallback) {
    if (langKey === "pt") {
      return PT_NAME_OVERRIDES[slug] || fallback.pt;
    }
    return fallback.en;
  }
  return keyOrName;
}

export function getBuffDescriptionsMap(language: string): Record<string, string> {
  const langKey = resolveLanguage(language);
  const map: Record<string, string> = {};

  for (const [slug, detail] of Object.entries(linkDetails)) {
    const desc = pickLocalizedText(detail.description, langKey);
    if (desc) map[slug] = desc;
  }

  const resource = (resources[langKey === "pt" ? "pt-BR" : langKey as keyof typeof resources] as any)?.buffs || {};
  for (const [name, desc] of Object.entries(resource as Record<string, string>)) {
    const slug = slugify(name);
    if (!map[slug]) {
      map[slug] = String(desc);
    }
  }

  return map;
}

export function getAllBuffNames(language: string): { [slug: string]: string } {
  const langKey = resolveLanguage(language);
  const names: Record<string, string> = {};
  for (const [slug, detail] of Object.entries(linkDetails)) {
    const name = pickLocalizedText(detail.name, langKey);
    if (name) {
      names[slug] = name;
    }
  }

  for (const [slug, rec] of Object.entries(FALLBACK_NAMES)) {
    if (names[slug]) continue;
    names[slug] = langKey === "pt" ? (PT_NAME_OVERRIDES[slug] || rec.pt) : rec.en;
  }
  return names;
}
