import type { PlayerType } from "./types";
import { pickLocalizedText, playerTypeDetails } from "./dataRegistry";

export const PLAYER_TYPE_ICONS: Record<PlayerType, string> = {
  power: '/assets/icons/powersymbol.png',
  block: '/assets/icons/blocksymbol.png',
  quick: '/assets/icons/quicksymbol.png',
  receive: '/assets/icons/receivesymbol.png',
  serve: '/assets/icons/servesymbol.png',
  setter: '/assets/icons/settersymbol.png',
};

export function getPlayerTypeLabel(type: PlayerType, language: string): string {
  const detail = playerTypeDetails[type];
  if (!detail) return type;
  const label = pickLocalizedText(detail.name, language);
  return label || type;
}

export function getPlayerTypeDescription(type: PlayerType, language: string): string {
  const detail = playerTypeDetails[type];
  if (!detail) return "";
  return pickLocalizedText(detail.description, language);
}
