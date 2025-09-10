import { computeBuffs } from "../lib/rules";
import { useStore } from "../state/store";
import type { Buff } from "../lib/types";
import { useState } from "react";
import { X } from "lucide-react";

export function BuffPanel() {
  const team = useStore((s) => s.team);
  const players = useStore((s) => s.players);
  const buffs = computeBuffs(team, players);

  const positionalBuffs = buffs.filter((b) => b.type === "posicional");
  const bondBuffs = buffs.filter((b) => b.type === "vínculo");

  const [openTooltipId, setOpenTooltipId] = useState<string | null>(null);

  const handleTooltipToggle = (id: string) => {
    setOpenTooltipId(openTooltipId === id ? null : id);
  };

  return (
    <aside
      className="absolute right-6 top-[7%] w-[360px] max-w-[40vw] card p-3"
      style={{ zIndex: 100 }}
    >
      <div className="font-semibold mb-4 text-xl">Sinergias</div>

      {/* Sinergias Posicionais */}
      <div className="mb-3">
        <div className="font-medium text-sm mb-1 text-cyan-300">
          Por Posicionamento
        </div>
        {positionalBuffs.length === 0 ? (
          <div className="text-sm opacity-70">
            Nenhuma sinergia posicional ativa
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
          Por Vínculo
        </div>
        {bondBuffs.length === 0 ? (
          <div className="text-sm opacity-70">
            Nenhuma sinergia de vínculo ativa
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
  const description = buff.desc || "Descrição não disponível";

  console.log(`Rendering BuffButton for ${buff.name}, isOpen: ${isOpen}`);

  return (
    <div className="relative inline-block">
      <button
        onClick={(e) => {
          e.stopPropagation();
          console.log("Button clicked:", buff.name, "isOpen:", !isOpen);
          onToggle();
        }}
        className={`bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-3 py-1 text-sm transition-colors cursor-pointer ${
          buff.type === "posicional" ? "text-cyan-300" : "text-purple-300"
        }`}
      >
        {buff.name}
      </button>

      {isOpen && (
        <div
          className="absolute left-16 transform -translate-x-1/2 bottom-full mb-2 w-64 p-3 bg-black/90 text-white text-xs rounded-lg shadow-xl border border-white/10 pointer-events-auto"
          style={{
            zIndex: 1000,
            position: "absolute",
            bottom: "100%",
            marginBottom: "0.5rem",
          }}
        >
          <button
            onClick={() => {
              onToggle();
            }}
            className="text-white/60 hover:text-white absolute top-2 right-2"
          >
            <X size={20} />
          </button>
          <div className="font-medium mb-2 text-sm">{buff.name}</div>
          <div className="leading-relaxed">{description}</div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/90"></div>
        </div>
      )}
    </div>
  );
}
