import { ChevronUp, X } from "lucide-react";
import { useStore } from "../state/store";
import { PlayerCard } from "./PlayerCard";
import { useDroppable } from "@dnd-kit/core";

export function RosterBar() {
  const players = useStore((s) => s.players);
  const team = useStore((s) => s.team);
  const type = useStore((s) => s.selectedType);
  const setType = useStore((s) => s.setSelectedType);
  const open = useStore((s) => s.rosterOpen);
  const close = useStore((s) => s.closeRoster);
  const activeDragId = useStore((s) => s.activeDragId);
  const openRoster = useStore((s) => s.openRoster);

  function toggleRoster() {
    if (open) {
      close();
    } else {
      openRoster();
    }
  }

  // Criar um conjunto com os IDs dos jogadores já posicionados
  const positionedPlayers = new Set([
    ...(Object.values(team.slots).filter(Boolean) as string[]),
    ...(team.bench.filter(Boolean) as string[]),
  ]);

  // Filtrar jogadores por tipo e remover os que já estão posicionados
  const filtered = players.filter(
    (p) => (type === "all" || p.role === type) && !positionedPlayers.has(p.id)
  );

  // Configurar droppable para a lista de jogadores
  const { isOver, setNodeRef } = useDroppable({
    id: "roster-list",
  });

  // Verificar se há um jogador sendo arrastado (para mostrar mensagem de remoção)
  const isPlayerBeingDragged =
    activeDragId && activeDragId.startsWith("player:");

  return (
    <div
      ref={setNodeRef}
      className={`border-t max-h-[260px] fixed w-full border-white/10 bg-zinc-800 backdrop-blur transition-all duration-500 ${
        open ? "bottom-0" : "-bottom-[260px]"
      }`}
      style={{
        backgroundColor: isOver ? "rgba(50, 50, 50, 0.95)" : undefined,
        borderColor: isPlayerBeingDragged
          ? "rgba(0, 200, 200, 0.5)"
          : undefined,
      }}
    >
      <button
        onClick={toggleRoster}
        className="bg-zinc-800 flex justify-start w-12 h-12 rounded-xl rotate-45 absolute -top-4 left-1/2 -translate-x-1/2 outline-none"
      >
        <ChevronUp
          className={`${
            open ? "rotate-[135deg]" : "rotate-[315deg]"
          } absolute top-[12px] -translate-y-1/2 transition-all duration-300 outline-none`}
        />
      </button>
      <div className="mx-auto max-w-[1600px] px-4 py-3 h-[260px] flex flex-col">
        <div className="flex items-center gap-2 mb-2 flex-shrink-0">
          <div className="flex gap-2 text-xs">
            {(["all", "S", "MB", "WS", "OP", "L"] as const).map((t) => (
              <button
                key={t}
                className={`filter-btn ${
                  type === t ? "filter-btn-active" : "filter-btn-inactive"
                }`}
                onClick={() => setType(t)}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2">
            {isPlayerBeingDragged && (
              <div className="text-xs text-cyan-400/80 hidden md:block">
                Arraste para esta área para remover do time
              </div>
            )}
            <button
              className="btn text-white/60 hover:text-white"
              onClick={close}
            >
              <X size={20} />
            </button>
          </div>
        </div>
        <div
          id="roster-scroll"
          className="overflow-y-auto rounded-lg border-2 border-dashed"
          style={{
            height: "230px",
            borderColor: isOver
              ? "rgba(0, 200, 200, 0.8)"
              : "rgba(255, 255, 255, 0.1)",
            backgroundColor: isOver ? "rgba(30, 50, 50, 0.3)" : "transparent",
            borderWidth: isPlayerBeingDragged ? "1px" : "1px",
          }}
        >
          {isPlayerBeingDragged && isOver ? (
            <div className="flex items-center justify-center h-full text-center p-4">
              <div className="text-white/90">
                <div className="text-lg font-semibold mb-2">
                  ✓ Solte aqui para remover do time
                </div>
                <div className="text-sm opacity-80">
                  Arraste um jogador da quadra ou reservas de volta para a lista
                  para removê-lo do time
                </div>
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex items-center justify-center h-full text-center p-4">
              <div className="text-white/70">
                <div className="text-lg mb-2">Nenhum jogador disponível</div>
                <div className="text-sm opacity-80">
                  {positionedPlayers.size > 0
                    ? "Arraste jogadores da quadra ou reservas de volta para a lista para removê-los do time"
                    : "Todos os jogadores já estão em uso"}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 flex-wrap p-2">
              {filtered.map((p) => (
                <PlayerCard key={p.id} p={p} compact />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
