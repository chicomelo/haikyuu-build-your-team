import { resources } from '../i18n';

// Função para obter o nome traduzido de um buff
export function getTranslatedBuffName(buffName: string, language: string): string {
  // Converter 'pt-BR' para 'pt-BR' e 'en' para 'en'
  const langKey = language === 'pt' ? 'pt-BR' : language;
  
  // Verificar se o nome do buff existe no mapeamento de traduções
  const buffNames = resources[langKey as keyof typeof resources]?.buffNames || resources['pt-BR'].buffNames;
  
  // Se existir uma tradução para este buff, retornar o nome traduzido
  if (buffNames && buffNames[buffName as keyof typeof buffNames]) {
    const translations = buffNames[buffName as keyof typeof buffNames] as { [key: string]: string };
    return translations[langKey === 'pt-BR' ? 'pt' : 'en'] || buffName;
  }
  
  // Se não encontrar tradução, retornar o nome original
  return buffName;
}

// Função para obter todas as traduções de nomes de buffs
export function getAllBuffNames(language: string): { [key: string]: string } {
  const langKey = language === 'pt' ? 'pt-BR' : language;
  const buffNames = resources[langKey as keyof typeof resources]?.buffNames || resources['pt-BR'].buffNames;
  
  // Converter o objeto de traduções para um formato mais simples
  const translatedNames: { [key: string]: string } = {};
  
  for (const [originalName, translations] of Object.entries(buffNames)) {
    translatedNames[originalName] = (translations as { [key: string]: string })[langKey === 'pt-BR' ? 'pt' : 'en'] || originalName;
  }
  
  return translatedNames;
}