const characters = [
  {
    nome: "Kageyama UR",
    data: "01/12/26",
    funcao: "S",
    img: "img/kageyamaUR.png",
    School: "Karasuno",
    vinculo: ["Dupla Excêntrica", "Gênios Karasuno"],
    Stats: {
      Serve: 1782,
      Spike: 1948,
      Set: 1911,
      Receive: 1625,
      Block: 1709,
      Save: 1539,
    },
    habilidades: [
      {
        nome: "Levantador Gênio",
        descricao:
          "Kageyama Tobio realiza um levantamento com poder de [Passe] × 120/135/150%. Ao levantar, o [Ataque Rápido] do companheiro que vai atacar é aumentado em [Passe] × 15%. Esse efeito dura até a bola passar para o outro lado da rede.",
      },
      {
        nome: "Saque Assassino",
        descricao:
          "Kageyama Tobio executa um salto-saque com poder de 130/145/160% do seu [Serve]. Se esse saque for perfeito, o [Técnica de Ataque] dos companheiros aumenta em 10%. Esse efeito dura até a bola cruzar a rede 6 vezes.",
      },
      {
        nome: "Rei Silencioso",
        descricao:
          "Aumenta o [Técnica de Ataque] de Kageyama Tobio em 8/10/12%. Quando ele está em quadra e o Saque, o Ataque Rápido ou o Spike do oponente for uma boa jogada, ele ganha 1 acúmulo de [Competitive Spirit], até 5. Quando ele está em quadra e um aliado realiza Saque, Ataque Rápido ou Spike, consome 1 acúmulo de [Competitive Spirit] e o [Percepção] do aliado que executa a jogada aumenta em 20/25/30%. Esse efeito dura até a bola passar pela rede duas vezes. No início de cada rali, ele ganha 1 acúmulo de [Competitive Spirit].",
      },
      {
        nome: "Dominar o Jogo",
        descricao:
          "Kageyama Tobio executa um Ataque Rápido com poder equivalente a 240/255/270/285/300% do levantamento. O Ataque Rápido não pode ser bloqueado. O tempo de recarga da habilidade de bloqueio da linha de frente do oponente aumenta em 4× o número de cruzamentos de rede ocorridos.",
      },
    ],
    symbols: [
      "img/quicksymbol.png",
      "img/servesymbol.png",
      "img/settersymbol.png",
    ],
  },

  {
    nome: "Kageyama SSR",
    funcao: "S",
    img: "img/kageyamaSR.png",
    School: "Karasuno",
    vinculo: [],
    Stats: {
      Serve: 1314,
      Spike: 1246,
      Set: 1378,
      Receive: 1115,
      Block: 1246,
      Save: 1047,
    },
    habilidades: [
      {
        nome: "Manipular o Momento",
        descricao:
          "Quando Hinata Shoyo (Hanami) está em quadra, o [Defensive Technique] de todos os jogadores da linha de frente aumenta em 10/13/16%. Quando Hinata Shoyo faz uma boa jogada, seu [Offensive Technique] aumenta em 3/3.5/4%, até 4 acúmulos.",
      },
      {
        nome: "Degrau",
        descricao:
          "Hinata Shoyo (Hanami) recebe a bola com 140/160/180% do seu [Recepção] como poder, e os Stats base dos aliados aumentam em 12%. Esse efeito dura por 6 cruzamentos de rede.",
      },
      {
        nome: "Contra-ataque",
        descricao:
          "Quando Hinata Shoyo (Hanami) está na linha de trás, o [Defensive Technique] dos aliados na linha de trás aumenta em 10/13/16%. Quando ele está em quadra e a recepção do time não for BAD, o [Ataque Rápido] dele aumenta em 12/16/20% pelos próximos dois cruzamentos de rede. Se a recepção do companheiro for PERFECT, o Ataque Rápido de Hinata Shoyo (Hanami) após essa jogada aumenta em 100%.",
      },
      {
        nome: "Pular Alto",
        descricao:
          "Hinata Shoyo (Hanami) realiza um Ataque Rápido com 260/275/290% de [Ataque Rápido] como poder. Se for uma boa jogada, o poder aumenta em [Ataque Rápido] × 40/45/50% adicionais.",
      },
    ],
    symbols: [
      "img/quicksymbol.png",
      "img/servesymbol.png",
      "img/settersymbol.png",
    ],
  },

  {
    nome: "Hinata SP",
    data: "01/27/26",
    funcao: "MB",
    img: "img/hinataSP.png",
    School: "Karasuno",
    vinculo: [
      "Dupla Excêntrica",
      "Observação de flores de cerejeira",
      "Sol vs Lua",
    ],
    Stats: {
      Serve: 1673,
      Spike: 1950,
      Set: 1656,
      Receive: 1913,
      Block: 1774,
      Save: 1656,
    },
    habilidades: [
      {
        nome: "Manipular o Momento",
        descricao:
          "Quando Hinata Shoyo (Hanami) está em quadra, o [Defensive Technique] de todos os jogadores da linha de frente aumenta em 10/13/16%. Quando o resultado da jogada de Hinata Shoyo é PERFECT, seu [Offensive Technique] aumenta em 3/3.5/4%, no máximo 4 acúmulos.",
      },
      {
        nome: "Um Apoio",
        descricao:
          "Hinata Shoyo (Hanami) recebe uma bola com 140/160/180% de [Recepção] como poder e os Stats base do seu time aumentam em 12%. Efeito por 6 cruzamentos de rede.",
      },
      {
        nome: "Contra-ataque",
        descricao:
          "Quando Hinata Shoyo (Hanami) está na linha de trás, o [Defensive Technique] dos aliados na linha de trás aumenta em 10/13/16%. Quando ele está em quadra e a recepção do time não for BAD, seu [Ataque Rápido] aumenta em 12/16/20% pelos próximos dois cruzamentos de rede. Se a recepção do companheiro for PERFECT, o Ataque Rápido de Hinata Shoyo (Hanami) após essa jogada aumenta em 100%.",
      },
      {
        nome: "Salto Alto",
        descricao:
          "Hinata Shoyo (Hanami) realiza um Ataque Rápido com 260/275/290% de [Ataque Rápido] como poder. Se for PERFECT, o poder aumenta em mais 40/45/50% de [Ataque Rápido].",
      },
    ],
    symbols: ["img/quicksymbol.png", "img/receivesymbol.png"],
  },

  {
    nome: "Hinata SSR",
    funcao: "MB",
    img: "img/hinataSR.png",
    School: "Karasuno",
    vinculo: ["Dupla Excêntrica"],
    Stats: {
      Serve: 1173,
      Spike: 1383,
      Set: 1118,
      Receive: 1195,
      Block: 1250,
      Save: 1253,
    },
    habilidades: [
      {
        nome: "O MAIOR ISCO",
        descricao:
          "Enquanto SHOYO HINATA estiver presente, aumenta os Stats de Power/Ataque Rápido dos jogadores do seu lado em 7%.",
      },
      {
        nome: "DUPLA DE RÁPIDAS",
        descricao:
          "Quando SHOYO HINATA realiza um Ataque Rápido e o levantador é do tipo Ataque Rápido, aumenta o poder desse ataque em 15% do [Ataque Rápido] do levantador.",
      },
      {
        nome: "EM CIMA DA JOGADA",
        descricao:
          "Aumenta o [Percepção] de SHOYO HINATA em 6%. Quando HINATA acerta um crítico, aumenta ainda mais o [Percepção] em 4%, acumulando até 1 vez.",
      },
      {
        nome: "ADOLESCENTE EM ASCENSÃO",
        descricao:
          "SHOYO HINATA realiza um Ataque Rápido com 235% do seu [Ataque Rápido] como poder. Se for crítico, aumenta o poder em mais 20% do [Ataque Rápido].",
      },
    ],
    symbols: ["img/quicksymbol.png"],
  },

  {
    nome: "Nishinoya SP",
    data: "03/13/26",
    funcao: "L",
    img: "img/nishinoyaSP.png",
    School: "Karasuno",
    vinculo: ["Gênios Karasuno", "Depois da Escola"],
    Stats: {
      Serve: 1615,
      Spike: 1615,
      Set: 1851,
      Receive: 1969,
      Block: 1577,
      Save: 1854,
    },
    habilidades: [
      {
        nome: "Aceleração de Classe Mundial",
        descricao:
          "O [Reflexo] de Nishinoya Yu (Depois da Escola) aumenta em 10/13/16%. Quando um membro do time adversário faz uma jogada PERFECT, o [Reflexo] de Nishinoya Yu (Depois da Escola) aumenta em 1.5%, até 10 acúmulos. Dura até a bola cruzar a rede 6 vezes.",
      },
      {
        nome: "Passe A",
        descricao:
          "Nishinoya Yu (Depois da Escola) levanta a bola com 140/160/180% de [Passe] como poder. O [Attention] de Nishinoya Yu (Depois da Escola) aumenta em 100% de [Reflexo] como poder. Dura por dois cruzamentos de rede.",
      },
      {
        nome: "Salvar o Time na Crise",
        descricao:
          "O [Spirit] de Nishinoya Yu (Depois da Escola) aumenta em 20/25/30%. Quando um aliado faz uma jogada PERFECT, o cooldown de Foot Receive é reduzido em um cruzamento de rede.",
      },
      {
        nome: "Recepção com o Pé",
        descricao:
          "Nishinoya Yu (Depois da Escola) executa uma recepção com 260/275/290% de [Recepção] como poder. O [Recepção] dele aumenta em 20%. Dura por dois cruzamentos de rede.",
      },
    ],
    symbols: ["img/receivesymbol.png", "img/settersymbol.png"],
  },

  {
    nome: "Nishinoya SSR",
    funcao: "L",
    img: "img/nishinoyaSR.png",
    School: "Karasuno",
    vinculo: ["Deus Guardião e Ponta", "Esquadrão de Kiyoko"],
    Stats: {
      Serve: 1131,
      Spike: 1131,
      Set: 1254,
      Receive: 1389,
      Block: 1098,
      Save: 1327,
    },
    habilidades: [
      {
        nome: "DEUS GUARDIÃO",
        descricao:
          "Quando o resultado de Save de YU NISHINOYA não for BAD, aumenta o poder do próximo Power Spike usado pelo seu jogador de tipo Power em 15% do [Ataque Potente].",
      },
      {
        nome: "LÍBERO SUPREMO",
        descricao:
          "YU NISHINOYA realiza um Save com 120% do [Save] como poder.",
      },
      {
        nome: "INSPIRAR MORAL",
        descricao:
          "Quando YU NISHINOYA entra em quadra, aumenta a Moral do Time em 18.",
      },
      {
        nome: "TROVÃO ROLANTE",
        descricao:
          "YU NISHINOYA consome 20 de Stamina adicional para executar uma Recepção com 220% de [Recepção]; se o resultado não for BAD, reduz o cooldown do próximo Power Spike do seu lado em 6 cruzamentos de rede.",
      },
    ],
    symbols: ["img/receivesymbol.png"],
  },

  {
    nome: "Tanaka SSR",
    funcao: "WS",
    img: "img/tanakaSR.png",
    School: "Karasuno",
    vinculo: ["Esquadrão de Kiyoko"],
    Stats: {
      Serve: 1190,
      Spike: 1385,
      Set: 1120,
      Receive: 1316,
      Block: 1248,
      Save: 1129,
    },
    habilidades: [
      {
        nome: "A CHEGADA DO ACE",
        descricao:
          "Aumenta o poder do 1º Power Spike de RYUNOSUKE TANAKA em cada partida em 25% do [Ataque Potente].",
      },
      {
        nome: "ESPÍRITO TENAZ",
        descricao:
          "RYUNOSUKE TANAKA realiza uma Recepção com 115% de [Recepção] como poder; para essa Recepção, o [Reflexo] de TANAKA aumenta em 10%.",
      },
      {
        nome: "PAIXÃO ARDENTE",
        descricao:
          "Aumenta o poder do Power Spike de RYUNOSUKE TANAKA em 10% do [Ataque Potente]; o Power Spike dele reduz a Stamina dos bloqueadores e recebedores oponentes em 5.",
      },
      {
        nome: "SUPER DIAGONAL CURTA",
        descricao:
          "RYUNOSUKE TANAKA consome 5 de Stamina extra para executar um Spike Diagonal Curto com 250% do [Ataque Potente] como poder; se for o primeiro spike do set, aumenta o poder em mais 30% do [Ataque Potente].",
      },
    ],
    symbols: ["img/powersymbol.png"],
  },

  {
    nome: "Tsuki SP",
    funcao: "MB",
    img: "img/tsukiSP.png",
    School: "Karasuno",
    vinculo: ["Sol vs Lua", "Festival Fogos de Artificio"],
    Stats: {
      Serve: 1685,
      Spike: 1968,
      Set: 1669,
      Receive: 1759,
      Block: 1789,
      Save: 1774,
    },
    habilidades: [
      {
        nome: "Grande Cérebro",
        descricao:
          "Quando um membro do time adversário estiver sob efeito desfavorável, o [Percepção] e o [Reflexo] de Tsukishima Kei (Fireworks Festival) aumentam em 15/20/25%, e o [Offensive Technique] e [Defensive Technique] dos aliados aumentam em 10%. Dura por 1 rali. Quando um aliado ativa uma habilidade de bloqueio, o [Ataque Rápido] de Tsukishima Kei (Fireworks Festival) aumenta em 3% (até 10 acúmulos). Quando um aliado ativa uma habilidade de Ataque Rápido, o [Bloqueio] de Tsukishima Kei (Fireworks Festival) aumenta em 3% (até 10 acúmulos).",
      },
      {
        nome: "Bloqueio é um Sistema",
        descricao:
          "Tsukishima Kei (Fireworks Festival) bloqueia com poder de [Bloqueio] × 300/325/350%. Aumenta o [Reflexo] dos defensores traseiros aliados em 10% e o [Spirit] em 20%. Dura até a bola cruzar a rede duas vezes.",
      },
      {
        nome: "Observar Calmamente a Situação",
        descricao:
          "No início da partida, se o [Técnica de Ataque] de Tsukishima Kei (Fireworks Festival) for ≥ ao [Defensive Technique], ele recebe o efeito [Attack I/II/III]; caso contrário, recebe [Defensive I/II/III]. Com [Attack I/II/III], o cooldown de 'Bloqueio é um Sistema' é reduzido em 4× o número de cruzamentos de rede, mas o poder dessa habilidade é reduzido em [Bloqueio] × 100/80/60%. [Ataque Rápido] é reduzido em 20/30/40.",
      },
      {
        nome: "Ataques que Aproveitam sua Altura",
        descricao:
          "Tsukishima Kei (Fireworks Festival) executa um Ataque Rápido com poder de [Ataque Rápido] × 260/280/300/320/340%. Se algum oponente tiver efeito desfavorável, o poder aumenta em [Ataque Rápido] × 60%.",
      },
    ],
    symbols: ["img/quicksymbol.png", "img/blocksymbol.png"],
  },

  {
    nome: "Tsuki SSR",
    funcao: "MB",
    img: "img/tsukiSR.png",
    School: "Karasuno",
    vinculo: [],
    Stats: {
      Serve: 1210,
      Spike: 1314,
      Set: 1153,
      Receive: 1173,
      Block: 1389,
      Save: 1102,
    },
    habilidades: [
      {
        nome: "A CALMA DE KARASUNO",
        descricao:
          "Enquanto KEI TSUKISHIMA estiver em quadra, aumenta a Força dos jogadores do tipo Ataque Rápido do seu lado em 10%.",
      },
      {
        nome: "ATAQUE RÁPIDO TÁTICO",
        descricao:
          "KEI TSUKISHIMA realiza um Ataque Rápido com 115% do seu [Ataque Rápido]. Na próxima vez que um companheiro usar uma habilidade de Spike, o [Percepção] dele aumenta em 5%.",
      },
      {
        nome: "NASCER DA LUA",
        descricao:
          "Enquanto KEI TSUKISHIMA estiver presente, aumenta o poder de Bloqueio dos jogadores da linha de frente do seu lado em 8% do [Bloqueio].",
      },
      {
        nome: "RÉPLICA DO KEI",
        descricao:
          'KEI TSUKISHIMA realiza um Bloqueio com 195% do seu [Bloqueio] como poder. Aplica o debuff "Enrage" no atacante adversário (reduz os Stats de [Power/Ataque Rápido] em 10%).',
      },
    ],
    symbols: ["img/quicksymbol.png", "img/blocksymbol.png"],
  },

  {
    nome: "Daichi SSR",
    funcao: "OP",
    img: "img/daichiSR.png",
    School: "Karasuno",
    vinculo: [],
    Stats: {
      Serve: 1182,
      Spike: 1250,
      Set: 1123,
      Receive: 1385,
      Block: 1248,
      Save: 1191,
    },
    habilidades: [
      {
        nome: "RECEPÇÃO ESTÁVEL",
        descricao:
          "Quando DAICHI SAWAMURA realiza uma Recepção, restaura 3 de Stamina do companheiro com a menor Stamina.",
      },
      {
        nome: "SPIKE MARRETA",
        descricao:
          "DAICHI SAWAMURA executa um Power Spike com 120% do seu [Ataque Potente].",
      },
      {
        nome: "ESPINHA DORSAL DA EQUIPE",
        descricao:
          "Enquanto DAICHI SAWAMURA estiver presente, aumenta o poder de recepção dos jogadores da linha de trás do seu lado em 10% do [Recepção].",
      },
      {
        nome: "DEFESA CONFIÁVEL",
        descricao:
          "DAICHI SAWAMURA realiza uma Recepção com 220% do seu [Recepção]. Se o próximo Spike do seu lado for Power Spike, aumenta o poder desse ataque em 15% do [Ataque Potente] do atacante.",
      },
    ],
    symbols: ["img/receivesymbol.png"],
  },

  {
    nome: "Azumane SSR",
    funcao: "WS",
    img: "img/azumaneSR.png",
    School: "Karasuno",
    vinculo: ["Deus Guardião e Ponta"],
    Stats: {
      Serve: 1322,
      Spike: 1387,
      Set: 1118,
      Receive: 1254,
      Block: 1190,
      Save: 1122,
    },
    habilidades: [
      {
        nome: "DEFESA PROFICIENTE",
        descricao:
          "ASAHI AZUMANE realiza uma Recepção com 120% de [Recepção] como poder.",
      },
      {
        nome: "SAQUE BALA",
        descricao:
          "ASAHI AZUMANE realiza um Salto-Saque com 120% de [Serve] como poder.",
      },
      {
        nome: "AURA DO ACE",
        descricao:
          "Quando a Stamina de ASAHI AZUMANE está acima de 70, aumenta o poder do seu Power Spike em 15% do [Ataque Potente].",
      },
      {
        nome: "SPIKE CARREGADO",
        descricao:
          'ASAHI AZUMANE consome 30 de Stamina adicional para realizar um Power Spike com 235% do [Ataque Potente] como poder e recebe 1 acúmulo de "Power Charge"; ao lançar [SPIKE CARREGADO], cada acúmulo de "Power Charge" aumenta o poder em 50% do [Ataque Potente].',
      },
    ],
    symbols: ["img/powersymbol.png", "img/servesymbol.png"],
  },

  {
    nome: "Sugawara SP",
    data: "04/12/26",
    funcao: "S",
    img: "img/sugawaraSP.png",
    School: "Karasuno",
    vinculo: ["Depois da Escola"],
    Stats: {
      Serve: 1849,
      Spike: 1758,
      Set: 1950,
      Receive: 1667,
      Block: 1774,
      Save: 1605,
    },
    habilidades: [
      {
        nome: "Apoiar o Ataque",
        descricao:
          "Quando Sugawara Koshi (Depois da Escola) está em quadra e um aliado da linha de frente ativa uma habilidade de bloqueio, o [Bloqueio] do bloqueador aumenta em 5/6.25/7.5% × a soma do [Bloqueio] do outro aliado da linha de frente (máximo 1000/1250/1500). Dura até a bola cruzar a rede duas vezes. Quando ele está em quadra e um aliado da linha de trás recebe, o [Recepção] do recebedor aumenta em 5/6.25/7.5% × a soma do [Recepção] do outro aliado da linha de trás (máx. 1000/1250/1500). Dura até a bola cruzar a rede duas vezes.",
      },
      {
        nome: "Saque habilidoso que explora fraquezas",
        descricao:
          "Sugawara Koushi (Depois da Escola) executa um Saque com poder [Serve] × 140/160/180%. Aumenta a Moral do Time em 10. Aumenta os Stats base dos aliados em 12/14/16% por 1 rali.",
      },
      {
        nome: "Preparação Cuidadosa",
        descricao:
          "Sugawara Koushi (Depois da Escola) aumenta a Stamina em 13/16/20%. Na primeira participação dele, os aliados consomem 50% da Stamina atual e, a cada 6 de Stamina consumida, os Stats base dos aliados aumentam em 1/1.3/1.6%. Após a primeira participação, os aliados reSave 15 de Stamina ao fim de cada rali, por 4 ralis.",
      },
      {
        nome: "Jogada Sinalizada",
        descricao:
          "Sugawara Koushi (Depois da Escola) consome 15 de Stamina extra e realiza um levantamento com 60% ([Passe] × 2) / 80% ([Passe] × 2) / 300% / 20% ([Passe] × 3) / 40% ([Passe] × 3) de poder. O primeiro companheiro a atacar (Power/Quick) após essa jogada aumenta o [Técnica de Ataque] em 2.0% até a bola cruzar a rede duas vezes.",
      },
    ],
    symbols: [
      "img/blocksymbol.png",
      "img/servesymbol.png",
      "img/settersymbol.png",
    ],
  },

  {
    nome: "Kenma SP",
    data: "02/26/26",
    funcao: "S",
    img: "img/kenmaSP.png",
    School: "Nekoma",
    vinculo: ["Observação de flores de cerejeira", "Cérebro e Comandante SP"],
    Stats: {
      Serve: 1580,
      Spike: 1700,
      Set: 1990,
      Receive: 1710,
      Block: 1600,
      Save: 1590,
    },
    habilidades: [
      {
        nome: "Liderança",
        descricao:
          "Quando Kozume Kenma (Hanami) está em quadra, os [Reflexo] dos aliados aumentam em 10/13/16%. Estando em quadra e um aliado receber ou salvar, ele ganha 1 acúmulo de [Defense that Eliminates Openings] e os [Reflexo] dos aliados aumentam em 1.5%, até 10 acúmulos. Se o resultado da recepção/Save do aliado não for BAD, ganha mais 1 acúmulo.",
      },
      {
        nome: "Levantamento Sem Movimento Desperdiçado",
        descricao:
          "Kozume Kenma (Hanami) realiza um levantamento com 140/160/180% de [Passe] como poder. Se o atacante (Power/Quick) após essa jogada estiver na linha de trás, o poder do ataque aumenta em 20%.",
      },
      {
        nome: "Procurar Falhas",
        descricao:
          "Quando Kozume Kenma (Hanami) executa Set ou Setter Dump, seu [Percepção] aumenta em 40/60/80% de [Reflexo] como poder. Se ele estiver em quadra e o bloqueio do aliado não for BAD, o poder do Spike atual do oponente (Power/Quick) aumenta em 10/13/16% do [Power/Ataque Rápido] correspondente (efeito de enfraquecimento para o oponente).",
      },
      {
        nome: "Jogada que Confunde o Adversário",
        descricao:
          "Kozume Kenma (Hanami) executa um Setter Dump com 255/270/285/300/315% de [Passe] como poder. Não pode ser bloqueado. Após essa jogada, quando um oponente realizar o primeiro Spike (Power/Quick), o [Power] desse jogador é reduzido em 40% por 2 cruzamentos de rede.",
      },
    ],
    symbols: ["img/receivesymbol.png", "img/settersymbol.png"],
  },

  {
    nome: "Kenma SSR",
    funcao: "S",
    img: "img/kenmaSR.png",
    School: "Nekoma",
    vinculo: ["Cérebro e Comandante"],
    Stats: {
      Serve: 1182,
      Spike: 1387,
      Set: 1387,
      Receive: 1122,
      Block: 1303,
      Save: 1060,
    },
    habilidades: [
      {
        nome: "VISÃO DIVINA",
        descricao:
          "Enquanto KENMA KOZUME está em quadra, aumenta o poder de Recepção dos seus jogadores em 8% do [Recepção]. Quando o Set de Kenma ou a Recepção do seu lado resulta em PERFECT, ganha 1 acúmulo de 'Keep It Alive'. Cada acúmulo aumenta o poder de Recepção dos seus jogadores em 3%, até 6 acúmulos.",
      },
      {
        nome: "LEVANTAMENTO CONFIÁVEL",
        descricao: "KENMA KOZUME executa um Set com 120% do seu [Passe].",
      },
      {
        nome: "O CÉREBRO",
        descricao:
          "Enquanto KENMA KOZUME está em quadra, aumenta o poder de Recepção dos seus jogadores em 6% do [Recepção]. Se 'Keep It Alive' exceder 5 acúmulos, aumenta adicionalmente o poder de Recepção em 150% e o de Save em 150%. Quando a Recepção ou o Save do seu lado falhar, consome 6 acúmulos de 'Keep It Alive' para converter o resultado em PERFECT.",
      },
      {
        nome: "DUMP ENGANOSO",
        descricao:
          "KENMA KOZUME executa um Setter Dump inbloqueável com 220% do seu [Passe].",
      },
    ],
    symbols: ["img/receivesymbol.png", "img/settersymbol.png"],
  },

  {
    nome: "Yaku SSR",
    funcao: "L",
    img: "img/yakuSR.png",
    School: "Nekoma",
    vinculo: ["Orientação Educacional"],
    Stats: {
      Serve: 1131,
      Spike: 1131,
      Set: 1253,
      Receive: 1391,
      Block: 1098,
      Save: 1323,
    },
    habilidades: [
      {
        nome: "Chave da Defesa",
        descricao:
          "Quando Morisuke Yaku está em quadra e a recepção de um aliado não é BAD, o [Recepção] e o [Save] de Morisuke Yaku aumentam em 3/4/5%, até 5 acúmulos.",
      },
      {
        nome: "Defesa Confiável",
        descricao:
          "Quando Morisuke Yaku está em quadra, o Ataque Rápido do seu Especialista em Ataque Rápido aumenta em 8/10/12% do [Ataque Rápido] desse jogador.",
      },
      {
        nome: "Super Líbero",
        descricao:
          "O [Recepção] de Morisuke Yaku aumenta em 11/13/15%. Se o resultado for NORMAL, muda para PERFECT.",
      },
      {
        nome: "Recepção Perfeita",
        descricao:
          "Morisuke Yaku realiza uma Recepção com 240/255/270/285/300% de [Recepção] como poder.",
      },
    ],
    symbols: ["img/receivesymbol.png"],
  },

  {
    nome: "Kuro SSR",
    funcao: "MB",
    img: "img/kuroSR.png",
    School: "Nekoma",
    vinculo: [],
    Stats: {
      Serve: 1221,
      Spike: 1318,
      Set: 1149,
      Receive: 1186,
      Block: 1389,
      Save: 1123,
    },
    habilidades: [
      {
        nome: "AURA DO ESPECIALISTA",
        descricao:
          "Enquanto TETSURO KUROO (Practice) está presente, aumenta a Força dos jogadores do tipo Ataque Rápido do seu lado em 16%.",
      },
      {
        nome: "ATAQUE CONSTANTE",
        descricao:
          "TETSURO KUROO (Practice) realiza um Ataque Rápido com 125% de [Ataque Rápido] como poder e recebe 1 acúmulo de 'Power Charge'; ao lançar [ATAQUE CONSTANTE], cada acúmulo aumenta o poder do spike em 15% de [Ataque Rápido] (máx. 2).",
      },
      {
        nome: "TORRE DE CONTROLE DO BLOQUEIO",
        descricao:
          "Enquanto TETSURO KUROO (Practice) está presente, aumenta o [Bloqueio] dos seus jogadores em 8%.",
      },
      {
        nome: "BLOQUEIO TOTAL",
        descricao:
          "TETSURO KUROO (Practice) realiza um Bloqueio com 170% de [Bloqueio] como poder; quando outros jogadores de bloqueio na linha de frente estão presentes, aumenta o poder deste bloqueio em 15% do [Bloqueio].",
      },
    ],
    symbols: ["img/blocksymbol.png", "img/quicksymbol.png"],
  },

  {
    nome: "Kuro UR",
    funcao: "MB",
    img: "img/kuroUR.png",
    School: "Nekoma",
    vinculo: ["Cérebro e Comandante"],
    Stats: {
      Serve: 1558,
      Spike: 1673,
      Set: 1551,
      Receive: 1581,
      Block: 1740,
      Save: 1533,
    },
    habilidades: [
      {
        nome: "Versátil",
        descricao:
          "Aumenta o [Ataque Rápido] de Tetsuro Kuroo em 10/12/14%. Quando ele está em quadra, seu [Bloqueio] e [Ataque Rápido] aumentam em 5% cada vez que a bola cruza a rede, até 5 vezes.",
      },
      {
        nome: "Ataque Rápido",
        descricao:
          "Tetsuro Kuroo realiza um Ataque Rápido com poder de [Ataque Rápido] × 125% e ganha 1 acúmulo de [Charge]. Ao ativar Ataque Rápido, o poder aumenta em [Ataque Rápido] × 5% por acúmulo de [Charge], até 3 acúmulos.",
      },
      {
        nome: "Liderança",
        descricao:
          "Aumenta o [Bloqueio] de Tetsuro Kuroo em 14/16/18%. Se o resultado do bloqueio for PERFECT, o atacante adversário (Power/Quick) recebe o debuff [Rage] (redução de 10% em [Power/Ataque Rápido]).",
      },
      {
        nome: "Bloqueio Líder",
        descricao:
          "Tetsuro Kuroo bloqueia com poder de [Bloqueio] × 235/250/265/280/295%. Se o atacante adversário tiver um efeito desfavorável, o poder desse bloqueio aumenta em [Bloqueio] × 20% adicionais.",
      },
    ],
    symbols: ["img/quicksymbol.png", "img/blocksymbol.png"],
  },

  {
    nome: "Lev SSR",
    funcao: "MB",
    img: "img/levSR.png",
    School: "Nekoma",
    vinculo: ["Orientação Educacional"],
    Stats: {
      Serve: 1206,
      Spike: 1318,
      Set: 1138,
      Receive: 1166,
      Block: 1378,
      Save: 1100,
    },
    habilidades: [
      {
        nome: "EXPLOSÃO DESENCADEADA",
        descricao:
          "Enquanto LEV HAIBA está em quadra, quando seu lado consegue uma Recepção PERFECT, o próximo Ataque Rápido dele ganha 15% do [Ataque Rápido] como poder adicional.",
      },
      {
        nome: "BLOQUEIO DE IMPULSO",
        descricao: "LEV HAIBA realiza um Bloqueio com 105% do seu [Bloqueio].",
      },
      {
        nome: "ATLETA DOTADO",
        descricao:
          "Quando LEV HAIBA realiza um Ataque Rápido e o bloqueador oponente está sob debuff, reduz o [Bloqueio] desse bloqueador em 10% do [Bloqueio] dele.",
      },
      {
        nome: "SPIKE TALENTOSO",
        descricao:
          "LEV HAIBA realiza um Ataque Rápido com 245% do seu [Ataque Rápido].",
      },
    ],
    symbols: ["img/quicksymbol.png", "img/blocksymbol.png"],
  },

  {
    nome: "Aone SP",
    data: "06/18/26",
    funcao: "MB",
    img: "img/aoneSP.png",
    School: "Dateko",
    vinculo: ["Natação"],
    Stats: {
      Serve: 1848,
      Spike: 1788,
      Set: 1754,
      Receive: 1667,
      Block: 1904,
      Save: 1605,
    },
    habilidades: [
      {
        nome: "Parede Poderosa",
        descricao:
          "O [Reflexo] de Aone Takanobu (Beach Boys) aumenta em 10/13/16%. Se a Stamina dele for menor que 80, seus [Bloqueio] e [Serve] aumentam em 10%. Ao bloquear, se o resultado for bloqueio duplo ou triplo, para cada membro bloqueador com habilidade de bloqueio, o poder do bloqueio aumenta em 20% do [Bloqueio] de Aone Takanobu (Beach Boys).",
      },
      {
        nome: "Saque que Motiva o Time",
        descricao:
          "Takanobu Aone (Beach Boys) executa um Salto-Saque com 140/160/180% de [Serve] como poder. O cooldown da habilidade do levantador oponente aumenta em 4× o número de cruzamentos de rede. Ao sair da quadra, se Aone ativou [Team Motivating Jump Serve] durante a partida, o [Offensive Technique] e o [Defensive Technique] dos seus jogadores aumentam em 5%. Se os acúmulos de [Tough Block] forem 3 ou mais, aumentam em mais 5%. Dura até a próxima partida de Aone. (Cada acúmulo de [Tough Block] concede +10% de [Reflexo], máx. 20).",
      },
      {
        nome: "Paredes Fortes e Altas",
        descricao:
          "Quando Aone está em quadra, cada vez que um oponente ataca (Power/Quick), o atacante ganha 1 acúmulo de [Locked On]. No início da partida, todos os oponentes ganham 1 acúmulo. Se um oponente tiver 2 acúmulos, consome-os e Aone ganha [Tough Block]. Com mais de 2 acúmulos de [Tough Block], o [Bloqueio] dele aumenta em 10% de [Bloqueio] como poder. Com mais de 4 acúmulos, o cooldown de [Sharp, Leading Block] cai para 8 cruzamentos (12 → 8). Com mais de 6, o [Spirit] aumenta em 10%. Com mais de 8, o cooldown cai para 4 (8 → 4).",
      },
      {
        nome: "Bloqueio Afiado e Conduzido",
        descricao:
          "Takanobu Aone (Beach Boys) bloqueia com 260/275/290/305/320% do [Bloqueio]. Aumenta a Moral do Time em 15.",
      },
    ],
    symbols: ["img/blocksymbol.png", "img/servesymbol.png"],
  },

  {
    nome: "Aone SSR",
    funcao: "MB",
    img: "img/aoneSR.png",
    School: "Dateko",
    vinculo: ["O Silencioso e o Sarcástico"],
    Stats: {
      Serve: 1219,
      Spike: 1316,
      Set: 1146,
      Receive: 1173,
      Block: 1389,
      Save: 1102,
    },
    habilidades: [
      {
        nome: "TRANCAR O ACE",
        descricao:
          "Quando TAKANOBU AONE consegue um Bloqueio PERFECT, marca o spiker adversário, reduzindo o poder do próximo spike em 10% do [Power/Ataque Rápido] e aumentando o consumo de Stamina em 30%.",
      },
      {
        nome: "GOLPE PESADO",
        descricao:
          "TAKANOBU AONE realiza um Ataque Rápido com 120% do [Ataque Rápido].",
      },
      {
        nome: "FORMAÇÃO TRIPLA",
        descricao:
          "Quando TAKANOBU AONE bloqueia, para cada jogador do tipo Block no seu lado (1), aumenta o poder do Bloqueio em 1% do [Bloqueio]; quando os 3 da linha de frente são do tipo Block, aumenta em mais 4% do [Bloqueio].",
      },
      {
        nome: "PILAR DE FERRO",
        descricao:
          "TAKANOBU AONE realiza um Bloqueio com 195% do [Bloqueio]. Ao bloquear um Power Spike adversário, aumenta o poder em mais 9% do [Bloqueio].",
      },
    ],
    symbols: ["img/quicksymbol.png", "img/blocksymbol.png"],
  },

  {
    nome: "Futakuchi SSR",
    funcao: "WS",
    img: "img/futakuchiSR.png",
    School: "Dateko",
    vinculo: ["O Silencioso e o Sarcástico", "O Novo Capitão e o Novato Altão"],
    Stats: {
      Serve: 1217,
      Spike: 1316,
      Set: 1147,
      Receive: 1184,
      Block: 1385,
      Save: 1122,
    },
    habilidades: [
      {
        nome: "AUTORIDADE DO CAPITÃO",
        descricao:
          "Enquanto KENJI FUTAKUCHI está presente, aumenta o poder de Bloqueio do seu lado em 8% do [Bloqueio] de cada jogador.",
      },
      {
        nome: "INICIAR ATAQUE",
        descricao:
          "KENJI FUTAKUCHI executa um Salto-Saque com 120% do [Serve] como poder.",
      },
      {
        nome: "LEVANTANDO A DEFESA",
        descricao:
          "Enquanto KENJI FUTAKUCHI está presente, para cada jogador do tipo Block no seu lado (1), aumenta o poder de Bloqueio em 0.5% do [Bloqueio].",
      },
      {
        nome: "PAREDE DE FERRO INQUEBRÁVEL",
        descricao:
          "KENJI FUTAKUCHI realiza um Bloqueio com 195% do [Bloqueio]; quando o atacante adversário está sob debuff, aumenta o poder desse bloqueio em mais 10% do [Bloqueio].",
      },
    ],
    symbols: ["img/blocksymbol.png", "img/servesymbol.png"],
  },

  {
    nome: "Sasaya SSR",
    funcao: "OP",
    img: "img/sasayaSR.png",
    School: "Dateko",
    vinculo: [],
    Stats: {
      Serve: 1184,
      Spike: 1378,
      Set: 1120,
      Receive: 1314,
      Block: 1255,
      Save: 1127,
    },
    habilidades: [
      {
        nome: "RESPOSTA CALMA",
        descricao:
          "Aumenta o [Percepção] de TAKEHITO SASAYA em 5%; enquanto ele estiver presente, aumenta o [Reflexo] dos jogadores do seu lado em 5%.",
      },
      {
        nome: "DEFESA IMPENETRÁVEL",
        descricao:
          "TAKEHITO SASAYA realiza um Bloqueio com 105% do [Bloqueio].",
      },
      {
        nome: "PAREDE DE FERRO FORTIFICADA",
        descricao:
          "Enquanto TAKEHITO SASAYA estiver presente e seu lado estiver atrás, aumenta o poder das habilidades de Bloqueio do seu time em mais 3% do [Bloqueio] de cada bloqueador e aumenta o [Reflexo] dos bloqueadores em 5%.",
      },
      {
        nome: "JOGADA AGRESSIVA",
        descricao:
          "TAKEHITO SASAYA realiza um Power Spike com 240% do [Ataque Potente].",
      },
    ],
    symbols: ["img/powersymbol.png"],
  },

  {
    nome: "Koganegawa SSR",
    funcao: "S",
    img: "img/koganegawaSR.png",
    School: "Dateko",
    vinculo: ["O Novo Capitão e o Novato Altão"],
    Stats: {
      Serve: 1166,
      Spike: 1302,
      Set: 1365,
      Receive: 1100,
      Block: 1306,
      Save: 1031,
    },
    habilidades: [
      {
        nome: "Levantador Novato",
        descricao: "KANJI KOGANEGAWA realiza um Set com 120% do seu [Passe].",
      },
      {
        nome: "Faísca do Bloqueio",
        descricao:
          "KANJI KOGANEGAWA realiza um Bloqueio com 105% do seu [Bloqueio]. Enquanto ele está em quadra, quando o oponente realiza um Power Spike, os bloqueadores do seu lado ganham 3% de poder adicional de Bloqueio com base no próprio [Bloqueio].",
      },
      {
        nome: "Parede de Ferro III",
        descricao:
          "Enquanto KANJI KOGANEGAWA está em quadra, aumenta o poder das habilidades de Bloqueio dos outros jogadores em 2% do [Bloqueio] deles.",
      },
      {
        nome: "Finta Relâmpago",
        descricao:
          "KANJI KOGANEGAWA realiza um Setter Dump inbloqueável com 210% do seu [Passe].",
      },
    ],
    symbols: ["img/blocksymbol.png", "img/settersymbol.png"],
  },

  {
    nome: "Oikawa UR",
    data: "09/14/25",
    funcao: "S",
    img: "img/oikawaUR.png",
    School: "Aoba Johsai",
    vinculo: ["Harmonia Perfeita"],
    Stats: {
      Serve: 1705,
      Spike: 1533,
      Set: 1627,
      Receive: 1378,
      Block: 1530,
      Save: 1290,
    },
    habilidades: [
      {
        nome: "Levantamento do Rei",
        descricao:
          "Oikawa Tooru realiza Sets com 120/135/150% de [Passe] como poder. Se um companheiro em quadra realizar uma jogada com resultado PERFECT, ele ganha 1 acúmulo de [Offensive Rhythm]. Para cada acúmulo, o [Percepção] dos seus jogadores em quadra aumenta em 1%, até 10 acúmulos.",
      },
      {
        nome: "Talento Inigualável",
        descricao:
          "Oikawa Tooru realiza um Setter Dump com 115% de [Passe] como poder. Não pode ser bloqueado. Se Oikawa estiver em quadra, um Ataque Potente de um aliado tem seu [Power] aumentado em 20%.",
      },
      {
        nome: "Maestro",
        descricao:
          "Quando Oikawa Tooru está em quadra, o [Percepção] dos seus jogadores em quadra aumenta em 10/14/18%. (Se Oikawa tiver 6+ acúmulos de [Offensive Rhythm]). Quando um aliado usa uma habilidade de Ataque Potente, consome 6 acúmulos de [Offensive Rhythm] e garante resultado PERFECT.",
      },
      {
        nome: "Salto-Saque do Grande Rei",
        descricao:
          "Oikawa Tooru realiza um Salto-Saque com 260/275/290/305/320% de [Serve] como poder. Essa jogada aumenta seu [Percepção] em 20% e seu [Power] em 20%.",
      },
    ],
    symbols: [
      "img/powersymbol.png",
      "img/servesymbol.png",
      "img/settersymbol.png",
    ],
  },

  {
    nome: "Oikawa SSR",
    funcao: "S",
    img: "img/oikawaSR.png",
    School: "Aoba Johsai",
    vinculo: [],
    Stats: {
      Serve: 1391,
      Spike: 1327,
      Set: 1327,
      Receive: 1125,
      Block: 1248,
      Save: 1054,
    },
    habilidades: [
      {
        nome: "VISÃO DE QUADRA",
        descricao:
          "Aumenta o [Passe] de TORU OIKAWA (Practice) em 10%. Quando seus jogadores lançam uma habilidade de Spike, eles ganham 1 acúmulo de 'Attack Tempo'. Cada acúmulo aumenta o [Percepção] dos seus jogadores em 1%, até 10.",
      },
      {
        nome: "MUDANÇA DE JOGO",
        descricao:
          "Enquanto TORU OIKAWA (Practice) está em quadra, no início de cada turno, se seu lado estiver atrás, aumenta todos os Stats básicos dos seus jogadores em 6%, por 8 cruzamentos de rede.",
      },
      {
        nome: "TORRE DE CONTROLE",
        descricao:
          "Enquanto TORU OIKAWA (Practice) está em quadra, aumenta o [Percepção] dos seus jogadores em 6%. Cada acúmulo de 'Attack Tempo' fornece +1% adicional de [Percepção].",
      },
      {
        nome: "SAQUE DE DUAS LÂMINAS",
        descricao:
          "TORU OIKAWA (Practice) executa um Power Jump Serve com 240% do [Serve]. Para esse saque, o [Percepção] dele aumenta em 15%. Há 5% de chance fixa de falha.",
      },
    ],
    symbols: [
      "img/powersymbol.png",
      "img/servesymbol.png",
      "img/settersymbol.png",
    ],
  },

  {
    nome: "Iwaizumi SSR",
    funcao: "WS",
    img: "img/iwazumiSR.png",
    School: "Aoba Johsai",
    vinculo: ["Harmonia Perfeita", "A Matilha"],
    Stats: {
      Serve: 1190,
      Spike: 1385,
      Set: 1118,
      Receive: 1314,
      Block: 1248,
      Save: 1129,
    },
    habilidades: [
      {
        nome: "Força do Ace",
        descricao:
          "Aumenta o [Percepção] de HAJIME IWAIZUMI em 5% e a Força em 10%.",
      },
      {
        nome: "Defesa Focada",
        descricao:
          "HAJIME IWAIZUMI realiza uma Recepção com 120% de [Recepção] como poder.",
      },
      {
        nome: "Arenga do Vice-Capitão",
        descricao:
          "Enquanto HAJIME IWAIZUMI está presente, aumenta a Força dos jogadores do seu lado em 6%.",
      },
      {
        nome: "Frente a Frente",
        descricao:
          "HAJIME IWAIZUMI executa um Power Spike com 240% do [Ataque Potente]. Se esse spike for crítico, aumenta o poder em mais 15% do [Ataque Potente].",
      },
    ],
    symbols: ["img/powersymbol.png"],
  },

  {
    nome: "Kentaro MAD DOG SSR",
    funcao: "OP",
    img: "img/kentaroSR.png",
    School: "Aoba Johsai",
    vinculo: ["A Matilha"],
    Stats: {
      Serve: 1320,
      Spike: 1383,
      Set: 1106,
      Receive: 1235,
      Block: 1179,
      Save: 1109,
    },
    habilidades: [
      {
        nome: "ATAQUE FEROZ",
        descricao:
          "Aumenta o [Percepção] de KENTARO KYOTANI em 8% e o [Ataque Potente] em 5%.",
      },
      {
        nome: "SAQUE CÃO LOUCO",
        descricao:
          "KENTARO KYOTANI realiza um Saque com 130% do seu [Serve]. Para esse saque, o [Percepção] dele aumenta em 15%, com chance fixa de 10% de falha.",
      },
      {
        nome: "EXPLOSÃO DE FORÇA",
        descricao: "Aumenta a Força de KENTARO KYOTANI em 18%.",
      },
      {
        nome: "PRESA DO CÃO LOUCO",
        descricao:
          "KENTARO KYOTANI realiza um Power Spike com 210% do [Ataque Potente], reduzindo a Stamina dos bloqueadores e recebedores oponentes em 10.",
      },
    ],
    symbols: ["img/powersymbol.png", "img/servesymbol.png"],
  },

  {
    nome: "Ushijima UR",
    funcao: "OP",
    img: "img/ushijimaUR.png",
    School: "Shiratorizawa",
    vinculo: ["Bests para a vida", "Campeão Absoluto e Levantador Sólido"],
    Stats: {
      Serve: 1499,
      Spike: 1574,
      Set: 1261,
      Receive: 1417,
      Block: 1345,
      Save: 1261,
    },
    habilidades: [
      {
        nome: "NO RITMO",
        descricao:
          "Aumenta o [Percepção] de WAKATOSHI USHIJIMA em 8%. Enquanto ele está em quadra, seu [Percepção] aumenta em mais 3% ao fim de cada turno.",
      },
      {
        nome: "SAQUE DOMINANTE",
        descricao:
          "WAKATOSHI USHIJIMA realiza um Salto-Saque com 125% do [Serve]. Se for um Saque Crítico, os recebedores adversários não podem usar habilidades. Quando esse saque pontua, reduz o cooldown de SAQUE DOMINANTE em 4 cruzamentos de rede.",
      },
      {
        nome: "EXPLOSÃO DE FORÇA",
        descricao: "Aumenta a Força de WAKATOSHI USHIJIMA em 18%.",
      },
      {
        nome: "SPIKE ESMAGADOR",
        descricao:
          "WAKATOSHI USHIJIMA realiza um Power Spike com 220% do [Ataque Potente]. Esse Spike causa 30% de dano adicional ao Líbero adversário.",
      },
      {
        nome: "Estilo Ace",
        descricao:
          "Quando seus jogadores acertam Spikes Críticos, WAKATOSHI USHIJIMA ganha +1.5% em todos os Stats Básicos, até 8 acúmulos. Quando ele pontua, remove todos os debuffs de si mesmo.",
      },
      {
        nome: "Ace Indiscutível",
        descricao:
          "WAKATOSHI USHIJIMA realiza um Power Spike com 250% do [Ataque Potente]. Se for Crítico, reduz o cooldown de [UNDISPUTED ACE] em 1 cruzamento de rede.",
      },
    ],
    symbols: ["img/powersymbol.png", "img/servesymbol.png"],
  },

  {
    nome: "Tendo SSR",
    funcao: "MB",
    img: "img/tendoSR.png",
    School: "Shiratorizawa",
    vinculo: ["Bests para a vida"],
    Stats: {
      Serve: 1214,
      Spike: 1314,
      Set: 1140,
      Receive: 1177,
      Block: 1387,
      Save: 1100,
    },
    habilidades: [
      {
        nome: "No Meu Ritmo",
        descricao: "O [Reflexo] de Tendo Satoru aumenta em 12/17/22%.",
      },
      {
        nome: "Ataque Surpresa",
        descricao:
          "Tendo Satoru realiza um Ataque Rápido com 120/135/150% de [Ataque Rápido] como poder.",
      },
      {
        nome: "Guerra Psicológica do Bloqueio",
        descricao:
          "Se o bloqueio de Satoru Tendo resultar em boa jogada, o cooldown de Sharp Reading é reduzido em 1/2/3 × o número de cruzamentos de rede.",
      },
      {
        nome: "Leitura Afiada",
        descricao:
          "Satoru Tendo bloqueia com 220/235/250/265/280% do seu [Bloqueio]. Se o spike adversário (Power ou Quick) for uma boa jogada, o [Reflexo] de Tendo Satoru aumenta em 15%.",
      },
    ],
    symbols: ["img/blocksymbol.png"],
  },

  {
    nome: "Goshiki SSR",
    funcao: "WS",
    img: "img/goshikiSR.png",
    School: "Shiratorizawa",
    vinculo: ["WS de Shiratorizawa"],
    Stats: {
      Serve: 1188,
      Spike: 1383,
      Set: 1115,
      Receive: 1314,
      Block: 1240,
      Save: 1122,
    },
    habilidades: [
      {
        nome: "Corresponder às Expectativas",
        descricao:
          "Quando Tsutomu Goshiki pontua, a Moral do Time aumenta em 8/10/12.",
      },
      {
        nome: "Recepção Pura",
        descricao:
          "Tsutomu Goshiki recebe com 120/135/150% de [Recepção] como poder.",
      },
      {
        nome: "Próximo Ace",
        descricao:
          "Ao fim de cada rali, Tsutomu Goshiki ganha 1 acúmulo de [Sharpness]. Cada acúmulo aumenta o [Ataque Potente] em 2.5/3.3/5%, até 5.",
      },
      {
        nome: "Fazer um Milagre",
        descricao:
          "Tsutomu Goshiki realiza um Ataque Potente com 225/240/255/270/285% de [Ataque Potente] como poder. Aumenta o [Percepção] em 10%.",
      },
    ],
    symbols: ["img/powersymbol.png", "img/servesymbol.png"],
  },

  {
    nome: "Shirabu SSR",
    funcao: "S",
    img: "img/shirabuSR.png",
    School: "Shiratorizawa",
    vinculo: ["Campeão Absoluto e Levantador Sólido"],
    Stats: {
      Serve: 1303,
      Spike: 1382,
      Set: 1242,
      Receive: 1118,
      Block: 1239,
      Save: 1041,
    },
    habilidades: [
      {
        nome: "Como de Costume",
        descricao:
          "Aumenta o [Passe] de Kenjiro Shirabu em 10/13/16%. Se o membro que vai atacar (Power/Quick) for um power hitter, o poder do spike aumenta em 8% do [Ataque Potente] desse membro.",
      },
      {
        nome: "Setter Dump Simples",
        descricao:
          "Kenjiro Shirabu executa um Setter Dump com 120/135/150% de [Passe] como poder. Não pode ser bloqueado.",
      },
      {
        nome: "Capacidade de Correção",
        descricao: "O [Percepção] de Kenjiro Shirabu aumenta em 9/12/15%.",
      },
      {
        nome: "Levantamento que Tira o Máximo do Atacante",
        descricao:
          "Kenjiro Shirabu realiza um Set com 210/225/240/250/270% de [Passe] como poder. Aumenta o [Percepção] em 10%.",
      },
    ],
    symbols: ["img/powersymbol.png", "img/settersymbol.png"],
  },

  {
    nome: "Semi SSR",
    funcao: "S",
    img: "img/semiSR.png",
    School: "Shiratorizawa",
    vinculo: [],
    Stats: {
      Serve: 1476,
      Spike: 1329,
      Set: 1406,
      Receive: 1184,
      Block: 1329,
      Save: 1111,
    },
    habilidades: [
      {
        nome: "Controle",
        descricao:
          "Quando Eita Semi realiza um saque, o [Recepção] do recebedor adversário é reduzido em 13/15.5/18% do [Recepção] desse jogador por 4 cruzamentos de rede.",
      },
      {
        nome: "Montagem de Protótipo",
        descricao:
          "Semi Eita realiza um Set com 120/135/150% de [Passe] como poder.",
      },
      {
        nome: "Demonstração de Habilidade",
        descricao:
          "Quando Eita Semi saca, o [Percepção] aumenta em 5/5/8% e o [Power] em 10/15/15%.",
      },
      {
        nome: "Isso Aqui é de Graça",
        descricao:
          "Eita Semi executa um Salto-Saque com 220/235/250/265/280% do seu [Serve]. Se marcar ace, o [Percepção] dos companheiros aumenta em 3% e o [Reflexo] em 6%.",
      },
    ],
    symbols: [
      "img/powersymbol.png",
      "img/servesymbol.png",
      "img/settersymbol.png",
    ],
  },

  {
    nome: "Ohira SSR",
    funcao: "WS",
    img: "img/ohiraSR.png",
    School: "Shiratorizawa",
    vinculo: ["WS de Shiratorizawa"],
    Stats: {
      Serve: 1272,
      Spike: 1477,
      Set: 1188,
      Receive: 1399,
      Block: 1332,
      Save: 1197,
    },
    habilidades: [
      {
        nome: "Defesa Forte",
        descricao:
          "Quando Ohira Reon recebe, se o Ataque Rápido do oponente for uma boa jogada, o poder dessa recepção é 40/55/70% do [Recepção].",
      },
      {
        nome: "Defesa que Muda o Rumo",
        descricao:
          "Ohira Reon recebe com 120/135/150% de [Recepção] como poder.",
      },
      {
        nome: "O Gentil “Benkei”",
        descricao:
          "O [Percepção] de Ohira Reon aumenta em 5/5/8% e o [Reflexo] em 10/15/15%.",
      },
      {
        nome: "Spikes Poderosos",
        descricao:
          "Ohira Reon realiza um Power Spike com 240/255/270/285/300% de [Ataque Potente] como poder.",
      },
    ],
    symbols: ["img/receivesymbol.png"],
  },

  /* ==missing Stats== */ {
    nome: "Yamagata SSR",
    funcao: "L",
    img: "img/yamagataSR.png",
    School: "Shiratorizawa",
    vinculo: [],
    Stats: { Serve: 1, Spike: 1, Set: 1, Receive: 1, Block: 1, Save: 1 },
    habilidades: [
      {
        nome: "Habilidade Estável",
        descricao: "O [Reflexo] de Yamagata Hayato aumenta em 13/20/15%.",
      },
      {
        nome: "Amplitude Defensiva",
        descricao:
          "Yamagata Hayato realiza um Save com [Save] × 120/135/150% como poder.",
      },
      {
        nome: "Reflexos",
        descricao:
          "Se o bloqueio do oponente for PERFECT, o Save de Yamagata Hayato aumenta em [Save] × 40/50/60%.",
      },
      {
        nome: "Recepção Sólida",
        descricao:
          "Yamagata Hayato recebe com [Recepção] × 235/250/265/280/295% como poder.",
      },
    ],
    symbols: ["img/receivesymbol.png"],
  },

  {
    nome: "Bokuto UR",
    data: "08/30/25",
    funcao: "WS",
    img: "img/bokutoUR.png",
    School: "Fukurodani",
    vinculo: ["Ás Milagroso e Levantador Carinhoso"],
    Stats: {
      Serve: 1495,
      Spike: 1572,
      Set: 1262,
      Receive: 1417,
      Block: 1347,
      Save: 1268,
    },
    habilidades: [
      {
        nome: "Influência do Entusiasmo",
        descricao:
          "Quando Bokuto Kotaro joga, a Moral do Time dos aliados aumenta em 20/25/30%. Quando Bokuto Kotaro está em quadra, a Moral aumenta em 4 sempre que um aliado toca na bola. Efeito de Despertar de Moral para aliados alterado: Stats básicos de todos os membros em quadra aumentam em 32/36/40%. Dura até os aliados tocarem na bola quatro vezes.",
      },
      {
        nome: "Grande Sacador",
        descricao:
          "Kotaro Bokuto executa um Salto-Saque com [Serve] × 125/140/155% de poder.",
      },
      {
        nome: "Altos e Baixos de Humor",
        descricao:
          "Sob [Excellent Condition], o [Ataque Potente] de Kotaro Bokuto aumenta em 12/15/18% e o [Power] em 18/22.5/27%. Sob [Depressed Mode], Kotaro Bokuto não pode ativar habilidades de Ataque Potente. Quando um aliado ativa o Despertar de Moral, Bokuto obtém [Excellent Condition]. Quando o despertar termina, ele ganha [Depressed Mode]. Ao fim de cada rali, Bokuto perde [Sad Mode].",
      },
      {
        nome: "Ace Graças a Todos",
        descricao:
          "Kotaro Bokuto realiza um Ataque Potente com [Ataque Potente] × 260/275/290/305/320% de poder. Se for uma boa jogada, o [Power] de Bokuto aumenta em 12/14/16/18/20% e a Moral do Time aumenta em 16.",
      },
    ],
    symbols: ["img/powersymbol.png", "img/servesymbol.png"],
  },

  {
    nome: "Bokuto SP",
    data: "05/12/26",
    funcao: "WS",
    img: "img/bokutoSP.png",
    School: "Fukurodani",
    vinculo: ["Natação", "Ace Milagroso e Levantador Carinhoso"],
    Stats: {
      Serve: 1673,
      Spike: 1950,
      Set: 1574,
      Receive: 1856,
      Block: 1760,
      Save: 1572,
    },
    habilidades: [
      {
        nome: "Animar",
        descricao:
          "O [Ataque Potente] de Kotaro Bokuto (Beach Boys) aumenta em 13/16/19%. Quando ele está em quadra, os efeitos de aumento de Moral para aliados, exceto 'Encourage', são reduzidos em 100%; a cada 10 de Moral reduzida, o jogador ganha 1 acúmulo de 'United'. Por acúmulo, os Stats básicos dos aliados aumentam em 0.16%, até 199 acúmulos.",
      },
      {
        nome: "Participação Defensiva",
        descricao:
          "Kotaro Bokuto (Sea Bathing) recebe com [Recepção] × 140/160/180% de poder. Ganha 3 acúmulos de [Unity].",
      },
      {
        nome: "Sempre Animado!",
        descricao:
          "Se estiver com [Best Condition], quando Kotaro Bokuto (Beach Boys) ativa o Ultimate, seu [Ataque Potente] aumenta em 1% por acúmulo de [United] (máx. +70%) até a bola cruzar a rede duas vezes. Além disso, por acúmulo de [United], o poder do seu Ataque Potente aumenta em [Ataque Potente] × 1.5% (máx. +120%) até a bola cruzar a rede duas vezes. Após o Ultimate, ele ganha [Ups and Downs].",
      },
      {
        nome: "Spike Milagroso",
        descricao:
          "Kotaro Bokuto (Beach Boys) realiza um Spike com 260/280/300/320/340% do [Ataque Potente]. Para cada acúmulo de [United], o [Técnica de Ataque] dele aumenta em 0.75%, até 30%, até a bola cruzar a rede duas vezes.",
      },
    ],
    symbols: ["img/powersymbol.png", "img/receivesymbol.png"],
  },

  {
    nome: "Akaashi SP",
    data: "06/11/26",
    funcao: "S",
    img: "img/akaashiSP.png",
    School: "Fukurodani",
    vinculo: ["Natação", "Ace Milagroso e Levantador Carinhoso"],
    Stats: {
      Serve: 1848,
      Spike: 1754,
      Set: 1949,
      Receive: 1581,
      Block: 1758,
      Save: 1489,
    },
    habilidades: [
      {
        nome: "Organizador de time",
        descricao:
          "A [Saque] do Akaashi Kyoji (Beach Boy) aumenta em 13/15/18%. Quando a moral do time de um aliado sobe, o Akaashi Kyoji (Beach Boy) ganha 1 acúmulo do efeito [Mente Tranquila] a cada 10 pontos de moral. Cada acúmulo de [Mente Tranquila] aumenta o [Levantamento] dele em 1,5%, até 10 acúmulos. Enquanto o Despertar da Moral do Time não estiver ativo, todos os acúmulos de [Mente Tranquila] são consumidos quando o Akaashi Kyoji (Beach Boy) toca na bola. Cada vez que um acúmulo de [Mente Tranquila] é consumido, o [Espírito] do Akaashi Kyoji (Beach Boy) aumenta em 3%, chegando a no máximo 30%. Esse efeito dura por 2 passagens pela rede.",
      },
      {
        nome: "Aproveitamento Maximo",
        descricao:
          "Keiji Akaashi (Beach Boy) executa um Levantamento com poder de 140/155/170% do seu [Levantamento]. Depois dessa jogada, na próxima vez que ele ativar o Ultimate, o [Levantamento] dele aumenta em 15%. Esse efeito dura por 2 passagens pela rede.",
      },
      {
        nome: "Atacar",
        descricao:
          "Enquanto um aliado estiver com o Despertar da Moral do Time ativo, quando o Keiji Akaashi (Beach Boy) tocar na bola, 5 acúmulos de [Mente Tranquila] são consumidos e o [Espírito] dele aumenta em 70%. Esse efeito dura por 2 passagens pela rede.Se o levantamento do Keiji Akaashi (Beach Boy) for um Acerto Crítico, a [Percepção] do primeiro jogador a cortar (Ataque Potente/Ataque Rápido) depois dessa jogada aumenta em 50% da [Percepção] do Keiji Akaashi (Beach Boy), até no máximo 60%.Se essa cortada for um Ataque Potente, a [Percepção] de quem realizou a cortada recebe mais 50% da [Percepção] do Keiji Akaashi (Beach Boy), até no máximo 60%.Quando [Mostre 100% do Seu Treino] for ativado, para cada acúmulo de [Mente Tranquila] que ele tiver, o [Ataque Potente] de quem fizer a cortada aumenta em 3/3,5/4%, até no máximo 24/28/32%.",
      },
      {
        nome: "Jogada Decisiva",
        descricao:
          "Akaashi Kyoji (Beach Boy) executa uma Finta do Levantador com poder de 260/280/300/320/340% do seu [Levantamento]. A Finta do Levantador não pode ser bloqueada.Se essa finta for um Acerto Crítico, o tempo de recarga de [Mostre 100% do Seu Treino] é reduzido em 4 passagens pela rede.Ganha 1 acúmulo de [Mente Tranquila].",
      },
    ],
    symbols: ["img/powersymbol.png", "img/settersymbol.png"],
  },

  {
    nome: "Akaashi SSR",
    funcao: "S",
    img: "img/akaashiSR.png",
    School: "Fukurodani",
    vinculo: ["Ás Milagroso e Levantador Carinhoso"],
    Stats: {
      Serve: 1396,
      Spike: 1331,
      Set: 1476,
      Receive: 1191,
      Block: 1334,
      Save: 1123,
    },
    habilidades: [
      {
        nome: "Intuição Instantânea",
        descricao:
          "Quando Keiji Akaashi está em quadra e um aliado consegue bloqueio ou recepção PERFECT, todos os efeitos negativos desse aliado são removidos. O [Percepção] de Akaashi aumenta em 8/10/12% e a Moral do Time aumenta em 3.",
      },
      {
        nome: "O Cérebro de Fukurodani",
        descricao:
          "Keiji Akaashi executa um Setter Dump com 120/135/150% de [Passe] como poder. Não pode ser bloqueado. Se pontuar com esse Setter Dump, o poder do primeiro Saque do próximo companheiro aumenta em 10% do [Serve] dele.",
      },
      {
        nome: "Levantamento Devotado",
        descricao:
          "Aumenta o [Passe] de Keiji Akaashi em 8/10/12%. Enquanto o Despertar de Moral estiver ativo, a cada 4 de Moral, o [Percepção] de Akaashi aumenta em 1.2/1.7/2.3%. Se o set dele resultar em boa jogada, o primeiro Spike (Power/Quick) de um aliado após essa jogada é garantido como NICE.",
      },
      {
        nome: "Levantamento de Sempre",
        descricao:
          "Keiji Akaashi realiza um Set com 240/255/270/285/300% de [Passe] como poder.",
      },
    ],
    symbols: ["img/powersymbol.png", "img/settersymbol.png"],
  },

  {
    nome: "Konoha SSR",
    funcao: "OP",
    img: "img/konohaSR.png",
    School: "Fukurodani",
    vinculo: [],
    Stats: {
      Serve: 1256,
      Spike: 1462,
      Set: 1196,
      Receive: 1274,
      Block: 1333,
      Save: 1335,
    },
    habilidades: [
      {
        nome: "Recepção Excelente",
        descricao:
          "O [Recepção] de Akinori Konoha aumenta em 8/10/12%. Enquanto o Despertar de Moral estiver ativo, seus [Recepção] e [Save] aumentam em 10%.",
      },
      {
        nome: "Uma Combinação Primorosa",
        descricao:
          "Akinori Konoha realiza um Save com 120/135/150% de [Cover] como poder.",
      },
      {
        nome: "Bloqueio do Polivalente",
        descricao:
          "Quando Akinori Konoha está na linha de frente, o [Bloqueio] e o [Power/Ataque Rápido] de todos os aliados na linha de frente aumentam em 8/10/12%. Se ele estiver na linha de trás, o [Recepção] e o [Save] de todos os aliados na linha de trás aumentam em 8/10/12%.",
      },
      {
        nome: "Sr. Habilidoso (mas Pobre)",
        descricao:
          "Akinori Konoha recebe com 225/240/255/270/285% de [Recepção] como poder. Se o resultado não for BAD, a Moral do Time aumenta em 20.",
      },
    ],
    symbols: ["img/receivesymbol.png"],
  },

  /* ==missing Stats== */ {
    nome: "Haruki SSR",
    funcao: "L",
    img: "img/harukiSR.png",
    School: "Fukurodani",
    vinculo: [],
    Stats: { Serve: 1, Spike: 1, Set: 1, Receive: 1, Block: 1, Save: 1 },
    habilidades: [
      {
        nome: "Mestre da Defesa",
        descricao:
          "O [Recepção] de Haruki Komi aumenta em 8/10/12%. Se o resultado da sua recepção não for BAD, a Moral do Time adversário diminui em 12.",
      },
      {
        nome: "Lubrificante da Equipe (0_0)",
        descricao:
          "Haruki Komi realiza um Save que usa 110/125/140% de [Save] como poder. Se o resultado não for BAD, os Stats principais dos aliados aumentam em 5/6.5/8% por 1 rali.",
      },
      {
        nome: "Recepção Comprovada",
        descricao:
          "Quando Haruki Komi recebe e o oponente dispara um ataque poderoso, o poder dessa recepção aumenta em 30/40/50% de [Recepção] como poder.",
      },
      {
        nome: "Centro da Defesa",
        descricao:
          "Haruki Komi executa uma recepção com 235/250/265/280/295% de [Recepção] como poder.",
      },
    ],
    symbols: ["img/receivesymbol.png"],
  },

  /* ==missing Stats== */ {
    nome: "Tatsuo SSR",
    funcao: "MB",
    img: "img/tatsuoSR.png",
    School: "Fukurodani",
    vinculo: [],
    Stats: { Serve: 1, Spike: 1, Set: 1, Receive: 1, Block: 1, Save: 1 },
    habilidades: [
      {
        nome: "Bloqueio Intimidante",
        descricao:
          "O [Bloqueio] de Tatsuki Washio aumenta em 8/10/12%. Ao bloquear, o poder da primeira recepção do companheiro após essa jogada aumenta em 20% de [Recepção]. Se o bloqueio dele não for BAD, o próximo bloqueio dele aumenta em 20% de [Bloqueio].",
      },
      {
        nome: "Ataque de Alta Pontuação",
        descricao:
          "Tatsuki Washio executa um Ataque Rápido com 120/135/150% de [Ataque Rápido] como poder.",
      },
      {
        nome: "Trabalhador de Talento Oculto",
        descricao:
          "Quando um oponente faz uma boa jogada, o [Bloqueio] e o [Ataque Rápido] de Tatsuki Washio aumentam em 2/2.5/3%, até 5 acúmulos.",
      },
      {
        nome: "Bloqueio que Aproveita o Corpo Alto",
        descricao:
          "Tatsuki Washio bloqueia com 220/235/250/265/280% de [Bloqueio] como poder.",
      },
    ],
    symbols: ["img/quicksymbol.png", "img/blocksymbol.png"],
  },

  {
    nome: "Terushima SSR",
    funcao: "WS",
    img: "img/terushimaSR.png",
    School: "Jozenji",
    vinculo: [],
    Stats: {
      Serve: 1401,
      Spike: 1470,
      Set: 1196,
      Receive: 1335,
      Block: 1263,
      Save: 1196,
    },
    habilidades: [
      {
        nome: "Espírito Livre",
        descricao:
          "Aumenta o [Ataque Potente] de Terushima Yuji em 8/10/12%. Quando ele está em quadra e o resultado da recepção, Save ou Set de um aliado não for BAD, Terushima Yuji ganha 1 acúmulo de [Play More, Play More]. Cada acúmulo aumenta [Power/Ataque Rápido] em 2.5%, até 4 acúmulos.",
      },
      {
        nome: "Saque Divertido",
        descricao:
          "Terushima Yuji executa um Salto-Saque com 120/135/150% de [Serve] como poder.",
      },
      {
        nome: "Asoviva",
        descricao:
          "Para cada membro recebedor na sua equipe, o [Recepção] de Terushima Yuji aumenta em 4/5/6%. Se ele errar uma recepção, nenhum ponto é perdido. O cooldown desse efeito dura até a bola cruzar a rede 10 vezes.",
      },
      {
        nome: "Spike Empolgante",
        descricao:
          "Terushima Yuji executa um Power Spike com 235/250/265/280/295% de [Ataque Potente]. Se marcar ponto, o [Recepção] dos aliados aumenta em 10% por 3 cruzamentos de rede.",
      },
    ],
    symbols: ["img/powersymbol.png", "img/servesymbol.png"],
  },

  {
    nome: "Atsumu UR",
    data: "10/14/25",
    funcao: "S",
    img: "img/atsumuUR.png",
    School: "Inarizaki",
    vinculo: ["A força dos Gêmeos", "Cabeça dos Gêmeos"],
    Stats: {
      Serve: 1705,
      Spike: 1539,
      Set: 1629,
      Receive: 1376,
      Block: 1530,
      Save: 1290,
    },
    habilidades: [
      {
        nome: "Jogada Imprevisível",
        descricao:
          "Quando Miya Atsumu realiza um saque, se o alvo for um ponto fraco da defesa adversária, o poder do saque aumenta em 30/40/50% de [Serve]. Se não for em ponto fraco, o [Recepção] dos seus jogadores da linha de trás aumenta em 10/12/14% por 1 rali.",
      },
      {
        nome: "Levantamento Delicado",
        descricao:
          "Miya Atsumu executa um Set com 125/140/155% de [Passe] como poder. Esse Set remove todos os debuffs do jogador que vai atacar (Power/Quick).",
      },
      {
        nome: "Levantamento Devoto e Sincero",
        descricao:
          "Aumenta o [Passe] de Miya Atsumu em 8/11/14%. Quando um jogador seu realiza uma ação e o resultado não é PERFECT, Atsumu ganha 2 acúmulos de [Perfect Timing]. Cada acúmulo aumenta o [Passe] em 2% (máx. 10). Ao levantar, ele consome 1 acúmulo, aumentando o [Técnica de Ataque] e o [Ataque Rápido] do atacante em 2.5. Dura por 10 cruzamentos.",
      },
      {
        nome: "Saque das Duas Espadas",
        descricao:
          "Miya Atsumu alterna entre Salto-Saque e Salto-Saque Flutuante. Jump Float: 230/245/275/290% de [Serve] como poder; impede o uso de ultimates de [Power/Ataque Rápido] por 2 cruzamentos. Jump Serve: 260/275/290/305/320% de [Serve] como poder; a cada 3 de Moral do Time, o [Percepção] de Atsumu aumenta em 1% por 2 cruzamentos.",
      },
    ],
    symbols: [
      "img/quicksymbol.png",
      "img/servesymbol.png",
      "img/settersymbol.png",
    ],
  },

  {
    nome: "Osamu UR",
    data: "10/29/25",
    funcao: "OP",
    img: "img/osamuUR.png",
    School: "Inarizaki",
    vinculo: ["A força dos Gêmeos", "Cabeça dos Gêmeos"],
    Stats: {
      Serve: 1621,
      Spike: 1685,
      Set: 1426,
      Receive: 1459,
      Block: 1428,
      Save: 1373,
    },
    habilidades: [
      {
        nome: "Ataque Flexível",
        descricao:
          "Aumenta o [Ataque Rápido] de Miya Osamu em 10/12/14%. Início da partida: o [Percepção] de Osamu cai para 0% e, para cada 1% reduzido, o [Técnica de Ataque] aumenta em 1%. (Priorize empilhar [Percepção] para esta habilidade).",
      },
      {
        nome: "Salto-Saque Frio",
        descricao:
          "Miya Osamu executa um Salto-Saque com 120/135/150% de [Serve]. Se o recebedor adversário tiver [Suppression], o [Técnica de Ataque] de Osamu aumenta em 10% por 8 cruzamentos.",
      },
      {
        nome: "Multitalentoso",
        descricao:
          "Aumenta o [Técnica de Ataque] de Miya Osamu em 10/13/16%. Quando ele ataca ou saca, aplica 1 acúmulo de [Suppression] nos jogadores da linha de trás adversária (cada acúmulo reduz o [Recepção] em 10%). Dura por 10 cruzamentos.",
      },
      {
        nome: "Contra-ataque Flexível",
        descricao:
          "Miya Osamu realiza um Ataque Rápido com 260/275/290/305/320% de [Ataque Rápido]. O [Ataque Rápido] dele aumenta em 40% de [Técnica de Ataque] por 2 cruzamentos. (Sinergiza com o [Técnica de Ataque] ganho em Ataque Flexível). SR2: se o recebedor inimigo tiver [Suppression], o poder aumenta em mais 60% de [Ataque Rápido]. SR4: após o Ataque Rápido, as próximas duas vezes que um aliado ativar um ultimate, o [Attack/Defensive Technique] desse jogador aumentará em 20%.",
      },
    ],
    symbols: ["img/quicksymbol.png", "img/servesymbol.png"],
  },

  {
    nome: "Kita SSR",
    funcao: "WS",
    img: "img/kitaSR.png",
    School: "Inarizaki",
    vinculo: ["Cabeça dos Gêmeos"],
    Stats: {
      Serve: 1238,
      Spike: 1219,
      Set: 1333,
      Receive: 1476,
      Block: 1198,
      Save: 1409,
    },
    habilidades: [
      {
        nome: "Repetição, Continuidade e Cautela",
        descricao:
          "Aumenta os Stats Básicos de Kita Shinsuke em 6/8/10%. Se o resultado do [Recepção] de Kita for BAD, o [Defensive Technique] aumenta em 80% de [Reflexo] como poder.",
      },
      {
        nome: "Jogada Calma",
        descricao:
          "Kita Shinsuke executa um [Save] com 120/135/150% de [Save] como poder.",
      },
      {
        nome: "Vou Fazer do Jeito Certo",
        descricao:
          "O [Recepção] de Kita Shinsuke aumenta em 8/10/12%. Ele realiza uma [Recepção]; se o resultado não for PERFECT, ganha 1 acúmulo de [Reliable Action] (+3% [Recepção], até 3). Com 3 acúmulos, consome 3 para aumentar o [Técnica de Ataque] dos jogadores da linha de frente em 10% por 8 cruzamentos.",
      },
      {
        nome: "Jogada Sólida",
        descricao:
          "Kita Shinsuke realiza um [Recepção] com 235/250/265/280/295% do [Recepção] como poder.",
      },
    ],
    symbols: ["img/receivesymbol.png"],
  },

  {
    nome: "Rintaro SSR",
    funcao: "MB",
    img: "img/rintaroSR.png",
    School: "Inarizaki",
    vinculo: [],
    Stats: {
      Serve: 1266,
      Spike: 1476,
      Set: 1186,
      Receive: 1258,
      Block: 1324,
      Save: 1318,
    },
    habilidades: [
      {
        nome: "Fechar o Ângulo",
        descricao:
          "Aumenta o [Bloqueio] de Rintaro Suna em 10/12/14%. Se ele estiver em quadra e o atacante adversário estiver sob [Confusion], o poder de bloqueio do time aumenta em 15/20/25% do [Bloqueio] do bloqueador.",
      },
      {
        nome: "Bloqueio Hábil",
        descricao: "Rintaro Suna bloqueia com 20/35/50% do poder do ataque.",
      },
      {
        nome: "Jogada que Pega o Oponente Desprevenido",
        descricao:
          "Aumenta o [Ataque Rápido] de Rintaro Suna em 10/12/14%. Ao realizar Ataque Rápido, aplica 1 acúmulo de [Confusion] na linha de frente adversária. Cada acúmulo reduz o [Bloqueio] em 10%, por até 8 cruzamentos de rede.",
      },
      {
        nome: "Spikes com Amplo Ponto de Impacto",
        descricao:
          "Rintaro Suna realiza um Ataque Rápido com 240/255/270/285/300% de [Ataque Rápido] como poder.",
      },
    ],
    symbols: ["img/quicksymbol.png", "img/blocksymbol.png"],
  },

  /* ==missing Stats== */ {
    nome: "Oshiro SSR",
    funcao: "WS",
    img: "img/oshiroSR.png",
    School: "Inarizaki",
    vinculo: [],
    Stats: { Serve: 1, Spike: 1, Set: 1, Receive: 1, Block: 1, Save: 1 },
    habilidades: [
      {
        nome: "Controle de Ritmo",
        descricao:
          "Sempre que Oshiro Alan consumir 10 de Stamina, ganha 1 acúmulo de [Quick Breather]. Cada acúmulo aumenta o [Técnica de Ataque] em 3/3.5/4%. Ao final do rali, todos os acúmulos são consumidos; para cada um, Oshiro recupera 4 de Stamina.",
      },
      {
        nome: "Saque Altamente Técnico",
        descricao:
          "Ojiro Alan executa um Salto-Saque com 110/125/140% de [Serve] como poder. O recebedor adversário terá o [Recepção] reduzido em 10% por 6 cruzamentos.",
      },
      {
        nome: "Investida Agressiva",
        descricao:
          "Aumenta o [Ataque Potente] de Oshiro Alan em 6/8/10% e o [Serve] em 6/8/10%. Ao realizar Ataque Potente, consome 60% da Stamina atual e aumenta o poder do ataque em 30/40/50% de [Ataque Potente].",
      },
      {
        nome: "Spike Trovejante",
        descricao:
          "Ojiro Alan executa um Ataque Potente com 240/255/270/285/300% de [Ataque Potente] como poder.",
      },
    ],
    symbols: ["img/powersymbol.png", "img/servesymbol.png"],
  },

  /* ==missing Stats== */ {
    nome: "Akagi SSR",
    funcao: "L",
    img: "img/akagiSR.png",
    School: "Inarizaki",
    vinculo: [],
    Stats: { Serve: 1, Spike: 1, Set: 1, Receive: 1, Block: 1, Save: 1 },
    habilidades: [
      {
        nome: "Save que Aumenta a Seriedade",
        descricao:
          "Aumenta o [Recepção] e o [Save] de Akagi Michinari em 8/10/12%. Aumenta a Moral do Time em 10 quando Akagi recebe ou salva.",
      },
      {
        nome: "Um Líbero Confiável",
        descricao:
          "Akagi Michinari executa um Save com poder igual a 120/135/150% de [Save]. Aumenta o [Defensive Technique] dos aliados em 4/6/8% até a bola cruzar a rede 6 vezes.",
      },
      {
        nome: "Perseguir a Bola com a Mão",
        descricao:
          "O [Recepção] de Akagi Michinari aumenta em 10/12/14%. Quando ele está em quadra, um oponente que dispara um tiro poderoso recebe 1 acúmulo de [Approaching] (reduz [Ataque Potente] em 8/10/12% por acúmulo até a bola cruzar a rede 3 vezes). Se o oponente já tiver [Approaching], o [Defensive Technique] dos aliados aumenta em 4/6/8% por 3 cruzamentos.",
      },
      {
        nome: "Recepção Corajosa",
        descricao:
          "Akagi Michinari recebe com 240/255/270/285/300% de [Recepção] como poder.",
      },
    ],
    symbols: ["img/receivesymbol.png"],
  },

  /* ==missing Stats== */ {
    nome: "Yui SSR",
    funcao: "WS",
    img: "img/yuiSR.png",
    School: "Inarizaki",
    vinculo: [],
    Stats: { Serve: 1, Spike: 1, Set: 1, Receive: 1, Block: 1, Save: 1 },
    habilidades: [
      {
        nome: "Ataque e Defesa Estáveis",
        descricao:
          "Aumenta o [Ataque Potente] de Ginjima Yui em 6/8/10% e o [Recepção] em 6/8/10%. Quando ele recebe, se o oponente realizar Ataque Potente, o poder dessa recepção aumenta em [Recepção] × 15/25/35%.",
      },
      {
        nome: "Recepção Poderosa",
        descricao: "Ginjima Yui recebe com [Recepção] × 120/135/150% de poder.",
      },
      {
        nome: "Um Ataque Entusiasmado",
        descricao:
          "Sempre que houver um recebedor na equipe, o [Técnica de Ataque] de Ginjima Yui aumenta em 2/2.5/3%. Se a recepção do companheiro não for BAD, o [Ataque Potente] de Ginjima Yui aumenta em 15% por até quatro cruzamentos de rede.",
      },
      {
        nome: "Um Golpe Poderoso",
        descricao:
          "Ginjima Yui executa um ataque poderoso com [Ataque Potente] × 225/240/255/270/285% de poder. Se estiver na linha de trás, o poder aumenta em [Ataque Potente] × 30%.",
      },
    ],
    symbols: ["img/powersymbol.png", "img/receivesymbol.png"],
  },

  {
    nome: "Hoshiumi UR",
    data: "12/13/25",
    funcao: "WS",
    img: "img/hoshiumiUR.png",
    School: "Kamomedai",
    vinculo: ["Amigos de longa data"],
    Stats: {
      Serve: 1621,
      Spike: 1704,
      Set: 1341,
      Receive: 1541,
      Block: 1581,
      Save: 1305,
    },
    habilidades: [
      {
        nome: "Quebrar a Cadeia",
        descricao:
          "Quando Hoshiumi Korai está em quadra e um aliado bloqueia, a cada 50 de [Bloqueio] dos bloqueadores, o poder do spike adversário (Power/Quick) é reduzido em [Power/Ataque Rápido] × 0.3/0.4/0.5% (máx. 30%). Para cada 1% reduzido no spike do oponente, o poder da próxima habilidade de Hoshiumi aumenta em 1%.",
      },
      {
        nome: "Ótimo Desempenho em Todas as Áreas",
        descricao:
          "Hoshiumi Korai pode ativar múltiplas habilidades de jogo (compartilham cooldown).\nSpike Serve: Salto-saque com [Serve] × 140/160/180% de poder.\nRecepção: [Recepção] × 140/160/180% de poder.\nBloqueio: [Bloqueio] × 140/160/180% de poder.",
      },
      {
        nome: "Nº 1 em Pontuar",
        descricao:
          "Aumenta o [Ataque Potente] de Hoshiumi Korai em 16/20/24%. Ao ativar <All-Rounded Exploitation>, ganha 1 acúmulo de [All-Rounder]. Ao ativar uma habilidade, consome [All-Rounder] e aplica efeitos conforme a jogada.\nPowerful Blow: [Attention] +14/17/20% até a bola cruzar a rede duas vezes.\nServe: reduz o [Recepção] dos jogadores da linha de trás do oponente em 14/17/20% até a bola cruzar a rede duas vezes.",
      },
      {
        nome: "Lança Brilhante",
        descricao:
          "Executa um ataque poderoso com [Ataque Potente] × 265/280/295/310/325% de poder. Se estiver na linha de frente, o poder aumenta em [Ataque Potente] × 40/45/50/55/60%.",
      },
    ],
    symbols: [
      "img/powersymbol.png",
      "img/servesymbol.png",
      "img/blocksymbol.png",
      "img/receivesymbol.png",
    ],
  },

  {
    nome: "Hirugami UR",
    data: "12/28/25",
    funcao: "MB",
    img: "img/hirugamiUR.png",
    School: "Kamomedai",
    vinculo: ["Amigos de longa data"],
    Stats: {
      Serve: 1660,
      Spike: 1630,
      Set: 1629,
      Receive: 1540,
      Block: 1742,
      Save: 1493,
    },
    habilidades: [
      {
        nome: "O Núcleo do Sistema Kamomedai",
        descricao:
          "Quando Hirugami Sachiro saca, seu [Attention] aumenta em 12/16/20%. Estando em quadra, aliados ganham 1 acúmulo de [System] ao bloquear (cada acúmulo aumenta os Stats básicos em 8%, até 5; dura até o aliado pontuar). Cada acúmulo também aumenta os Stats base de Hirugami em 10% adicionais.",
      },
      {
        nome: "Saque Psicologicamente Pressionante",
        descricao:
          "Executa um Salto-Saque Flutuante com 140/160/180% de [Serve] como poder. Se for uma boa jogada, encerra o Despertar de Moral do oponente, impedindo-o de ganhar Moral por 1 rali.",
      },
      {
        nome: "A Defesa é o Melhor Ataque",
        descricao:
          "Quando Hirugami está em quadra, ganha 1 acúmulo de [Strong Block] cada vez que a bola cruza a rede. Ao bloquear, efeitos por pilhas:\n2: poder de Bloqueio +15/20/25% do [Bloqueio] dos bloqueadores por dois cruzamentos.\n3: poder de Recepção +15/20/25% do [Recepção] dos recebedores.",
      },
      {
        nome: "O Deus Imóvel do Dia",
        descricao:
          "Bloqueia com [Bloqueio] × 260/275/290/305/320% de poder. Se o oponente disparar um ataque poderoso, o bloqueio ganha [Bloqueio] × 40/45/50/55/60% adicionais.",
      },
    ],
    symbols: ["img/servesymbol.png", "img/blocksymbol.png"],
  },

  {
    nome: "Hayaseiomi UR",
    data: "08/10/26",
    funcao: "WS",
    img: "img/hayaseiomiUR.png",
    School: "Itachiyama",
    vinculo: ["Top Spiker e Top Libero"],
    Stats: {
      Serve: 1774,
      Spike: 2012,
      Set: 1667,
      Receive: 1928,
      Block: 1699,
      Save: 1656,
    },
    habilidades: [
      {
        nome: "Ataque Persistente",
        descricao:
          "O [Ataque Potente] de Kiyoomi Sakusa aumenta em 10/12.5/15% e seu [Recepção] em 20/22/25%. Quando ele recebe um ataque, o [Ataque Potente] aumenta em 6% (até 3 acúmulos) até o próximo Ataque Potente. Quando ele acerta um Power Shot, o [Recepção] aumenta em 15% até a próxima recepção.",
      },
      {
        nome: "Tomar Todas as Precauções",
        descricao:
          "Realiza uma recepção ×1 com 50/70/90% de poder. Se exceder [Recepção] × 170%, o [Reflexo] aumenta em 10% e o cooldown de <Preparedness> é reduzido em 2× os cruzamentos. Se exceder [Recepção] × 200%, o [Defensive Technique] aumenta em 15% até o fim da partida.",
      },
      {
        nome: "Top Spiker",
        descricao:
          "Estando em quadra, quando aliados fazem boa jogada (receber, salvar, bloquear), ganha 1 acúmulo de [Perfectionism]. Cada acúmulo aumenta [Recepção] e [Ataque Potente] em 6%, até 20. Ao atacar, o [Percepção] aumenta em 10% por acúmulo, até a bola cruzar a rede duas vezes.",
      },
      {
        nome: "Spikes que Mudam a Trajetória Girando",
        descricao:
          "Executa um [Ataque Potente] com × 260/280/300/320/340% de poder. Se estiver na linha de trás, + [Ataque Potente] × 40%. Em caso de boa jogada, a próxima recepção do oponente é reduzida em [Recepção] × 15%.",
      },
    ],
    symbols: ["img/receivesymbol.png", "img/powersymbol.png"],
  },

  {
    nome: "Komori UR",
    data: "09/09/26",
    funcao: "L",
    img: "img/komoriUR.png",
    School: "Itachiyama",
    vinculo: ["Top Spiker e Top Libero"],
    Stats: {
      Serve: 1580,
      Spike: 1579,
      Set: 1904,
      Receive: 2012,
      Block: 1580,
      Save: 1866,
    },
    habilidades: [
      {
        nome: "Peça-chave da Equipe",
        descricao:
          "Estando em quadra, o [Defensive Technique] de todos os jogadores da linha de trás aliados aumenta em 10/13/16%. No início do rali, ganha 6 acúmulos de [Connect to Next]; cada um aumenta [Passe] em 3% e [Reflexo] em 5%, até 10.",
      },
      {
        nome: "Levantamento Habilidoso",
        descricao:
          "Realiza Set com [Passe] × 140/160/180% de poder, aumentando a Moral do time em 10. O primeiro Spike (Power/Quick) após isso aumenta o [Attention] do atacante em 15% até a bola cruzar a rede duas vezes.",
      },
      {
        nome: "Criar o Fluxo do Jogo",
        descricao:
          "O [Recepção] aumenta em 12/16/20%. Quando um aliado ativa uma recepção não-especial ou Komori ativa uma recepção especial, consome 2 acúmulos de [Connect to Next] para aumentar a recepção em [Recepção] × 30% e o primeiro Spike aliado depois disso aumenta o poder (Power/Quick) em 20%.",
      },
      {
        nome: "Recepção que Cria Impulso",
        descricao:
          "Recebe com [Recepção] × 260/275/290/305/320% de poder. O primeiro Spike aliado após isso (Power/Quick) aumenta o [Técnica de Ataque] do spiker em 20% até a bola cruzar a rede duas vezes.",
      },
    ],
    symbols: ["img/receivesymbol.png", "img/settersymbol.png"],
  },

  /* ==missing Stats== */ {
    nome: "Kuro SP",
    funcao: "MB",
    img: "img/kuroSP.png",
    School: "Nekoma",
    vinculo: ["Festival Fogos de Artificio", "Cérebro e Comandante SP"],
    Stats: { Serve: 1, Spike: 1, Set: 1, Receive: 1, Block: 1, Save: 1 },
    habilidades: [
      {
        nome: "A Torre de Comando Imbatível",
        descricao:
          "Quando Kuroo Tetsuro (Hanabi) está em quadra, o [Mental] dos aliados na mesma linha de Kuroo Tetsuro (Hanabi) aumenta em 20/25/30%. Depois que ele toca na bola, o poder da próxima jogada do mesmo tipo que a jogada de Kuroo Tetsuro (Hanabi) é aumentado em 40% × o parâmetro correspondente do membro que fará a jogada. Se a jogada de Kuroo Tetsuro (Hanabi) for crítica, um membro aleatório do time adversário recebe a desvantagem [Raiva] ([Cortada Potente]/[Ataque Rápido] será reduzido em 10%).",
      },
      {
        nome: "Recepção Habilidosa",
        descricao:
          "Kuroo Tetsuro (Hanabi) realiza uma recepção com poder igual a [Recepção] × 140/160/180%. Se essa jogada for crítica, o poder dessa recepção aumenta em [Recepção] × 20%.",
      },
      {
        nome: "Um Jogador Completo, Sem Falhas",
        descricao:
          "Quando Kuroo Tetsuro (Hanabi) está na linha de frente/traseira e toca na bola, sua [Reação] aumenta em 50% × a [Reação] de cada outro aliado na linha de frente/traseira (máximo 100%), e seu [Mental] aumenta em 50% × o [Mental] de cada outro aliado na linha de frente/traseira (máximo 100%). Além disso, quando Kuroo Tetsuro (Hanabi) está na linha de frente, a [Técnica de Ataque] dos aliados aumenta em 14/17/20%, e seu poder de bloqueio aumenta em [Bloqueio] × 45%. Além disso, quando Kuroo Tetsuro está na linha de trás, a [Técnica Defensiva] dos aliados aumenta em 14/17/20%, e seu poder de recepção aumenta em [Recepção] × 45%.",
      },
      {
        nome: "Bloqueio Desagradável",
        descricao:
          "Kuroo Tetsuro (Hanabi) realiza um bloqueio com poder de [Bloqueio] × 280/300/320/340/360%. Se esse bloqueio não devolver a bola para a quadra adversária, a primeira recepção de um aliado após essa jogada não resultará em ponto. Se esse bloqueio devolver a bola para a quadra adversária, os atributos principais de todos os aliados aumentam em 15%. Esse efeito dura até a bola atravessar a rede 8 vezes.",
      },
    ],
    symbols: ["img/receivesymbol.png", "img/blocksymbol.png"],
  },

  {
    nome: "Kunimi SP",
    funcao: "OP",
    img: "img/kunimiSP.png",
    School: "Aoba Johsai",
    vinculo: [""],
    Stats: {
      Serve: 1674,
      Spike: 1950,
      Set: 1573,
      Receive: 1857,
      Block: 1762,
      Save: 1570,
    },
    habilidades: [
      {
        nome: "Guardar Fôlego",
        descricao:
          "O [Ataque Potente] de Kunimi (Festival Esportivo) aumenta em +10%/13%/16%. Se a Stamina de Kunimi estiver abaixo de 80, o [Ataque Potente] dele recebe +12% adicionais.Enquanto Kunimi estiver em quadra, no fim de cada rali, se o limite máximo de Stamina de Kunimi exceder 80, o limite diminui em 10 e ele recupera 120 de Stamina.Enquanto Kunimi estiver em quadra, cada vez que a Stamina de um aliado diminuir em 10, Kunimi ganha 1 acúmulo de [Reserva de Stamina].Para cada acúmulo de [Reserva de Stamina], a [Percepção] de Kunimi aumenta em 7%.Máximo de 30 acúmulos; máximo de 10 acúmulos por rali. ",
      },
      {
        nome: "Defesa Precisa",
        descricao:
          "Kunimi Akira (Festival Esportivo) realiza uma recepção com poder de [Recepção] × 140%/160%/180%, e o parâmetro principal dos aliados aumenta em 10%. Este efeito dura até a bola cruzar a rede 2 vezes.",
      },
      {
        nome: "Dar o Máximo",
        descricao:
          "Toda vez que a Stamina de Kunimi (Festival Esportivo) é recuperada, o [Ataque Potente] dele aumenta em 0.8%/1.1%/1.4% (up to +16%/22%/28%). No início do rali, se o limite de Stamina de Kunimi for 80 ou menos, ele obtém o efeito [Momento Decisivo].Enquanto estiver com [Momento Decisivo], o tempo de recarga de <Espírito de Luta Ardente> passa a ser de 6 travessias de rede.Se a [Percepção] de Kunimi exceder 100%, a cada +1% excedente, o [Poder] aumenta em 0,9% (até +90% máx.).Depois de obter [Momento Decisivo], nas primeiras 2 ativações, sempre que <Espírito de Luta Ardente> for usado, o tempo de recarga dessa habilidade é redefinido.",
      },
      {
        nome: "Espírito de Luta Ardente",
        descricao:
          "Kunimi Akira (Festival Esportivo) consome +8 de Stamina e executa um [Ataque Potente] com poder de [Ataque Potente] × 295%/315%/335%/355%/375%Se a Stamina de Kunimi exceder 50, o poder deste ataque aumenta em [Ataque Potente] × 50%.",
      },
    ],
    symbols: ["img/receivesymbol.png", "img/powersymbol.png"],
  },
];

