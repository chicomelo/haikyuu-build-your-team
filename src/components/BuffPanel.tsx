import { computeBuffs } from "../lib/rules";
import { useStore } from "../state/store";
import type { Buff } from "../lib/types";
import { fixMojibake } from "../lib/textFix";
import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export function BuffPanel() {
  const { t, i18n } = useTranslation();
  const team = useStore((s) => s.team);
  const players = useStore((s) => s.players);
  const buffs = computeBuffs(team, players, i18n.language);

  const positionalBuffs = buffs.filter((b) => b.type === "positional");
  const bondBuffs = buffs.filter((b) => b.type === "bond");

  const [openTooltipId, setOpenTooltipId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleTooltipToggle = (id: string) => {
    setOpenTooltipId(openTooltipId === id ? null : id);
  };

  return (
    <aside className="absolute z-10 right-[1rem] md:right-20 2xl:right-16 top-[2%] md:top-[9%] 2xl:top-[9%] w-full max-w-[90vw] md:max-w-[20vw] 2xl:max-w-[300px] card p-2 md:p-4">
      <button
        type="button"
        className="w-full flex items-center justify-between font-semibold text-md md:text-xl"
        onClick={() => setMobileOpen((v) => !v)}
        aria-expanded={mobileOpen}
      >
        <span>{t("buffs.title")}</span>
        <ChevronDown
          className={`md:hidden transition-transform duration-500 ${
            mobileOpen ? "rotate-180" : "rotate-0"
          }`}
          size={18}
        />
      </button>
      <div className="">
        <div
          className={`md:block overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            mobileOpen ? "max-h-[60vh]" : "max-h-0"
          } md:max-h-none md:overflow-visible`}
        >
          {/* Sinergias Posicionais */}
          <div className="mb-3">
            <div className="font-medium text-sm mb-1 text-cyan-300 pt-2 md:pt-3">
              {t("buffs.positional")}
            </div>
            {positionalBuffs.length === 0 ? (
              <div className="text-sm opacity-70">
                {t("buffs.no_positional_buffs")}
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {positionalBuffs.map((b) => (
                  <BuffButton
                    key={b.id}
                    buff={b}
                    isOpen={openTooltipId === b.id}
                    onToggle={() => handleTooltipToggle(b.id)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Sinergias de Vínculo */}
          <div>
            <div className="font-medium text-sm mb-1 text-purple-300">
              {t("buffs.bond")}
            </div>
            {bondBuffs.length === 0 ? (
              <div className="text-sm opacity-70">
                {t("buffs.no_bond_buffs")}
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {bondBuffs.map((b) => (
                  <BuffButton
                    key={b.id}
                    buff={b}
                    isOpen={openTooltipId === b.id}
                    onToggle={() => handleTooltipToggle(b.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}

function BuffButton({
  buff,
  isOpen,
  onToggle,
}: {
  buff: Buff;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { t } = useTranslation();
  const description = fixMojibake(buff.desc || t("buffs.no_description"));

  return (
    <div className="relative inline-block">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        className={`font-bold pl-4 md:bg-white/10 md:hover:bg-white/20 md:border md:border-white/20 md:rounded-full md:px-3 md:py-1 text-sm md:transition-colors md:cursor-pointer ${
          buff.type === "positional" ? "md:text-cyan-300" : "md:text-purple-300"
        }`}
      >
        {fixMojibake(buff.name)}
      </button>

      {isOpen && (
        <div
          className="pl-4 md:absolute md:left-16 md:transform md:-translate-x-1/2 md:bottom-full md:mb-2 md:w-64 md:p-3 md:bg-black/90 text-white text-xs md:rounded-lg md:shadow-xl md:border md:border-white/10 md:pointer-events-auto"
          style={{
            zIndex: 1000,
            bottom: "100%",
            marginBottom: "0.5rem",
          }}
        >
          <button
            onClick={() => {
              onToggle();
            }}
            className="hidden md:block md:text-white/60 md:hover:text-white md:absolute md:top-2 md:right-2"
          >
            <X size={20} />
          </button>
          <div className="font-medium mb-2 text-sm hidden md:block">
            {buff.name}
          </div>
          <div className="leading-relaxed text-sm">{description}</div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/90"></div>
        </div>
      )}
    </div>
  );
}

