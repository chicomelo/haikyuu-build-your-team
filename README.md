# Haikyu Fly High - Team Builder

Aplicacao web feita em React + TypeScript para montar formações do projeto Haikyu Fly High, consultar memorias dos personagens e compartilhar configuracoes com outros jogadores. O app roda sobre Vite, utiliza Tailwind para estilos e oferece suporte em portugues e ingles.

## Principais funcionalidades

- Montagem do time titular e da reserva via arrastar e soltar usando @dnd-kit/core.
- Painel de buffs que calcula sinergias (posicionais e de vinculo) em tempo real com base nas regras em `src/lib/rules.ts`.
- Catalogo de memorias com filtros por posicao e jogador, utilizando os conjuntos de dados em `src/data`.
- Modal detalhado para cada jogador e memoria, com estatisticas, habilidades e participantes relacionados.
- Persistencia automatica no navegador (localStorage) e restauração a partir da URL.
- Compartilhamento de build via link encurtado pela API do TinyURL e armazenamento dos rotulos de rotacao.
- Interface responsiva com menus dedicados para mobile, incluindo gaveta de escalação e traducao dinamica via i18next.

## Stack principal

- React 19 + TypeScript, com roteamento controlado no proprio app.
- Vite 7 para bundling, preview e ambiente de desenvolvimento.
- Tailwind CSS 3 e PostCSS para estilos utilitarios.
- Zustand para gerenciamento centralizado de estado (`src/state/store.ts`).
- @dnd-kit/core para interacoes de arrastar e soltar com overlay personalizado.
- Framer Motion para animacoes sutis em componentes interativos.
- i18next + react-i18next para traducao (arquivos em `src/locales`).
- Lucide React para icones, lz-string para compressao de estado e Zod para validacao de dados.

## Estrutura do projeto

- `src/components`: componentes de UI, incluindo `TeamHeader`, `RosterBar`, `BuffPanel`, `MemoryCatalogPage` e os modais.
- `src/state`: store central com toda a logica de montagem do time, filtros e ciclo de drag-and-drop.
- `src/lib`: funcoes de regra de negocio (buffs, tipos de jogadores, ajustes de texto) e hooks utilitarios.
- `src/data`: JSONs com informacoes de jogadores, memorias e tipos importados dinamicamente.
- `src/services`: integracoes de persistencia (`storage.ts`), compartilhamento via URL (`share.ts`) e encurtamento (`urlShortener.ts`).
- `src/locales`: traducoes em pt-BR e en, alem de arquivos auxiliares para descricoes de habilidades e ressonancias.
- `public` e `en/index.html`: ativos estaticos utilizados no build final.

## Como rodar localmente

```bash
npm install
npm run dev
```

O Vite abrira em modo desenvolvimento na porta 5173 por padrao.

## Scripts npm uteis

- `npm run dev`: inicia o servidor Vite com HMR.
- `npm run build`: gera a versao otimizada em `dist/` (executa `tsc -b` antes do bundle).
- `npm run preview`: sobe o servidor de preview sobre o build produzido.
- `npm run lint`: analisa o codigo com ESLint configurado em `eslint.config.js`.

## Internacionalizacao e dados

- A inicializacao do i18next acontece em `src/i18n.ts`, carregando os namespaces localizados.
- O cabecalho permite alternar entre pt-BR e ingles; a escolha e sincronizada com localStorage e com rotas `/en`.
- Os datasets do jogo ficam em `src/data` e `src/locales/*.json`, centralizados via `src/lib/dataRegistry.ts`.

## Compartilhamento e persistencia

- O estado do time e compressado com lz-string e anexado como query string (`t=`) para compartilhar builds.
- Em `TeamHeader`, o botao de compartilhar tenta encurtar o link usando TinyURL (via `shortenUrl`).
- `src/services/storage.ts` garante que o ultimo time montado seja restaurado automaticamente ao abrir o app.

## Qualidade e manutencao

- O projeto segue padroes de ESLint 9 com suporte a React Hooks e React Refresh.
- Configuracoes de TypeScript estao divididas em `tsconfig.app.json`, `tsconfig.node.json` e `tsconfig.json`.
- Tailwind esta configurado em `tailwind.config.js` e `postcss.config.js`.
- Arquivos auxiliares em `scripts/` podem hospedar tarefas adicionais (atualmente vazio).

## Requisitos

- Node.js 18+ (recomendado) e npm.
- Acesso a internet para encurtar links via TinyURL (fallback: copia a URL original).