const descricoesSinergia = {
  Karasuno:
    "Aumenta em 10% os Stats de Ataque Potente e Ataque Rápido de TODOS os jogadores.",
  Nekoma: "Aumenta em 15% o Stat de Recepção de TODOS os jogadores.",
  Dateko: "Aumenta em 15% o Stat de Bloqueio de TODOS os jogadores.",
  "Aoba Johsai":
    "Aumenta em 15% o Stat de Ataque Potente de TODOS os jogadores.",
  Shiratorizawa:
    "Aumenta em 10% os Stats de Percepção e Força de TODOS os jogadores.",
  Fukurodani: "A Moral do Time aumenta em 20.",
  Inarizaki: "Aumenta em 5% os Stats de Força e Defesa de TODOS os jogadores.",
  "Dupla Excêntrica":
    "Aumenta o poder de Ataque Rápido e o Percepção de Hinata e Kageyama.",
  "Gênios Karasuno":
    "Aumenta o Reflexo e a Recepção de Nishinoya SP. Quando Nishinoya usa o especial, Kageyama UR ganha um acúmulo de Competitive Spirit*. Se o especial for PERFECT, o primeiro corte (Power ou Quick) depois disso tem poder aumentado em 20% do Power do atacante.",
  "Observação de flores de cerejeira":
    "Aumenta o Percepção de Kenma SP. Aumenta o Ataque Rápido de Hinata SP quando a jogada for PERFECT.",
  "Sol vs Lua":
    "Quando um aliado faz um levantamento (Passe), a [Percepção] dele aumenta em 10%.Dura até a bola atravessar a rede 2 vezes.Se o Ataque Rápido do Shoyo Hinata (Hanami) virar um PERFECT, o tempo de recarga de 〈Pulo Alto〉 é reduzido em 2 contagens de atravessar a rede.Kei Tsukishima (Festival de Fogos) recebe [Percepção] igual a 50% da [Percepção] do Hinata (Hanami), até +50%.Esse efeito dura até a bola atravessar a rede 4 vezes.",
  "Depois da Escola":
    "Aumenta o Reflexo de Nishinoya SP; quando a Stamina dele estiver baixa, aumenta ainda mais.",
  "Deus Guardião e Ponta":
    "Quando Nishinoya SSR ou Azumane SSR usam habilidade, ambos aumentam Técnica de Ataque e Técnica de Defesa.",
  "Esquadrão de Kiyoko": "Ao pontuar, aumenta a Moral do Time.",
  "Cérebro e Comandante":
    "Quando Kenma SSR faz o passe, Kuro UR realiza um Ataque Rápido fortalecido.",
  "Orientação Educacional":
    "Aumenta a Recepção de Yaku SSR e o Ataque Rápido de Lev SSR.",
  Natação:
    "Aumenta a Moral do Time. Com Moral ativa, aumenta o Reflexo dos aliados em bloqueios duplos ou triplos.",
  "O Silencioso e o Sarcástico":
    "Permite que Aone SSR e Futakuchi SSR usem a habilidade [Bloqueio Duplo]*.",
  "O Novo Capitão e o Novato Altão":
    "Aumenta o Bloqueio dos jogadores na linha de frente.",
  "Harmonia Perfeita":
    "Quando Oikawa UR faz o passe, Iwaizumi SSR realiza um corte com Ataque Potente aumentado. Ganha 2 acúmulos de [Ritmo de Ataque]*, cada um aumentando o Percepção da equipe em 1% (máx. 10).",
  "A Matilha": "Aumenta o Ataque Potente de Iwaizumi SSR e Kentaro SSR.",
  "Bests para a vida":
    "Aumenta o Ataque Potente de Ushijima UR e o Técnica de Defesa de Tendo SSR.",
  "Campeão Absoluto e Levantador Sólido":
    "Quando Shirabu SSR faz o passe, Ushijima UR realiza um corte com 10% mais poder.",
  "WS de Shiratorizawa":
    "Aumenta o Ataque Potente de TODOS os jogadores presentes.",
  "Ás Milagroso e Levantador Carinhoso":
    "Bokuto UR sai da depressão. Quando Akaashi SSR faz o passe e Bokuto UR spika, aumenta o Ataque Potente desse golpe em 20% e eleva a Moral do Time em 15.",
  "Ace Milagroso e Levantador Carinhoso":
    "Aumenta o Passe de Akaashi SP. Com Moral ativa, aumenta o Ataque Potente de Bokuto SP em 18% e o Passe de Akaashi SP em 5%.",
  "A força dos Gêmeos":
    "Quando Atsumu UR faz o passe e Osamu UR faz um Ataque Rápido Minus Tempo, aumenta o Ataque Rápido dessa jogada. Aumenta o Técnica de Ataque em 15%. O ataque não pode ser bloqueado.",
  "Cabeça dos Gêmeos":
    "Aumenta o Técnica de Ataque de Osamu UR. Aumenta os Stats de Kita SSR. No início da partida, Atsumu ganha 3 acúmulos de Perfect Hit* (+2% de Passe cada, máx. 10). Kita SSR ganha bônus similar em Recepção (máx. 3). O primeiro Ataque Rápido dos gêmeos em cada set recebe +[Ataque Rápido] × 12%.",
  "Amigos de longa data":
    "Aumenta os Stats de Hoshiumi UR. Aumenta o Bloqueio para os jogadores da linha de frente. Hoshiumi UR e Hirugami UR recebem um buff (sem info).",
  "Top Spiker e Top Libero":
    "Sakusa UR aumenta seu Ataque Potente. Komori UR aumenta seu Recepção. Aumenta a Recepção dos aliados em 20%.",
  "Cérebro e Comandante SP":
    "Quando Kenma SP e Kuro SP estão em quadra, podem usar a habilidade de ataque rápido Cérebro e Comandante*",
  "Festival Fogos de Artificio":
    "Atributos principais dos aliados aumentam em 6%.Ao fim de cada rali, aplica [Raiva] na linha de frente do oponente (os [Cortada Potente]/[Ataque Rápido] deles ficam –10%).Dura até a bola atravessar a rede 8 vezes.Se o alvo já tiver [Raiva], aplica [Distração] em vez disso (os [Cortada Potente]/[Ataque Rápido] ficam –20%).Também dura até a bola atravessar a rede 8 vezes.[Distração] não pode ser removido.",
};

