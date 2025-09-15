import type { PlayerType } from './types';

export const PLAYER_TYPE_META: Record<PlayerType, { icon: string; labelKey: string }> = {
  power:   { icon: '/assets/icons/powersymbol.png',   labelKey: 'player_types.power' },
  block:   { icon: '/assets/icons/blocksymbol.png',   labelKey: 'player_types.block' },
  quick:   { icon: '/assets/icons/quicksymbol.png',   labelKey: 'player_types.quick' },
  receive: { icon: '/assets/icons/receivesymbol.png', labelKey: 'player_types.receive' },
  serve:   { icon: '/assets/icons/servesymbol.png',   labelKey: 'player_types.serve' },
  setter:  { icon: '/assets/icons/settersymbol.png',  labelKey: 'player_types.setter' },
};

