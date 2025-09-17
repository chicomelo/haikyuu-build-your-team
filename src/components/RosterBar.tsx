import { ChevronUp, X } from "lucide-react";

import { useStore } from "../state/store";

import { PlayerCard } from "./PlayerCard";

import { useDroppable } from "@dnd-kit/core";

import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import type { PlayerType } from "../lib/types";
import { PLAYER_TYPE_META } from "../lib/playerTypes";

export function RosterBar() {
  const { t } = useTranslation();

  const players = useStore((s) => s.players);
  const team = useStore((s) => s.team);

  // Filters
  const roleFilter = useStore((s) => s.selectedType);
  const setRoleFilter = useStore((s) => s.setSelectedType);
  const schoolFilter = useStore((s) => s.selectedSchool);
  const setSchoolFilter = useStore((s) => s.setSelectedSchool);
  const playerTypeFilter = useStore((s) => s.selectedPlayerType);
  const setPlayerTypeFilter = useStore((s) => s.setSelectedPlayerType);

  const open = useStore((s) => s.rosterOpen);
  const close = useStore((s) => s.closeRoster);
  const activeDragId = useStore((s) => s.activeDragId);
  const openRoster = useStore((s) => s.openRoster);

  function toggleRoster() {
    if (open) close();
    else openRoster();
  }

  // Set of player IDs already placed (memoized)
  const positionedPlayers = useMemo(() => {
    return new Set([
      ...(Object.values(team.slots).filter(Boolean) as string[]),
      ...(team.bench.filter(Boolean) as string[]),
    ]);
  }, [team]);

  // Dropdown data
  const schools = useMemo(() => {
    const set = new Set<string>();
    for (const p of players) if (p.school) set.add(p.school);
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [players]);

  const allPlayerTypes = useMemo(() => {
    const set = new Set<PlayerType>();
    for (const p of players) for (const tp of p.types || []) set.add(tp);
    return Array.from(set);
  }, [players]);

  // Filter players and remove those already positioned (memoized)
  const filtered = useMemo(
    () =>
      players.filter(
        (p) =>
          (roleFilter === "all" || p.role === roleFilter) &&
          (schoolFilter === "all" || (p.school && p.school === schoolFilter)) &&
          (playerTypeFilter === "all" ||
            (p.types || []).includes(playerTypeFilter)) &&
          !positionedPlayers.has(p.id)
      ),
    [players, roleFilter, schoolFilter, playerTypeFilter, positionedPlayers]
  );

  // Droppable config for the players list
  const { isOver, setNodeRef } = useDroppable({ id: "roster-list" });

  // Show remove hint when dragging a player
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
          <div className="flex gap-4 text-xs w-full md:w-auto">
            {/* Position */}
            <div className="flex flex-col md:items-center md:flex-row gap-2">
              <label htmlFor="position-filter" className="text-zinc-400">
                Posições
              </label>
              <select
                id="position-filter"
                className="filter-btn bg-transparent"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value as any)}
                aria-label={t("filters.position") || "Position"}
              >
                {(["all", "S", "MB", "WS", "OP", "L"] as const).map((tkey) => (
                  <option key={tkey} value={tkey} className="bg-zinc-800">
                    {tkey === "all" ? t("filters.all") : tkey}
                  </option>
                ))}
              </select>
            </div>

            {/* School */}
            <div className="flex flex-col md:items-center md:flex-row gap-2">
              <label htmlFor="school-filter" className="text-zinc-400">
                Escola
              </label>
              <select
                id="school-filter"
                className="filter-btn bg-transparent"
                value={schoolFilter}
                onChange={(e) => setSchoolFilter(e.target.value as any)}
                aria-label={t("filters.school") || "School"}
              >
                <option value="all" className="bg-neutral-900">
                  {t("filters.all")}
                </option>
                {schools.map((s) => (
                  <option key={s} value={s} className="bg-neutral-900">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Player Type */}
            <div className="flex flex-col md:items-center md:flex-row gap-2">
              <label htmlFor="player-type-filter" className="text-zinc-400">
                Tipo de Jogador
              </label>
              <select
                id="player-type-filter"
                className="filter-btn bg-transparent"
                value={playerTypeFilter}
                onChange={(e) => setPlayerTypeFilter(e.target.value as any)}
                aria-label={t("filters.type") || "Type"}
              >
                <option value="all" className="bg-neutral-900">
                  {t("filters.all_types")}
                </option>
                {allPlayerTypes.map((pt) => (
                  <option key={pt} value={pt} className="bg-neutral-900">
                    {t(PLAYER_TYPE_META[pt].labelKey)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2">
            {isPlayerBeingDragged && (
              <div className="text-xs text-cyan-400/80 hidden md:block">
                {t("roster.drag_here_to_remove")}
              </div>
            )}

            <button
              className="btn text-white/60 hover:text-white hidden md:block"
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
