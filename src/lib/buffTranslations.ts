import { resources } from '../i18n';

// Slug util: remove acentos, espaços e pontuações
export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

type NameRecord = { pt: string; en: string; original: string };
function buildNamesBySlug(): Record<string, NameRecord> {
  const src = (resources['pt-BR'] as any)?.buffNames || {};
  const out: Record<string, NameRecord> = {};
  for (const [original, tr] of Object.entries(src as Record<string, any>)) {
    const slug = slugify(original);
    const pt = (tr as any)?.pt || original;
    const en = (tr as any)?.en || original;
    out[slug] = { pt, en, original };
  }
  return out;
}

const NAMES_BY_SLUG = buildNamesBySlug();

// Correções manuais para PT quando a fonte tem mojibake
const PT_NAME_OVERRIDES: Record<string, string> = {
  'dupla-excentrica': 'Dupla Excêntrica',
  'genios-karasuno': 'Gênios Karasuno',
  'observacao-de-flores-de-cerejeira': 'Observação de flores de cerejeira',
  'deus-guardiao-e-ponta': 'Deus Guardião e Ponta',
  'esquadrao-de-kiyoko': 'Esquadrão de Kiyoko',
  'cerebro-e-comandante': 'Cérebro e Comandante',
  'orientacao-educacional': 'Orientação Educacional',
  'natacao': 'Natação',
  'o-silencioso-e-o-sarcastico': 'O Silencioso e o Sarcástico',
  'o-novo-capitao-e-o-novato-altao': 'O Novo Capitão e o Novato Altão',
  'ace-incontestavel-e-ace': 'Ace Incontestável e Ace',
  'a-forca-dos-gemeos': 'A força dos Gêmeos',
  'cabeca-dos-gemeos': 'Cabeça dos Gêmeos',
  'formacao-de-ace-flexivel': 'Formação de Ace Flexível',
  'o-colega-de-time-enigmatico': 'O Colega de Time Enigmático',
  'amigos-improvaveis': 'Amigos Improváveis'
};

// Nome traduzido aceitando nome original ou slug
export function getTranslatedBuffName(keyOrName: string, language: string): string {
  const langKey = language === 'pt' ? 'pt-BR' : language;
  const slug = slugify(keyOrName);
  const rec = NAMES_BY_SLUG[slug];
  if (rec) {
    if (langKey === 'pt-BR') {
      return PT_NAME_OVERRIDES[slug] || rec.pt;
    }
    return rec.en;
  }
  return keyOrName;
}

// Mapa de descrições por slug no idioma solicitado
export function getBuffDescriptionsMap(language: string): Record<string, string> {
  const langKey = language === 'pt' ? 'pt-BR' : language;
  const src = (resources[langKey as keyof typeof resources] as any)?.buffs || {};
  const out: Record<string, string> = {};
  for (const [name, desc] of Object.entries(src as Record<string, string>)) {
    out[slugify(name)] = String(desc);
  }
  return out;
}

// Todas as traduções (chave: slug)
export function getAllBuffNames(language: string): { [slug: string]: string } {
  const langKey = language === 'pt' ? 'pt-BR' : language;
  const out: Record<string, string> = {};
  for (const [slug, rec] of Object.entries(NAMES_BY_SLUG)) {
    out[slug] = langKey === 'pt-BR' ? rec.pt : rec.en;
  }
  return out;
}

