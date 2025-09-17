import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { useStore, getPlayerById } from "../state/store";

import { PLAYER_TYPE_META } from "../lib/playerTypes";
import { getTranslatedBuffName } from "../lib/buffTranslations";
import { getAbilityText } from "../lib/abilityTranslations";

export function PlayerInfoModal() {
  const { t, i18n } = useTranslation();
  const modalPlayerId = useStore((s) => s.modalPlayerId);
  const close = useStore((s) => s.closePlayerModal);

  if (!modalPlayerId) return null;
  const p = getPlayerById(modalPlayerId);
  if (!p) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="w-full relative max-w-5xl bg-neutral-900 border border-white/10 rounded-xl shadow-xl max-h-[90vh] md:max-h-[80vh] overflow-y-auto"
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
              <div>
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

                  {p.links?.[0]?.name && (
                    <>
                      <div>
                        <div className="opacity-70">
                          {t("player_modal.synergies")}:
                        </div>

                        <ul className="list-disc list-inside">
                          {(p.links || []).map((l) => {
                            const keyOrName = l.key || l.name;
                            const display = getTranslatedBuffName(
                              keyOrName,
                              i18n.language
                            );
                            if (l.name) {
                              return <li key={l.key || l.name}>{display}</li>;
                            } else {
                              return (
                                <li key={l.key || l.name}>Sem sinergia</li>
                              );
                            }
                          })}
                        </ul>
                      </div>
                    </>
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
                    {t(PLAYER_TYPE_META[type].labelKey)}
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
                      {desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
