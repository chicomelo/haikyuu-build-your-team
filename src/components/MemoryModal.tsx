import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

import {
  memoryDetails,
  pickLocalizedText,
  playersData,
} from "../lib/dataRegistry";
import type { MemoryBonusValue } from "../lib/types";
import { useStore } from "../state/store";

const STAT_LABELS: Record<string, { pt: string; en: string }> = {
  Serve: { pt: "Saque", en: "Serve" },
  Spike: { pt: "Ataque Potente / Rápido", en: "Spike" },
  Set: { pt: "Passe", en: "Set" },
  Receive: { pt: "Recepção", en: "Receive" },
  Block: { pt: "Bloqueio", en: "Block" },
  Save: { pt: "Defesa", en: "Save" },
};

function formatBonus(value?: MemoryBonusValue): string {
  if (!value) return "";
  const parts: string[] = [];
  if (value.flat != null) {
    const flat = value.flat;
    const sign = flat > 0 ? "+" : "";
    parts.push(`${sign}${flat}`);
  }
  if (value.percent != null) {
    const percent = value.percent;
    const sign = percent > 0 ? "+" : "";
    parts.push(`${sign}${percent}%`);
  }
  return parts.join(" / ");
}

export function MemoryModal() {
  const { t, i18n } = useTranslation();
  const modalMemoryId = useStore((s) => s.modalMemoryId);
  const close = useStore((s) => s.closeMemoryModal);
  const openPlayerModal = useStore((s) => s.openPlayerModal);

  if (!modalMemoryId) return null;

  const memory = memoryDetails[modalMemoryId];
  if (!memory) return null;

  const language = i18n.language;
  const name = pickLocalizedText(memory.name, language) || memory.id;
  const description = pickLocalizedText(memory.description, language);
  const bonusEntries = Object.entries(memory.bonus || {}) as Array<
    [string, MemoryBonusValue]
  >;
  const linkedPlayer = memory.characterId
    ? playersData.find((player) => player.id === memory.characterId)
    : null;

  const statLabelFor = (stat: string) =>
    STAT_LABELS[stat]?.[language.startsWith("pt") ? "pt" : "en"] || stat;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-2xl bg-neutral-900/95 border border-white/10 rounded-2xl shadow-2xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="btn bg-neutral-900 absolute top-4 right-4 z-50"
          aria-label={t("memory_modal.close", "Fechar")}
          onClick={close}
        >
          <X size={18} />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 p-6">
          <div className="space-y-6">
            <div className="card w-full md:w-52 mx-auto md:mx-0">
              <div className="w-full bg-neutral-800 border border-white/10 rounded-xl flex items-center justify-center overflow-hidden">
                {memory.image ? (
                  <img
                    src={memory.image}
                    alt={name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-xs opacity-70">
                    {t("memory_modal.no_image", "Sem imagem")}
                  </span>
                )}
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <div className="opacity-70 text-xs uppercase tracking-wide">
                  {t("memory_modal.positions", "PosiÃ§Ãµes")}
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {(memory.positions || []).map((pos) => (
                    <span
                      key={pos}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs border border-white/10 bg-white/5"
                    >
                      {pos}
                    </span>
                  ))}
                </div>
              </div>
              {linkedPlayer && (
                <div>
                  <div className="opacity-70 text-xs uppercase tracking-wide">
                    {t("memory_modal.linked_player", "Vinculado a")}
                  </div>
                  <button
                    className="text-sm underline transition-opacity hover:opacity-80"
                    onClick={() => {
                      openPlayerModal(linkedPlayer.id);
                      close();
                    }}
                  >
                    {linkedPlayer.name}
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold leading-tight">{name}</h2>
              {description && (
                <p className="mt-3 opacity-90 leading-relaxed text-sm whitespace-pre-line">
                  {description}
                </p>
              )}
            </div>

            <div className="border-t border-white/10 pt-4">
              <div className="font-semibold mb-3">
                {t("memory_modal.bonus", "Atributos")}
              </div>
              {bonusEntries.length === 0 ? (
                <div className="opacity-70 text-sm">
                  {t("memory_modal.no_bonus", "Sem atributos adicionais")}
                </div>
              ) : (
                <ul className="space-y-2 text-sm">
                  {bonusEntries.map(([stat, value]) => (
                    <li
                      key={stat}
                      className="flex items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-md px-3 py-2"
                    >
                      <span className="font-medium">{statLabelFor(stat)}</span>
                      <span>{formatBonus(value)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
