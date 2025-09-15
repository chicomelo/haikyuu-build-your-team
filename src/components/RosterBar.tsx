import { ChevronUp, X } from "lucide-react";

import { useStore } from "../state/store";

import { PlayerCard } from "./PlayerCard";

import { useDroppable } from "@dnd-kit/core";

import { useTranslation } from "react-i18next";
import { useMemo } from "react";

export function RosterBar() {
  const { t } = useTranslation();

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

  // Criar um conjunto com os IDs dos jogadores já posicionados (memoizado)
  const positionedPlayers = useMemo(() => {
    return new Set([
      ...(Object.values(team.slots).filter(Boolean) as string[]),
      ...(team.bench.filter(Boolean) as string[]),
    ]);
  }, [team]);

  // Filtrar jogadores por tipo e remover os que já estão posicionados (memoizado)
  const filtered = useMemo(
    () =>
      players.filter(
        (p) =>
          (type === "all" || p.role === type) && !positionedPlayers.has(p.id)
      ),
    [players, type, positionedPlayers]
  );

  // Configurar droppable para a lista de jogadores// Configurar droppable para a lista de jogadores

  const { isOver, setNodeRef } = useDroppable({
    id: "roster-list",
  });

  // Verificar se hÃ¡ um jogador sendo arrastado (para mostrar mensagem de remoÃ§Ã£o)

  const isPlayerBeingDragged =
    activeDragId && activeDragId.startsWith("player:");
  const containerClasses = [
    "border-t max-h-[260px] fixed w-full backdrop-blur transition-all duration-500",
    open
      ? "bottom-0"
      : "-bottom-[220px] md:-bottom-[240px] 2xl:-bottom-[260px]",
    isOver ? "bg-zinc-800/95" : "bg-zinc-800",
    isPlayerBeingDragged ? "border-cyan-500/50" : "border-white/10",
  ].join(" ");

  const scrollClasses = [
    "overflow-y-auto rounded-lg border-2 border-dashed h-[230px]",
    isOver ? "border-cyan-400/80 bg-[rgba(30,50,50,0.3)]" : "border-white/10",
  ].join(" ");

  return (
    <div ref={setNodeRef} className={containerClasses}>
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

      <div className="mx-auto max-w-[1600px] px-4 py-3 h-[220px] md:h-[240px] 2xl:h-[260px] flex flex-col">
        <div className="flex items-center gap-2 mb-2 flex-shrink-0 relative">
          <div className="flex gap-2 text-xs">
            {(["All", "S", "MB", "WS", "OP", "L"] as const).map((t) => (
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
                {t("roster.drag_here_to_remove")}
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

        <div id="roster-scroll" className={scrollClasses}>
          {isPlayerBeingDragged && isOver ? (
            <div className="flex items-center justify-center h-full text-center p-4">
              <div className="text-white/90">
                <div className="text-lg font-semibold mb-2">
                  {t("roster.drag_here_to_remove")}
                </div>

                <div className="text-sm opacity-80">
                  {t("roster.no_players_available_description_1")}
                </div>
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex items-center justify-center h-full text-center p-4">
              <div className="text-white/70">
                <div className="text-lg font-semibold mb-2">
                  {t("roster.no_players_available")}
                </div>
                <div className="text-sm opacity-80">
                  {positionedPlayers.size > 0
                    ? t("roster.no_players_available_description_1")
                    : t("roster.no_players_available_description_2")}
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
