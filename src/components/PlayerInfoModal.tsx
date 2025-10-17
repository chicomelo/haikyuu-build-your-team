import { Fragment, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { useStore, getPlayerById } from "../state/store";

import { getPlayerTypeLabel } from "../lib/playerTypes";
import {
  resonanceDetails,
  pickLocalizedText,
  memoryDetails,
  linkDetails,
} from "../lib/dataRegistry";
import { getTranslatedBuffName, slugify } from "../lib/buffTranslations";
import { getAbilityText } from "../lib/abilityTranslations";
import type { LinkDetail } from "../lib/types";
import { getLinkParticipants } from "../lib/linkParticipants";

function renderMultiline(text: string) {
  if (!text) return text;
  const parts = text.split(/\r?\n/);
  return parts.map((line, idx) => (
    <Fragment key={idx}>
      {line}
      {idx < parts.length - 1 ? <br /> : null}
    </Fragment>
  ));
}

export function PlayerInfoModal() {
  const { t, i18n } = useTranslation();
  const modalPlayerId = useStore((s) => s.modalPlayerId);
  const close = useStore((s) => s.closePlayerModal);
  const openMemoryModal = useStore((s) => s.openMemoryModal);
  const [selectedSynergySlug, setSelectedSynergySlug] = useState<string | null>(
    null
  );

  const player = modalPlayerId ? getPlayerById(modalPlayerId) : null;

  useEffect(() => {
    setSelectedSynergySlug(null);
  }, [modalPlayerId]);

  const language = i18n.language;
  const playerLinks = useMemo(() => player?.links ?? [], [player]);

  const resonanceEntries = useMemo(() => {
    if (!player) return [];
    return (player.skillResonances || [])
      .map((res) => {
        const detail = resonanceDetails[res.id];
        if (!detail) return null;
        const name = pickLocalizedText(detail.name, language) || res.id;
        const effects = (detail.effects || [])
          .map((effect) => pickLocalizedText(effect, language))
          .filter((text): text is string => Boolean(text));
        return {
          id: res.id,
          order: res.order,
          required: res.requiredSkillLevel,
          name,
          effects,
        };
      })
      .filter(
        (
          item
        ): item is {
          id: string;
          order: number;
          required: number | null | undefined;
          name: string;
          effects: string[];
        } => Boolean(item)
      );
  }, [language, player]);

  const synergyEntries = useMemo(() => {
    return playerLinks.map((link, index) => {
      const displayName = getTranslatedBuffName(link.key, language);
      const candidates: string[] = [];
      if (link.key) {
        candidates.push(link.key);
        candidates.push(slugify(link.key));
      }
      if (displayName) {
        candidates.push(slugify(displayName));
      }

      let matchedSlug: string | null = null;
      let matchedDetail: LinkDetail | undefined = undefined;
      for (const candidate of candidates) {
        if (!candidate) continue;
        const detail = linkDetails[candidate];
        if (detail) {
          matchedSlug = candidate;
          matchedDetail = detail;
          break;
        }
      }

      if (!matchedSlug) {
        for (const [key, detail] of Object.entries(linkDetails)) {
          const localizedName = pickLocalizedText(detail.name, language);
          if (
            localizedName &&
            localizedName.toLowerCase() === displayName.toLowerCase()
          ) {
            matchedSlug = key;
            matchedDetail = detail;
            break;
          }
        }
      }

      const fallbackSlug =
        link.key && link.key.length > 0
          ? slugify(link.key)
          : displayName
          ? slugify(displayName)
          : null;
      const identifier =
        matchedSlug ??
        fallbackSlug ??
        (link.key ? slugify(link.key) : `synergy-${index}`);

      return {
        id: identifier,
        slug: matchedSlug,
        key: link.key ?? null,
        name: displayName || link.key,
        type: link.type,
        detail: matchedDetail,
      };
    });
  }, [language, playerLinks]);

  const selectedSynergy = useMemo(() => {
    if (!selectedSynergySlug || !player) return null;
    const entry = synergyEntries.find(
      (item) => item.id === selectedSynergySlug
    );
    if (!entry) return null;
    const detail =
      entry.detail ||
      (entry.slug ? linkDetails[entry.slug] : undefined) ||
      (entry.key
        ? linkDetails[entry.key] || linkDetails[slugify(entry.key)]
        : undefined) ||
      (selectedSynergySlug ? linkDetails[selectedSynergySlug] : undefined);
    const description = detail
      ? pickLocalizedText(detail.description, language) || ""
      : "";

    const baseIdentifier = entry.slug || entry.key || entry.id || "";
    const participants = getLinkParticipants(baseIdentifier);
    const members = participants.slice();

    const currentIndex = members.findIndex((m) => m.id === player.id);
    if (currentIndex >= 0) {
      const [current] = members.splice(currentIndex, 1);
      members.unshift(current);
    } else {
      members.unshift({
        id: player.id,
        name: player.name,
        avatar: player.avatar,
      });
    }

    return {
      slug: entry.slug,
      name: entry.name,
      description,
      members,
      type: entry.type,
    };
  }, [language, player, selectedSynergySlug, synergyEntries]);

  const handleSynergyClick = (id: string | null) => {
    if (!id) return;
    setSelectedSynergySlug((prev) => (prev === id ? null : id));
  };

  if (!modalPlayerId || !player) return null;

  const memory = player.memoryId ? memoryDetails[player.memoryId] : null;
  const memoryName = memory ? pickLocalizedText(memory.name, language) : "";

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="w-full relative max-w-6xl bg-neutral-900 border border-white/10 rounded-xl shadow-xl max-h-[90vh] md:max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label={t("player_modal.close_aria")!}
          className="btn absolute top-4 right-4 "
          onClick={close}
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 p-6">
          {/* Left column */}
          <div>
            <div className="text-xl md:text-2xl font-semibold pb-4 md:hidden">
              {player.name}
            </div>
            <div className="flex md:flex-col gap-4 md:mb-4">
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="card w-24 md:w-40">
                  <div className="w-full aspect-[71/100] bg-neutral-800 relative">
                    {player.avatar ? (
                      <img
                        src={player.avatar}
                        alt={player.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="grid place-items-center text-xs opacity-70">
                        {player.name}
                      </div>
                    )}
                  </div>
                </div>
                {memory && (
                  <div className="w-full">
                    <div className="opacity-70 text-xs uppercase tracking-wide text-center md:text-left mb-2">
                      {t("player_modal.memory", "Memória")}
                    </div>
                    <button
                      className="card w-24 md:w-40 border border-white/10 hover:border-white/50 transition-all"
                      onClick={() => openMemoryModal(memory.id)}
                    >
                      <div className="w-full  bg-neutral-800 border border-white/10 hover:border-white/50 transition-all rounded-lg overflow-hidden flex items-center justify-center">
                        {memory.image ? (
                          <img
                            src={memory.image}
                            alt={memoryName || memory.id}
                            className="w-full object-contain"
                          />
                        ) : (
                          <span className="text-xs opacity-70">
                            {t("memory_modal.no_image", "Sem imagem")}
                          </span>
                        )}
                      </div>
                    </button>
                  </div>
                )}
              </div>
              <div>
                <div className=" text-sm space-y-2">
                  <div>
                    <span className="opacity-70">
                      {t("player_modal.position")}:
                    </span>{" "}
                    {player.role}
                  </div>
                  {player.school && (
                    <div>
                      <span className="opacity-70">
                        {t("player_modal.school")}:
                      </span>{" "}
                      {player.school}
                    </div>
                  )}

                  {synergyEntries.length > 0 && (
                    <div>
                      <div className="opacity-70">
                        {t("player_modal.synergies")}:
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {synergyEntries.map((entry, idx) => {
                          const isSelected = entry.id === selectedSynergySlug;
                          const isDisabled = !entry.id;
                          const typeClass =
                            entry.type === "positional"
                              ? "md:text-cyan-300"
                              : "md:text-purple-300";
                          const stateClass = isSelected
                            ? "bg-white/10 md:bg-white/20 md:border-cyan-400"
                            : "";
                          const disabledClass = isDisabled
                            ? "opacity-60 cursor-not-allowed md:cursor-not-allowed md:hover:bg-white/10"
                            : "md:cursor-pointer";

                          return (
                            <button
                              key={entry.id ?? `${entry.name}-${idx}`}
                              type="button"
                              onClick={() => handleSynergyClick(entry.id)}
                              disabled={isDisabled}
                              className={`font-bold text-left pl-4 md:bg-white/10 md:hover:bg-white/20 md:border md:border-white/20 md:rounded-full md:px-3 md:py-1 text-xs md:transition-colors ${typeClass} ${stateClass} ${disabledClass}`}
                            >
                              {entry.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="hidden md:inline-block text-xl md:text-2xl font-semibold pb-4">
              {player.name}
            </div>
            {/* Types badges */}
            {Array.isArray(player.types) && player.types.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {player.types.map((type) => (
                  <span
                    key={type}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm border border-white/10 bg-white/5"
                  >
                    {getPlayerTypeLabel(type, i18n.language)}
                  </span>
                ))}
              </div>
            )}

            <div className="border-t border-white/10 my-4" />

            {selectedSynergy ? (
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xl md:text-2xl font-semibold leading-tight">
                      {selectedSynergy.name}
                    </div>
                    <div className="text-xs uppercase tracking-wide opacity-70 mt-1">
                      {selectedSynergy.type === "positional"
                        ? t(
                            "player_modal.positional_synergy",
                            "Sinergia Posicional"
                          )
                        : t("player_modal.bond_synergy", "Sinergia de Vínculo")}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn text-xs md:text-sm"
                    onClick={() => setSelectedSynergySlug(null)}
                  >
                    {t("player_modal.view_abilities", "Ver habilidades")}
                  </button>
                </div>

                <div>
                  <div className="opacity-70 text-xs uppercase tracking-wide">
                    {t(
                      "player_modal.synergy_required_players",
                      "Jogadores necessários"
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-3">
                    {selectedSynergy.members.map((member) => (
                      <div
                        key={member.id}
                        className="card w-24 md:w-28 p-2 flex flex-col items-center gap-2 border border-white/10 bg-white/5"
                      >
                        <div className="w-full aspect-[71/100] bg-neutral-800 border border-white/10 rounded-md overflow-hidden flex items-center justify-center">
                          {member.avatar ? (
                            <img
                              src={member.avatar}
                              alt={member.name}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <span className="text-xs opacity-70 text-center px-2">
                              {member.name}
                            </span>
                          )}
                        </div>
                        <div className="text-xs font-semibold text-center leading-tight">
                          {member.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="opacity-70 text-xs uppercase tracking-wide mb-2">
                    {t("player_modal.synergy_description", "Descrição")}
                  </div>
                  {selectedSynergy.description ? (
                    <div className="leading-relaxed text-sm">
                      {renderMultiline(selectedSynergy.description)}
                    </div>
                  ) : (
                    <div className="text-sm opacity-80">
                      {t(
                        "player_modal.synergy_no_description",
                        "Nenhuma descrição disponível."
                      )}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  <div className="font-semibold">
                    {t("player_modal.abilities")}
                  </div>
                  {(player.abilities || []).map((ab) => {
                    const { name, desc } = getAbilityText(ab, i18n.language);
                    return (
                      <div key={ab.id} className="space-y-1">
                        <div className="font-semibold">{name}</div>
                        <div className="opacity-90 leading-relaxed text-sm">
                          {renderMultiline(desc)}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {resonanceEntries.length > 0 && (
                  <>
                    <div className="border-t border-white/10 my-4" />
                    <div className="space-y-4">
                      <div className="font-semibold">
                        {t("player_modal.skill_resonances", "Skill Resonances")}
                      </div>
                      {resonanceEntries.map((res) => (
                        <div key={res.id} className="space-y-1">
                          <div className="font-semibold">
                            {res.name}
                            {res.required != null && (
                              <span className="ml-2 text-xs uppercase tracking-wide opacity-70">
                                {t("player_modal.required_skill_level", {
                                  level: res.required,
                                  defaultValue:
                                    "Required Skill Level: {{level}}",
                                })}
                              </span>
                            )}
                          </div>
                          {res.effects.length > 0 && (
                            <ul className="list-disc list-inside opacity-90 text-sm">
                              {res.effects.map((text, idx) => (
                                <li className="list-none" key={idx}>
                                  {renderMultiline(text)}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
