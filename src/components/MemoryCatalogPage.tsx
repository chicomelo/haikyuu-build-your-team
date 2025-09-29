import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  memoriesData,
  pickLocalizedText,
  playersData,
} from "../lib/dataRegistry";
import { useStore } from "../state/store";

const POSITION_ORDER = ["S", "MB", "WS", "OP", "L"];

function positionRank(pos: string): number {
  const idx = POSITION_ORDER.indexOf(pos);
  return idx === -1 ? POSITION_ORDER.length + 1 : idx;
}

export function MemoryCatalogPage() {
  const { t, i18n } = useTranslation();
  const openMemoryModal = useStore((s) => s.openMemoryModal);
  const [positionFilter, setPositionFilter] = useState<string>("all");
  const [playerFilter, setPlayerFilter] = useState<string>("all");
  const language = i18n.language;

  const positionOptions = useMemo(() => {
    const set = new Set<string>();
    for (const memory of memoriesData) {
      for (const pos of memory.positions || []) {
        set.add(pos);
      }
    }
    return Array.from(set).sort(
      (a, b) => positionRank(a) - positionRank(b) || a.localeCompare(b)
    );
  }, []);

  const playerOptions = useMemo(() => {
    return playersData
      .filter((player) => Boolean(player.memoryId))
      .map((player) => ({
        id: player.id,
        name: player.name,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const sortedMemories = useMemo(() => {
    return [...memoriesData].sort((a, b) => {
      const aPos = a.positions?.[0] ?? "";
      const bPos = b.positions?.[0] ?? "";
      const posCompare = positionRank(aPos) - positionRank(bPos);
      if (posCompare !== 0) return posCompare;
      const aName = pickLocalizedText(a.name, language) || a.id;
      const bName = pickLocalizedText(b.name, language) || b.id;
      return aName.localeCompare(bName);
    });
  }, [language]);

  const filteredMemories = useMemo(() => {
    return sortedMemories.filter((memory) => {
      if (positionFilter !== "all") {
        const positions = memory.positions || [];
        if (!positions.includes(positionFilter)) return false;
      }
      if (playerFilter !== "all") {
        if (memory.characterId !== playerFilter) return false;
      }
      return true;
    });
  }, [positionFilter, playerFilter, sortedMemories]);

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-[1600px] px-4 py-8">
        <div className="bg-neutral-900/70 border border-white/10 rounded-2xl shadow-xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold">
                {t("memory_page.title", "Memórias")}
              </h1>
              <p className="text-sm opacity-80 mt-2 max-w-2xl">
                {t(
                  "memory_page.subtitle",
                  "Visualize e filtre todas as memórias disponíveis para seus personagens."
                )}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <label className="flex flex-col text-xs uppercase tracking-wide opacity-70 gap-1">
                {t("memory_page.filters.position", "Posição")}
                <select
                  className="bg-neutral-800 border border-white/10 rounded-md px-3 py-2 text-sm"
                  value={positionFilter}
                  onChange={(event) => setPositionFilter(event.target.value)}
                >
                  <option value="all">
                    {t(
                      "memory_page.filters.all_positions",
                      "Todas as posições"
                    )}
                  </option>
                  {positionOptions.map((pos) => (
                    <option key={pos} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col text-xs uppercase tracking-wide opacity-70 gap-1">
                {t("memory_page.filters.player", "Personagem")}
                <select
                  className="bg-neutral-800 border border-white/10 rounded-md px-3 py-2 text-sm"
                  value={playerFilter}
                  onChange={(event) => setPlayerFilter(event.target.value)}
                >
                  <option value="all">
                    {t(
                      "memory_page.filters.all_players",
                      "Todos os personagens"
                    )}
                  </option>
                  {playerOptions.map((player) => (
                    <option key={player.id} value={player.id}>
                      {player.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {filteredMemories.length === 0 ? (
            <div className="text-center py-16 text-sm opacity-80">
              {t(
                "memory_page.empty",
                "Nenhuma memória encontrada para os filtros selecionados."
              )}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredMemories.map((memory) => {
                const name =
                  pickLocalizedText(memory.name, language) || memory.id;

                return (
                  <button
                    key={memory.id}
                    className="card text-left bg-neutral-900/70 border border-white/10 rounded-xl p-2 md:p-4 hover:border-white/30 transition"
                    onClick={() => openMemoryModal(memory.id)}
                  >
                    <div className="bg-neutral-800 border border-white/20 rounded-lg overflow-hidden mb-2 md:mb-4">
                      {memory.image ? (
                        <img
                          src={memory.image}
                          alt={name}
                          className="w-full object-contain"
                        />
                      ) : (
                        <span className="text-xs opacity-70">
                          {t("memory_modal.no_image", "Sem imagem")}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2 flex items-center justify-between">
                      <div className="text-sm md:text-lg font-semibold leading-tight">
                        {name}
                      </div>
                      <div className="flex !mt-0">
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
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
