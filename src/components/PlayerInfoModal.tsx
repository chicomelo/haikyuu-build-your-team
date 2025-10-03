import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { useStore, getPlayerById } from "../state/store";

import { getPlayerTypeLabel } from "../lib/playerTypes";
import {
  resonanceDetails,
  pickLocalizedText,
  memoryDetails,
} from "../lib/dataRegistry";
import { getTranslatedBuffName } from "../lib/buffTranslations";
import { getAbilityText } from "../lib/abilityTranslations";

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

  if (!modalPlayerId) return null;
  const p = getPlayerById(modalPlayerId);
  if (!p) return null;

  const language = i18n.language;
  const resonanceEntries = (p.skillResonances || [])
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

  const playerLinks = p.links || [];
  const memory = p.memoryId ? memoryDetails[p.memoryId] : null;
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
              {p.name}
            </div>
            <div className="flex md:flex-col gap-4 md:mb-4">
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="card w-24 md:w-40">
                  <div className="w-full aspect-[71/100] bg-neutral-800 relative">
                    {p.avatar ? (
                      <img
                        src={p.avatar}
                        alt={p.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="grid place-items-center text-xs opacity-70">
                        {p.name}
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
                    {p.role}
                  </div>
                  {p.school && (
                    <div>
                      <span className="opacity-70">
                        {t("player_modal.school")}:
                      </span>{" "}
                      {p.school}
                    </div>
                  )}

                  {playerLinks.length > 0 && (
                    <div>
                      <div className="opacity-70">
                        {t("player_modal.synergies")}:
                      </div>

                      <ul className="list-disc list-inside">
                        {playerLinks.map((l) => {
                          const display = getTranslatedBuffName(
                            l.key,
                            i18n.language
                          );
                          return <li key={l.key}>{display}</li>;
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="hidden md:inline-block text-xl md:text-2xl font-semibold pb-4">
              {p.name}
            </div>
            {/* Types badges */}
            {Array.isArray(p.types) && p.types.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {p.types.map((type) => (
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

            <div className="space-y-4">
              <div className="font-semibold">{t("player_modal.abilities")}</div>
              {(p.abilities || []).map((ab) => {
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
                              defaultValue: "Required Skill Level: {{level}}",
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
          </div>
        </div>
      </div>
    </div>
  );
}