/** Catálogo de MEMÓRIAS (exemplos; ajuste/expanda à vontade) */
const memoryCatalog = [
  {
    id: "mem_op",
    name: "Memória de OP",
    positions: ["OP"],
    bonus: {
      Serve: { flat: 518 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 663 },
      Block: { flat: 605 },
      Save: { flat: 490 },
    },
    desc: "Quando um membro com esta memória joga pela primeira vez em cada set, sua [Recepção] aumenta em 24%. Este efeito dura por 3 ralis.",
    img: "img/memories/MemoOP.png",
  },
  {
    id: "mem_l",
    name: "Memória de L",
    positions: ["L"],
    bonus: {
      Serve: { flat: 490 },
      Spike: { flat: 518 },
      Set: { flat: 605 },
      Receive: { flat: 663 },
      Block: { flat: 461 },
      Save: { flat: 663 },
    },
    desc: "Os Parâmetros Principais do membro que equipa esta memória aumentam em 6.4%. Se o resultado de recepção do respectivo membro não for BAD, o poder do próximo Ataque Potente do aliado será aumentado em 24% × [Ataque Potente] do membro que executará o Ataque Potente.",
    img: "img/memories/MemoL.png",
  },
  {
    id: "mem_ws",
    name: "Memória de WS",
    positions: ["WS"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 663 },
      Block: { flat: 518 },
      Save: { flat: 490 },
    },
    desc: "O membro que equipa esta memória tem seu [Ataque Potente] aumentado em 12%. Quando o membro realiza um Ataque Potente, o [Bloqueio] do oponente é reduzido em 6.4% até a bola cruzar a rede uma vez. Se o resultado do bloqueio do oponente nesta jogada for BAD, o membro oponente que bloqueou terá seu [Bloqueio] reduzido em 6.4%. Este efeito dura até a bola cruzar a rede duas vezes.",
    img: "img/memories/MemoWS.png",
  },
  {
    id: "mem_s",
    name: "Memória de S",
    positions: ["S"],
    bonus: {
      Serve: { flat: 663 },
      Spike: { flat: 518 },
      Set: { flat: 663 },
      Receive: { flat: 490 },
      Block: { flat: 605 },
      Save: { flat: 461 },
    },
    desc: "Enquanto houver um membro com esta memória em quadra, o [Passe] dos aliados aumenta em 8%. Uma vez por set, quando a Stamina de um membro cair abaixo de 30, a Stamina desse membro será restaurada em 24.",
    img: "img/memories/MemoS.png",
  },
  {
    id: "mem_mb",
    name: "Memória de MB",
    positions: ["MB"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 518 },
      Block: { flat: 663 },
      Save: { flat: 490 },
    },
    desc: "O [Ataque Rápido] do membro que equipa esta memória é aumentado em 12%. Para cada membro de Bloqueio na linha de frente do oponente, o [Ataque Rápido] desse membro aumenta em mais 6.4%.",
    img: "img/memories/MemoMB.png",
  },
  {
    id: "mem_up_consciencia_wakatoshi_ushijima",
    name: "Ushijima UR",
    positions: ["OP"],
    bonus: {
      Serve: { flat: 570 },
      Spike: { flat: 729 },
      Set: { flat: 507 },
      Receive: { flat: 729 },
      Block: { flat: 665 },
      Save: { flat: 539 },
    },
    desc: "A [Percepção] do membro que equipa esta memória é aumentada em 20%. Se a [Percepção] do membro exceder 20%, para cada 1% adicional de [Percepção], a [Força] aumenta em 1% (até 100%).",
    img: "img/memories/MemoUshijimaUR.png",
  },
  {
    id: "mem_ofensive_up_osamu_miya",
    name: "Osamu UR",
    positions: ["OP"],
    bonus: {
      Serve: { flat: 570 },
      Spike: { flat: 729 },
      Set: { flat: 507 },
      Receive: { flat: 729 },
      Block: { flat: 665 },
      Save: { flat: 539 },
    },
    desc: "O [Ataque Rápido] do membro que equipa esta memória é aumentado em 24%. Se a [Técnica de Ataque] do membro exceder 40%, o [Ataque Rápido] aumenta em 48% × [Ataque Rápido].",
    img: "img/memories/MemoOsamuUR.png",
  },
  {
    id: "mem_receba_reforco_hard_hit_daichi_sawamura",
    name: "Daichi SSR",
    positions: ["OP"],
    bonus: {
      Serve: { flat: 518 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 663 },
      Block: { flat: 605 },
      Save: { flat: 490 },
    },
    desc: "A [Recepção] do membro que equipa esta memória é aumentada em 20%. Se o membro estiver em quadra, ganhe 1 acúmulo de [Determinação] sempre que um aliado do tipo Força consumir 20 de Stamina. Cada acúmulo aumenta o poder do Ataque Potente em 4% do atributo [Ataque Potente], até 10 acúmulos.",
    img: "img/memories/MemoDaichiSSR.png",
  },
  {
    id: "mem_reacao_para_cima_akinori_konoha",
    name: "Konoha SSR",
    positions: ["OP"],
    bonus: {
      Serve: { flat: 518 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 663 },
      Block: { flat: 605 },
      Save: { flat: 490 },
    },
    desc: "Os Parâmetros Principais dos membros que equipam esta memória aumentam em 12%. O [Reflexo] do membro eleva a Moral da Equipe dos aliados em 10%. Enquanto um aliado estiver com [Despertar de Moral da Equipe] ativo, o [Reflexo] desse membro aumenta em 8%.",
    img: "img/memories/MemoKonohaSSR.png",
  },
  {
    id: "mem_ofensive_up_kentaro_kyotani",
    name: "Kentaro MAD DOG SSR",
    positions: ["OP"],
    bonus: {
      Serve: { flat: 518 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 663 },
      Block: { flat: 605 },
      Save: { flat: 490 },
    },
    desc: "Se o membro com esta memória estiver em quadra, a [Força] do aliado que estiver atacando aumenta em 12%. Enquanto o membro estiver em quadra e a Stamina do oponente estiver abaixo de 60, o [Bloqueio] do oponente é reduzido em 16%. Este efeito dura até a bola cruzar a rede 3 vezes e pode ser ativado uma vez por set por membro.",
    img: "img/memories/MemoKentaroSSR.png",
  },
  {
    id: "mem_param_main_e_hard_hit_takehito_sasaya",
    name: "Sasaya SSR",
    positions: ["OP"],
    bonus: {
      Serve: { flat: 518 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 663 },
      Block: { flat: 605 },
      Save: { flat: 490 },
    },
    desc: "O [Ataque Potente] e o [Bloqueio] dos membros que equipam esta memória aumentam em 12%. Se o placar estiver favorável ao oponente, o poder do seu Spike aumenta em 28% × [Ataque Potente].",
    img: "img/memories/MemoSasayaSSR.png",
  },
  {
    id: "mem_defense_up_yu_nishinoya_depois_da_escola",
    name: "Nishinoya SP",
    positions: ["L"],
    bonus: {
      Serve: { flat: 619 },
      Spike: { flat: 656 },
      Set: { flat: 765 },
      Receive: { flat: 838 },
      Block: { flat: 583 },
      Save: { flat: 838 },
    },
    desc: "O membro que equipa esta memória tem sua [Recepção] aumentada em 24%. Quando a Habilidade Especial do respectivo membro é ativada, o [Reflexo] aumenta em 1.2% e o [Empenho] aumenta em 2.4% (até 5 acúmulos). Se o membro usar uma Habilidade Especial mais de duas vezes durante um rali, ele recupera 10 de Stamina e, na próxima Habilidade Especial que usar, sua [Técnica de Defesa] aumenta em 16%. Este efeito dura até a bola cruzar a rede duas vezes.",
    img: "img/memories/MemoNishinoyaSP.png",
  },
  {
    id: "mem_defense_offensive_up_motoya_komori",
    name: "Komori UR",
    positions: ["L"],
    bonus: {
      Serve: { flat: 619 },
      Spike: { flat: 656 },
      Set: { flat: 838 },
      Receive: { flat: 838 },
      Block: { flat: 583 },
      Save: { flat: 765 },
    },
    desc: "O membro que equipa esta memória tem sua [Recepção] aumentada em 24%. Quando o respectivo membro recebe, a [Técnica de Defesa] dos aliados na retaguarda aumenta em 2% (até 3 acúmulos). Se o membro estiver em quadra, quando um aliado ativar uma habilidade de Recepção, quem receber recupera 2 de Stamina e tem seu [Ataque Potente/Ataque Rápido] aumentado em 15%. Este efeito dura até a bola cruzar a rede duas vezes.",
    img: "img/memories/MemoKomoriUR.png",
  },
  {
    id: "mem_defense_up_yu_nishinoya",
    name: "Nishinoya SSR",
    positions: ["L"],
    bonus: {
      Serve: { flat: 490 },
      Spike: { flat: 518 },
      Set: { flat: 605 },
      Receive: { flat: 663 },
      Block: { flat: 461 },
      Save: { flat: 663 },
    },
    desc: "Se o membro que equipa esta memória estiver em quadra, aumenta a [Defesa] dos jogadores da linha de trás do seu lado em 8%. Se o consumo de Stamina do equipador for 8 ou mais ao ativar a habilidade de recepção, a [Recepção] do equipador aumenta em 20% e ele recupera 2 de Stamina.",
    img: "img/memories/MemoNishinoyaSSR.png",
  },
  {
    id: "mem_receba_morisuke_yaku",
    name: "Yaku SSR",
    positions: ["L"],
    bonus: {
      Serve: { flat: 490 },
      Spike: { flat: 518 },
      Set: { flat: 605 },
      Receive: { flat: 663 },
      Block: { flat: 461 },
      Save: { flat: 663 },
    },
    desc: "Quando um membro com esta memória recebe, a [Recepção] aumenta em 4% (até 5 acúmulos). Se a recepção do membro for PERFECT, o poder do próximo Ataque Rápido de um aliado aumenta em 32% × [Ataque Rápido] do membro que executará o ataque rápido.",
    img: "img/memories/MemoYakuSSR.png",
  },
  {
    id: "mem_receba_haruki_komi",
    name: "Haruki SSR",
    positions: ["L"],
    bonus: {
      Serve: { flat: 490 },
      Spike: { flat: 518 },
      Set: { flat: 605 },
      Receive: { flat: 663 },
      Block: { flat: 461 },
      Save: { flat: 663 },
    },
    desc: "A [Recepção] e a [Defesa] dos membros que equipam esta memória aumentam em 16%. Se a recepção ou a defesa do membro não for BAD, a Moral da Equipe aumenta em 10. Além disso, o poder do próximo Ataque Potente de um aliado aumenta em 10% × [Ataque Potente] do membro.",
    img: "img/memories/MemoHarukiSSR.png",
  },
  {
    id: "mem_receba_yamagata_hayato",
    name: "Memo Yamagata SSR",
    positions: ["L"],
    bonus: {
      Serve: { flat: 490 },
      Spike: { flat: 518 },
      Set: { flat: 605 },
      Receive: { flat: 663 },
      Block: { flat: 461 },
      Save: { flat: 663 },
    },
    desc: "A [Recepção] do membro que equipa esta memória é aumentada em 20%. Quando o membro ativa a Habilidade Especial de Recepção, o [Reflexo] aumenta em 12%.",
    img: "img/memories/MemoYamagataSSR.png",
  },
  {
    id: "mem_defense_up_michinari_akagi",
    name: "Memo Akagi SSR",
    positions: ["L"],
    bonus: {
      Serve: { flat: 490 },
      Spike: { flat: 518 },
      Set: { flat: 605 },
      Receive: { flat: 663 },
      Block: { flat: 461 },
      Save: { flat: 663 },
    },
    desc: "A [Recepção] do membro que equipa esta memória é aumentada em 20%. Se o resultado de recepção ou defesa do membro não for BAD, a [Técnica de Defesa] do aliado aumenta em 16% (até 3 acúmulos). Este efeito dura por 1 rali.",
    img: "img/memories/MemoAkagiSSR.png",
  },
  {
    id: "mem_power_up_shouyou_hinata_hanami",
    name: "Hinata SP",
    positions: ["MB"],
    bonus: {
      Serve: { flat: 619 },
      Spike: { flat: 838 },
      Set: { flat: 656 },
      Receive: { flat: 838 },
      Block: { flat: 765 },
      Save: { flat: 583 },
    },
    desc: "A [Força] do membro que equipa esta memória aumenta em 24%. Se o Ataque Rápido do membro for PERFECT, aumente a [Força] do membro em 2% (até 5 acúmulos). Se o Ataque Rápido de um aliado for PERFECT e o bloqueador oponente não tocar na bola, a [Reflexo] e o [Empenho] da linha de frente inimiga serão reduzidos em 8% cada. Este efeito dura até a bola cruzar a rede 10 vezes.",
    img: "img/memories/MemoHinataSP.png",
  },
  {
    id: "mem_hast_attack_block_up_tsukishima_firefly_display_de_fogos_de_artificio",
    name: "Tsuki SP",
    positions: ["MB"],
    bonus: {
      Serve: { flat: 619 },
      Spike: { flat: 838 },
      Set: { flat: 656 },
      Receive: { flat: 765 },
      Block: { flat: 838 },
      Save: { flat: 583 },
    },
    desc: "O [Ataque Rápido] do membro que equipa esta memória aumenta em 24%. Se o membro fizer um PERFECT, o [Bloqueio] aumenta em 9% (até 3 acúmulos). Aplica aleatoriamente o efeito negativo [Supressão] a um membro do time adversário em quadra (Parâmetros Principais reduzidos em 5%). Este efeito dura até a bola cruzar a rede 8 vezes.",
    img: "img/memories/MemoTsukiSP.png",
  },
  {
    id: "mem_kurosp",
    name: "Kuro SP",
    positions: ["MB"],
    bonus: {
      Serve: { flat: 765 },
      Spike: { flat: 656 },
      Set: { flat: 619 },
      Receive: { flat: 838 },
      Block: { flat: 838 },
      Save: { flat: 583 },
    },
    desc: "O [Bloqueio] aumenta em 12%. Quando o membro bloquear ou receber, se houver um inimigo em quadra com efeito negativo, a [Técnica de Defesa] do respectivo membro aumenta em 20%. Este efeito dura até a bola cruzar a rede quatro vezes.",
    img: "img/memories/MemoKuroSP.png",
  },
  {
    id: "mem_tecnica_de_defesa_bloqueio_takashi_aone_banho_de_mar",
    name: "Aone SP",
    positions: ["MB"],
    bonus: {
      Serve: { flat: 838 },
      Spike: { flat: 765 },
      Set: { flat: 656 },
      Receive: { flat: 619 },
      Block: { flat: 838 },
      Save: { flat: 583 },
    },
    desc: "A [Técnica de Defesa] do membro que equipa esta memória aumenta em 12.8%. Quando este membro participa de um bloqueio de 2 ou 3 jogadores, o [Bloqueio] da linha de frente aliada aumenta em 12% até a bola cruzar a rede duas vezes. Quando o membro bloquear, se a jogada resultar em bloqueio de 2/3, o [Bloqueio] do membro aumenta em mais 15% até a bola cruzar a rede duas vezes.",
    img: "img/memories/MemoAoneSP.png",
  },
  {
    id: "mem_hast_attack_blockup_tetsuro_kuroo",
    name: "Kuro UR",
    positions: ["MB"],
    bonus: {
      Serve: { flat: 665 },
      Spike: { flat: 729 },
      Set: { flat: 507 },
      Receive: { flat: 570 },
      Block: { flat: 729 },
      Save: { flat: 539 },
    },
    desc: "O membro que equipa esta memória tem seu [Bloqueio] aumentado em 24%. Cada vez que o membro receber um aumento de [Ataque Rápido] proveniente de uma habilidade de aliado, ganha 1 acúmulo de [Ajuste]. Cada acúmulo de [Ajuste] aumenta o [Bloqueio] em 2.4% (máx. 10). Quando a Habilidade Especial de Bloqueio do membro for ativada, consuma 10 acúmulos do efeito [Constrição] e reduza a recarga da Habilidade Especial de Bloqueio do membro em 10 cruzadas de rede.",
    img: "img/memories/MemoKuroUR.png",
  },
  {
    id: "mem_block_up_hirugami_yukoro",
    name: "Hirugami UR",
    positions: ["MB"],
    bonus: {
      Serve: { flat: 729 },
      Spike: { flat: 665 },
      Set: { flat: 507 },
      Receive: { flat: 570 },
      Block: { flat: 729 },
      Save: { flat: 539 },
    },
    desc: "O membro que equipa esta memória tem seu [Bloqueio] aumentado em 20%. Quando um aliado pontua, o [Bloqueio] dele aumenta em 4.8% (até 3 acúmulos). Se um aliado possuir o efeito [Bloqueio Forte], ao bloquear sua [Técnica de Defesa] aumenta em 2.4% até a bola cruzar a rede quatro vezes (até 3 acúmulos).",
    img: "img/memories/MemoHirugamiUR.png",
  },
  {
    id: "mem_increase_consciousness_shoyo_hinata",
    name: "Hinata SSR",
    positions: ["MB"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 518 },
      Block: { flat: 663 },
      Save: { flat: 490 },
    },
    desc: "A [Percepção] dos membros que equipam esta memória aumenta em 16%. Se a [Percepção] do membro for 40% ou maior, a [Percepção] aumenta em mais 16% e sofrer bloqueio é reduzido em 8%.",
    img: "img/memories/MemoHinataSSR.png",
  },
  {
    id: "mem_block_up_tsukishima",
    name: "Tsuki SSR",
    positions: ["MB"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 518 },
      Block: { flat: 663 },
      Save: { flat: 490 },
    },
    desc: "O [Bloqueio] do membro que equipa esta memória aumenta em 20%. Quando o membro ativa a Habilidade Especial de Bloqueio, se o oponente que realizou o spike (Ataque Potente/Rápido) tiver um efeito negativo, o poder deste bloqueio aumenta em 32% × [Bloqueio] do membro.",
    img: "img/memories/MemoTsukiSSR.png",
  },
  {
    id: "mem_offensive_up_tetsuro_kuroo_pratica",
    name: "Kuro SSR",
    positions: ["MB"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 518 },
      Block: { flat: 663 },
      Save: { flat: 490 },
    },
    desc: "A [Percepção] dos membros que equipam esta memória aumenta em 16%. Quando o membro for bloqueado, sua [Técnica de Defesa] aumenta em 24% da sua [Força].",
    img: "img/memories/MemoKuroSSR.png",
  },
  {
    id: "mem_block_up_tatsuo",
    name: "Tatsuo SSR",
    positions: ["MB"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 518 },
      Block: { flat: 663 },
      Save: { flat: 490 },
    },
    desc: "O [Bloqueio] do membro que equipa esta memória aumenta em 24%. Quando o membro bloquear, se o spike do oponente (potente/rápido) for PERFECT, este bloqueio será garantidamente PERFECT. Se o resultado deste bloqueio não for BAD, o [Bloqueio] do membro aumenta em 5% (até 3 acúmulos).",
    img: "img/memories/MemoTatsuoSSR.png",
  },
  {
    id: "mem_receive_up_ataque_rapido_reforco_haiba_lev",
    name: "Lev SSR",
    positions: ["MB"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 518 },
      Block: { flat: 663 },
      Save: { flat: 490 },
    },
    desc: "Se o membro que equipa esta memória estiver em quadra, a [Recepção] dos defensores aliados aumenta em 12%. Se o membro estiver em quadra e o resultado da recepção aliada for PERFECT, o poder da próxima Habilidade Especial de Ataque Rápido do membro aumenta em 24% × [Ataque Rápido].",
    img: "img/memories/MemoLevSSR.png",
  },
  {
    id: "mem_defense_up_takanobu_aone",
    name: "Aone SSR",
    positions: ["MB"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 518 },
      Block: { flat: 663 },
      Save: { flat: 490 },
    },
    desc: "A [Técnica de Defesa] dos membros que equipam esta memória aumenta em 16%. Se o resultado de bloqueio do membro não for BAD, a Stamina do oponente é reduzida em 2 após o spike (potente/rápido). Se o atacante oponente for um membro de Ataque Potente, ele perde mais 1 de Stamina.",
    img: "img/memories/MemoAoneSSR.png",
  },
  {
    id: "mem_block_up_tendo_satoru",
    name: "Tendo SSR",
    positions: ["MB"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 518 },
      Block: { flat: 663 },
      Save: { flat: 490 },
    },
    desc: "O [Bloqueio] do membro que equipa esta memória aumenta em 28%. Se o bloqueio do membro for PERFECT, a recarga da Habilidade Especial de Bloqueio é reduzida em 3 cruzadas de rede.",
    img: "img/memories/MemoTendoSSR.png",
  },
  {
    id: "mem_fast_attack_up_rintaro_suna",
    name: "Rintaro SSR",
    positions: ["MB"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 518 },
      Block: { flat: 663 },
      Save: { flat: 490 },
    },
    desc: "O [Ataque Rápido] do membro que equipa esta memória aumenta em 20%. Se o bloqueador oponente tiver um efeito negativo quando o membro atacar rapidamente, o poder deste Ataque Rápido aumenta em 40% × [Ataque Rápido] do membro.",
    img: "img/memories/MemoRintaroSSR.png",
  },
  {
    id: "mem_akaashi_sp",
    name: "Akaashi SP",
    positions: ["S"],
    bonus: {
      Serve: { flat: 838 },
      Spike: { flat: 656 },
      Set: { flat: 838 },
      Receive: { flat: 619 },
      Block: { flat: 765 },
      Save: { flat: 583 },
    },
    desc: "O [Passe] do equipador aumenta em 24%. Enquanto o [Despertar de Moral da Equipe] de um aliado estiver ativo, a [Percepção] do equipador aumenta em 10%. Aliados com o efeito [Condição Excelente] recebem +15% em seus Parâmetros Principais. Quando um aliado perde o efeito [Condição Excelente], o [Reflexo] de todos os aliados aumenta em 10% até a bola cruzar a rede 8 vezes.",
    img: "img/memories/MemoAkaashiSP.png",
  },
  {
    id: "mem_sugawara_sp",
    name: "Sugawara SP",
    positions: ["S"],
    bonus: {
      Serve: { flat: 838 },
      Spike: { flat: 656 },
      Set: { flat: 838 },
      Receive: { flat: 619 },
      Block: { flat: 765 },
      Save: { flat: 583 },
    },
    desc: "Os Parâmetros Principais do equipador aumentam em 16%. Quando o equipador realiza um Passe, para cada 6 de Stamina atual que possuir, o [Ataque Potente/Ataque Rápido] do atacante aumenta em 2% (até 30%). Este efeito dura até a bola cruzar a rede duas vezes. Quando o equipador ativa uma Habilidade e consome Stamina, restaure 10 de Stamina ao aliado com a menor Stamina.",
    img: "img/memories/MemoSugawaraSP.png",
  },
  {
    id: "mem_kenma_sp",
    name: "Kenma SP",
    positions: ["S"],
    bonus: {
      Serve: { flat: 765 },
      Spike: { flat: 656 },
      Set: { flat: 838 },
      Receive: { flat: 838 },
      Block: { flat: 619 },
      Save: { flat: 583 },
    },
    desc: "O [Reflexo] aumenta em 16%. Quando um Ataque Potente/Rápido do oponente for PERFECT, um aliado que ativar uma habilidade de Bloqueio ou Recepção ganha 1 acúmulo de [Adesão]; para cada acúmulo, o [Reflexo] aumenta em 4% (máx. 3). Se tal aliado atingir 3 acúmulos, consuma-os para aumentar em 100% o [Reflexo] desse aliado até a bola cruzar a rede uma vez.",
    img: "img/memories/MemoKenmaSP.png",
  },
  {
    id: "mem_oikawa_ur",
    name: "Oikawa UR",
    positions: ["S"],
    bonus: {
      Serve: { flat: 729 },
      Spike: { flat: 570 },
      Set: { flat: 729 },
      Receive: { flat: 539 },
      Block: { flat: 665 },
      Save: { flat: 507 },
    },
    desc: "O [Saque] aumenta em 24%. Quando o saque deste membro for [PERFECT], ganhe 2 acúmulos de [Ritmo de Ataque]. Para cada acúmulo, aliados em quadra recebem +1% de [Percepção], até 10 acúmulos. Se o saque resultar em ace, ganhe 4 acúmulos adicionais. Enquanto este membro estiver em quadra, cada vez que o [Ritmo de Ataque] atingir 6 acúmulos, a [Força] e o [Empenho] dos aliados aumentam em 4% (até 3 acúmulos).",
    img: "img/memories/MemoOikawaUR.png",
  },
  {
    id: "mem_kageyama_ur",
    name: "Kageyama UR",
    positions: ["S"],
    bonus: {
      Serve: { flat: 729 },
      Spike: { flat: 570 },
      Set: { flat: 729 },
      Receive: { flat: 539 },
      Block: { flat: 665 },
      Save: { flat: 507 },
    },
    desc: "O [Passe] aumenta em 24%. Quando este membro ativar uma habilidade de Ataque de Dois Toques, sua [Força] aumenta em 40% da [Percepção], até +100%. Além disso, quando este membro ativar uma habilidade de Dois Toques, o poder do próximo Spike aliado (Potente/Rápido) aumenta em 28% do [Ataque Potente/Ataque Rápido] do atacante.",
    img: "img/memories/MemoKageyamaUR.png",
  },
  {
    id: "mem_atsumu_ur",
    name: "Atsumu UR",
    positions: ["S"],
    bonus: {
      Serve: { flat: 729 },
      Spike: { flat: 570 },
      Set: { flat: 729 },
      Receive: { flat: 539 },
      Block: { flat: 665 },
      Save: { flat: 507 },
    },
    desc: "O [Passe] aumenta em 24%. Enquanto o equipador estiver em quadra, aliados em quadra cuja [Percepção] e [Reflexo] estejam abaixo de 20% recebem +6.4% em [Técnica de Ataque] e [Técnica de Defesa]. Se a jogada de um aliado não for [PERFECT], a [Técnica de Ataque] e a [Técnica de Defesa] do equipador aumentam em 2% por acúmulo (máx. 5), durando por 1 rali.",
    img: "img/memories/MemoAtsumuUR.png",
  },
  {
    id: "mem_kageyama_ssr_serve",
    name: "Kageyama SSR",
    positions: ["S"],
    bonus: {
      Serve: { flat: 663 },
      Spike: { flat: 518 },
      Set: { flat: 663 },
      Receive: { flat: 490 },
      Block: { flat: 605 },
      Save: { flat: 461 },
    },
    desc: "O [Saque] aumenta em 20%. Quando este membro ativar um Supremo de Dois Toques, a [Percepção] dos aliados aumenta em 20% e a [Percepção] deste membro aumenta em mais 15%.",
    img: "img/memories/MemoKageyamaSSR.png",
  },
  {
    id: "mem_kenma_ssr",
    name: "Kenma SSR",
    positions: ["S"],
    bonus: {
      Serve: { flat: 663 },
      Spike: { flat: 518 },
      Set: { flat: 663 },
      Receive: { flat: 490 },
      Block: { flat: 605 },
      Save: { flat: 461 },
    },
    desc: "O [Passe] aumenta em 8%. Enquanto o equipador estiver em quadra, a [Recepção] dos aliados da linha de trás aumenta em 12%. Enquanto o equipador estiver em quadra, quando as pilhas de [Conexão] de um aliado diminuírem, os aliados ganham 1 acúmulo de [Conexão]; para cada acúmulo, aliados em quadra recebem +1% de [Recepção], até 6 acúmulos.",
    img: "img/memories/MemoKenmaSSR.png",
  },
  {
    id: "mem_akaashi_ssr",
    name: "Akaashi SSR",
    positions: ["S"],
    bonus: {
      Serve: { flat: 663 },
      Spike: { flat: 518 },
      Set: { flat: 663 },
      Receive: { flat: 490 },
      Block: { flat: 605 },
      Save: { flat: 461 },
    },
    desc: "O [Passe] aumenta em 12%. Enquanto o [Despertar de Moral da Equipe] de um aliado estiver ativo, quando este membro realizar um Passe, o aliado que for atacar (Potente/Rápido) recupera 4 de Stamina e esse Spike recebe +16% de [Técnica de Ataque]. Quando este membro dissipar um debuff de um aliado, também remove o efeito [Modo de Baixa] desse aliado.",
    img: "img/memories/MemoAkaashiSSR.png",
  },
  {
    id: "mem_oikawa_ssr",
    name: "Oikawa SSR",
    positions: ["S"],
    bonus: {
      Serve: { flat: 663 },
      Spike: { flat: 518 },
      Set: { flat: 663 },
      Receive: { flat: 490 },
      Block: { flat: 605 },
      Save: { flat: 461 },
    },
    desc: "O [Passe] aumenta em 20%. Na primeira vez em cada set que o [Ritmo de Ataque] dos aliados atingir 10 ou mais acúmulos, o [Passe] deste membro aumenta em mais 20% (dura 1 set). Para cada acúmulo de [Ritmo de Ataque], aliados em quadra recebem +1% de [Percepção], até 10 acúmulos.",
    img: "img/memories/MemoOikawaSSR.png",
  },
  {
    id: "mem_koganegawa_ssr",
    name: "Koganegawa SSR",
    positions: ["S"],
    bonus: {
      Serve: { flat: 663 },
      Spike: { flat: 518 },
      Set: { flat: 663 },
      Receive: { flat: 490 },
      Block: { flat: 605 },
      Save: { flat: 461 },
    },
    desc: "O [Passe] aumenta em 16%. Enquanto o equipador estiver em quadra, se o resultado de Bloqueio de um aliado não for [BAD], o poder do próximo Ataque Potente do oponente diminui em 20% do atributo [Ataque Potente] do atacante. Enquanto o equipador estiver em quadra, se o resultado de Bloqueio de um aliado for [BAD], o poder do próximo Bloqueio aliado aumenta em 32% do [Bloqueio] do bloqueador.",
    img: "img/memories/MemoKoganegawaSSR.png",
  },
  {
    id: "mem_shirabu_ssr",
    name: "Shirabu SSR",
    positions: ["S"],
    bonus: {
      Serve: { flat: 663 },
      Spike: { flat: 518 },
      Set: { flat: 663 },
      Receive: { flat: 490 },
      Block: { flat: 605 },
      Save: { flat: 461 },
    },
    desc: "O [Passe] aumenta em 16%. Quando o Passe deste membro for [PERFECT], o aliado que executar um Ataque Potente recebe +32% de [Força] até a bola cruzar a rede uma vez.",
    img: "img/memories/MemoShirabuSSR.png",
  },
  {
    id: "mem_semi_ssr",
    name: "Semi SSR",
    positions: ["S"],
    bonus: {
      Serve: { flat: 663 },
      Spike: { flat: 518 },
      Set: { flat: 663 },
      Receive: { flat: 490 },
      Block: { flat: 605 },
      Save: { flat: 461 },
    },
    desc: "Quando este membro sacar, a [Percepção] aumenta em 16%. Ao ativar um Supremo de Saque, o [Saque] aumenta em 6.4%, até 3 acúmulos.",
    img: "img/memories/MemoSemiSSR.png",
  },
  {
    id: "mem_bokuto_sp",
    name: "Bokuto SP",
    positions: ["WS"],
    bonus: {
      Serve: { flat: 765 },
      Spike: { flat: 838 },
      Set: { flat: 583 },
      Receive: { flat: 838 },
      Block: { flat: 656 },
      Save: { flat: 619 },
    },
    desc: "A [Força] do membro que equipa esta memória aumenta em 24%. Quando o membro atacar com força, a [Técnica de Ataque] aumenta em 5%. Se a duração restante do [Despertar de Moral da Equipe] de um aliado for de 6 ou mais cruzadas de rede, a [Técnica de Ataque] aumenta em mais 20%.",
    img: "img/memories/MemoBokutoSP.png",
  },
  {
    id: "mem_offense_defense_up_hoshiumi_ur",
    name: "Hoshiumi UR",
    positions: ["WS"],
    bonus: {
      Serve: { flat: 665 },
      Spike: { flat: 729 },
      Set: { flat: 507 },
      Receive: { flat: 729 },
      Block: { flat: 570 },
      Save: { flat: 539 },
    },
    desc: "A [Técnica de Ataque] e a [Técnica de Defesa] aumentam em 6.4%. Quando a Habilidade/Habilidade Especial do membro é ativada, seus [Parâmetros Principais] aumentam em 2% (máx. 10 acúmulos). Se a jogada for [PERFECT], ganhe 1 acúmulo adicional.",
    img: "img/memories/MemoHoshiumiUR.png",
  },
  {
    id: "mem_bokuto_ur",
    name: "Bokuto UR",
    positions: ["WS"],
    bonus: {
      Serve: { flat: 665 },
      Spike: { flat: 729 },
      Set: { flat: 507 },
      Receive: { flat: 729 },
      Block: { flat: 570 },
      Save: { flat: 539 },
    },
    desc: "O membro que equipa esta memória tem seu [Ataque Potente] aumentado em 24%. Cada vez que um aliado ativar o [Despertar de Moral da Equipe], o [Ataque Potente] desse membro aumenta em 8% (até 3 acúmulos). Enquanto o membro estiver em quadra, a duração do bônus de Moral da Equipe dos aliados é aumentada em 2 cruzadas de rede.",
    img: "img/memories/MemoBokutoUR.png",
  },
  {
    id: "mem_hayaseomi_ur",
    name: "Hayaseomi UR",
    positions: ["WS"],
    bonus: {
      Serve: { flat: 765 },
      Spike: { flat: 838 },
      Set: { flat: 583 },
      Receive: { flat: 838 },
      Block: { flat: 656 },
      Save: { flat: 619 },
    },
    desc: "O membro que equipa esta memória tem seu [Ataque Potente] aumentado em 24%. Quando o membro receber, a [Técnica de Ataque] aumenta em 15% até a bola cruzar a rede duas vezes. Após receber, o [Empenho] do membro aumenta em 8% (até 4 acúmulos).",
    img: "img/memories/MemoHayaseomiUR.png",
  },
  {
    id: "mem_yui_ssr",
    name: "Yui SSR",
    positions: ["WS"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 663 },
      Block: { flat: 518 },
      Save: { flat: 490 },
    },
    desc: "A [Recepção] aumenta em 20%. Quando este membro receber, o [Ataque Potente] aumenta em 16% e dura até a bola cruzar a rede seis vezes. Se a recepção deste membro for [PERFECT], seu próximo Ataque Potente será garantidamente [PERFECT].",
    img: "img/memories/MemoYuiSSR.png",
  },
  {
    id: "mem_oshiro_ssr",
    name: "Oshiro SSR",
    positions: ["WS"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 663 },
      Block: { flat: 518 },
      Save: { flat: 490 },
    },
    desc: "O [Ataque Potente] aumenta em 20%. Para cada 6 de Stamina recuperada por este membro, o [Ataque Potente] aumenta em 6.3%. Este efeito dura até a bola cruzar a rede cinco vezes. Se a Stamina recuperada em uma única instância exceder 10, a [Técnica de Ataque] aumenta em 6.4% até a bola cruzar a rede cinco vezes.",
    img: "img/memories/MemoOshiroSSR.png",
  },
  {
    id: "mem_kita_ssr",
    name: "Kita SSR",
    positions: ["WS"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 663 },
      Block: { flat: 518 },
      Save: { flat: 490 },
    },
    desc: "A [Recepção] aumenta em 20%. Se a recepção deste membro não for [PERFECT], o poder da próxima recepção de um aliado aumenta em 40% da [Recepção] do membro que receber.",
    img: "img/memories/MemoKitaSSR.png",
  },
  {
    id: "mem_tanaka_ssr",
    name: "Tanaka SSR",
    positions: ["WS"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 663 },
      Block: { flat: 518 },
      Save: { flat: 490 },
    },
    desc: "O [Ataque Potente] aumenta em 20%. Para este membro, até o segundo Ataque Potente de cada set, o poder de finalização aumenta em 36% do [Ataque Potente].",
    img: "img/memories/MemoTanakaSSR.png",
  },
  {
    id: "mem_azumane_ssr",
    name: "Azumane SSR",
    positions: ["WS"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 663 },
      Block: { flat: 518 },
      Save: { flat: 490 },
    },
    desc: "Se o membro que equipa esta memória tiver 50 ou mais de Stamina, o [Ataque Potente] aumenta em 36%. Quando este membro ativar uma habilidade de Ataque Potente e a Stamina consumida for 20 ou mais, o poder desse Ataque Potente aumenta em 32% do [Ataque Potente].",
    img: "img/memories/MemoAzumaneSSR.png",
  },
  {
    id: "mem_iwaizumi_ssr",
    name: "Iwaizumi SSR",
    positions: ["WS"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 663 },
      Block: { flat: 518 },
      Save: { flat: 490 },
    },
    desc: "Exclusivo de [WS]: aumenta a [Recepção] em 10%. Quando o equipador executar um Supremo de Ataque Potente Crítico, aumenta o [Ataque Potente] em 8% da [Recepção] por 3 cruzadas de rede.",
    img: "img/memories/MemoIwaizumiSSR.png",
  },
  {
    id: "mem_futakuchi_ssr",
    name: "Futakuchi SSR",
    positions: ["WS"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 663 },
      Block: { flat: 518 },
      Save: { flat: 490 },
    },
    desc: "O [Bloqueio] aumenta em 20%. Para cada aliado do tipo Bloqueio em quadra, o poder de finalização da Habilidade Especial deste membro aumenta em 6.4% do parâmetro correspondente a essa Especial.",
    img: "img/memories/MemoFutakuchiSSR.png",
  },
  {
    id: "mem_goshiki_ssr",
    name: "Goshiki SSR",
    positions: ["WS"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 663 },
      Block: { flat: 518 },
      Save: { flat: 490 },
    },
    desc: "O [Ataque Potente] aumenta em 20%. Enquanto o [Despertar de Moral da Equipe] de um aliado estiver ativo, o [Ataque Potente] deste membro aumenta em 32%.",
    img: "img/memories/MemoGoshikiSSR.png",
  },
  {
    id: "mem_awareness_reaction_up_oshira_ssr",
    name: "Ohira SSR",
    positions: ["WS"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 663 },
      Block: { flat: 518 },
      Save: { flat: 490 },
    },
    desc: "Quando este membro ativar uma Habilidade, a [Percepção] aumenta em 3.2% e o [Reflexo] aumenta em 3.2%, até 5 acúmulos.",
    img: "img/memories/MemoOhiraSSR.png",
  },
  {
    id: "mem_terushima_ssr",
    name: "Terushima SSR",
    positions: ["WS"],
    bonus: {
      Serve: { flat: 605 },
      Spike: { flat: 663 },
      Set: { flat: 461 },
      Receive: { flat: 663 },
      Block: { flat: 518 },
      Save: { flat: 490 },
    },
    desc: "O [Ataque Potente] aumenta em 24%. Quando este membro ativar o efeito [Escolha Mais], ganhe 2 acúmulos de [Escolha Mais] e aumente a [Recepção] dos aliados da linha de trás em 12% por 1 rali. Para cada acúmulo de [Escolha Mais], o [Ataque Potente]/[Ataque Rápido] aumenta em 2.5%, até 4 acúmulos.",
    img: "img/memories/MemoTerushimaSSR.png",
  },
  {
    id: "mem_kunimi",
    name: "Kunimi SP",
    positions: ["OP"],
    bonus: {
      Serve: { flat: 765 },
      Spike: { flat: 838 },
      Set: { flat: 583 },
      Receive: { flat: 838 },
      Block: { flat: 656 },
      Save: { flat: 619 },
    },
    desc: "Enquanto esta memória estiver equipada, o [Ataque Potente] do membro aumenta em 24%.Se a Stamina desse membro estiver abaixo de 80, sua [Técnica de Ataque] aumenta em 12%.Sempre que a Stamina desse membro for recuperada, o [Poder] dele aumenta em 6% (máx. 5 acúmulos).",
    img: "img/memories/MemoKunimiSP.png",
  },
];
