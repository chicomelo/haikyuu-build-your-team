import type { AbilityRef } from "./types";
import { abilityDetails, pickLocalizedText } from "./dataRegistry";

type AbilityLike = AbilityRef & { name?: string; desc?: string };

type AbilityTextResult = {
  name: string;
  desc: string;
};

export function getAbilityText(ability: AbilityLike, language: string): AbilityTextResult {
  const detail = abilityDetails[ability.id];
  const name = detail ? pickLocalizedText(detail.name, language) : (ability.name ?? "");
  const desc = detail ? pickLocalizedText(detail.description, language) : (ability.desc ?? "");

  return {
    name: name || ability.name || ability.id,
    desc: desc || ability.desc || "",
  };
}

export function getAbilityDetail(id: string) {
  return abilityDetails[id];
}
