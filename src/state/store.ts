import { create } from "zustand";
import rawPlayers from "../data/players.json";
import type { Position, Team, PlayerRole, Player } from "../lib/types";
const playersInfo = rawPlayers as unknown as Player[];
import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core";

type Store = {
  players: Player[];
  team: Team;
  selectedType: "all" | PlayerRole;
  setSelectedType: (t: Store["selectedType"]) => void;
  rosterOpen: boolean;
  openRoster: () => void;
  closeRoster: () => void;
  selectedSlot: Position | null;
  selectSlot: (pos: Position | null) => void;
  selectedBenchIndex: number | null;
  selectBench: (index: number | null) => void;
  clearPosition: (pos: Position) => void;
  placePlayer: (pos: Position, playerId: string) => void;
  moveToBench: (playerId: string, benchIndex?: number) => void;
  removeFromBench: (playerId: string) => void;
  pickPlayer: (playerId: string) => void;
  clearAllSlots: () => void;
  rotatePositions: () => void;
  rotationLabels: Record<Position, string>;
  setRotationLabels: (labels: Record<Position, string>) => void;
  loadTeam: (team: Team, rotationLabels?: Record<Position, string>) => void;
  onDragEnd: (e: DragEndEvent) => void;
  onDragStart: (e: DragStartEvent) => void;
  onDragCancel: () => void;
  activeDragId: string | null;
};

const emptyTeam: Team = {
  slots: {
    S: null,
    MB1: null,
    WS1: null,
    L: null,
    WS2: null,
    MB2: null,
    OP: null,
  },
  bench: [],
};

// Estado inicial para os rótulos de rotação
const initialRotationLabels: Record<Position, string> = {
  S: "S",
  MB1: "MB",
  WS1: "WS",
  L: "L",
  WS2: "WS",
  MB2: "MB",
  OP: "OP",
};

function ensureBenchSize(arr: string[], size = 12) {
  const out = arr.slice(0, size);
  while (out.length < size) out.push("");
  return out;
}

export const useStore = create<Store>((set, get) => ({
  players: playersInfo,
  team: { ...emptyTeam, bench: ensureBenchSize([]) },
  selectedType: "all",
  setSelectedType: (t) => {
    set({ selectedType: t });
    // focus roster list on change
    setTimeout(() => {
      const el = document.getElementById("roster-scroll");
      if (el) el.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  },
  rosterOpen: false,
  openRoster: () => set({ rosterOpen: true }),
  closeRoster: () => set({ rosterOpen: false, selectedSlot: null }),
  selectedSlot: null,
  selectSlot: (pos) => set({ selectedSlot: pos, rosterOpen: true }),
  selectedBenchIndex: null,
  selectBench: (index) => set({ selectedBenchIndex: index, rosterOpen: true }),

  rotationLabels: initialRotationLabels,
  setRotationLabels: (labels) => set({ rotationLabels: labels }),

  loadTeam: (newTeam, newRotationLabels) =>
    set(() => {
      // Garantir que a bancada tenha exatamente 12 slots
      const bench = [...newTeam.bench];
      while (bench.length < 12) bench.push("");
      if (bench.length > 12) bench.splice(12);

      // Verificar se newRotationLabels está presente e é válido
      const validRotationLabels =
        newRotationLabels && Object.keys(newRotationLabels).length > 0
          ? newRotationLabels
          : initialRotationLabels;

      return {
        team: {
          slots: { ...newTeam.slots },
          bench,
        },
        rotationLabels: validRotationLabels,
      };
    }),

  clearAllSlots: () =>
    set(() => {
      // Criar um novo time vazio
      const emptyTeam: Team = {
        slots: {
          S: null,
          MB1: null,
          WS1: null,
          L: null,
          WS2: null,
          MB2: null,
          OP: null,
        },
        bench: Array(12).fill(""),
      };

      return {
        team: emptyTeam,
        rotationLabels: initialRotationLabels,
      };
    }),

  rotatePositions: () =>
    set((state) => {
      // Definir a ordem de rotação em sentido horário (excluindo o libero)
      const rotationOrder: Position[] = ["S", "MB1", "WS1", "OP", "MB2", "WS2"];

      // Criar uma cópia dos slots atuais
      const currentSlots = { ...state.team.slots };

      // Salvar o valor do último slot para colocar no primeiro
      const lastPlayer = currentSlots[rotationOrder[rotationOrder.length - 1]];

      // Rotacionar os slots em sentido horário
      for (let i = rotationOrder.length - 1; i > 0; i--) {
        currentSlots[rotationOrder[i]] = currentSlots[rotationOrder[i - 1]];
      }

      // Colocar o último no primeiro
      currentSlots[rotationOrder[0]] = lastPlayer;

      // Também rotacionar os rótulos
      const currentLabels = { ...state.rotationLabels };
      const lastLabel = currentLabels[rotationOrder[rotationOrder.length - 1]];

      // Rotacionar os rótulos em sentido horário
      for (let i = rotationOrder.length - 1; i > 0; i--) {
        currentLabels[rotationOrder[i]] = currentLabels[rotationOrder[i - 1]];
      }

      // Colocar o último rótulo no primeiro
      currentLabels[rotationOrder[0]] = lastLabel;

      return {
        team: {
          ...state.team,
          slots: currentSlots,
        },
        rotationLabels: currentLabels,
      };
    }),

  clearPosition: (pos) =>
    set((s) => ({
      team: { ...s.team, slots: { ...s.team.slots, [pos]: null } },
    })),

  placePlayer: (pos, playerId) =>
    set((s) => {
      // Remove from wherever it is (slots and bench)
      const slots = { ...s.team.slots };
      for (const k in slots) {
        const key = k as Position;
        if (slots[key] === playerId) slots[key] = null;
      }
      const bench = ensureBenchSize(s.team.bench);
      const existingBenchIndex = bench.indexOf(playerId);
      if (existingBenchIndex >= 0) bench[existingBenchIndex] = "";

      slots[pos] = playerId;
      return { team: { slots, bench: ensureBenchSize(bench) } };
    }),

  moveToBench: (playerId, benchIndex) =>
    set((s) => {
      const slots = { ...s.team.slots };
      // Remove from wherever it is (slots and bench)
      for (const k in slots) {
        const key = k as Position;
        if (slots[key] === playerId) slots[key] = null;
      }
      const bench = ensureBenchSize(s.team.bench);
      // Remove from bench as well
      const existingBenchIndex = bench.indexOf(playerId);
      if (existingBenchIndex >= 0) bench[existingBenchIndex] = "";

      // if a specific spot provided, put there
      if (benchIndex !== undefined) {
        bench[benchIndex] = playerId;
      } else {
        const empty = bench.indexOf("");
        if (empty >= 0) bench[empty] = playerId;
        else bench[0] = playerId; // simple overwrite policy
      }
      return { team: { slots, bench: ensureBenchSize(bench) } };
    }),

  removeFromBench: (playerId) =>
    set((s) => {
      const bench = ensureBenchSize(s.team.bench);
      const idx = bench.indexOf(playerId);
      if (idx >= 0) bench[idx] = "";
      return { team: { ...s.team, bench } };
    }),

  pickPlayer: (playerId) => {
    const s = get();
    if (s.selectedSlot) {
      // Restrição: slot L só aceita jogador L
      if (s.selectedSlot === "L") {
        const p = s.players.find((p) => p.id === playerId);
        if (p && p.role !== "L") return;
      }
      // Restrição: jogador L só pode ser colocado no slot L
      else {
        const p = s.players.find((p) => p.id === playerId);
        if (p && p.role === "L") return;
      }
      s.placePlayer(s.selectedSlot, playerId);
      set({ selectedSlot: null, selectedBenchIndex: null });
      return;
    }
    if (s.selectedBenchIndex !== null) {
      s.moveToBench(playerId, s.selectedBenchIndex);
      set({ selectedSlot: null, selectedBenchIndex: null });
    }
  },

  onDragEnd: (e) => {
    const overId = e.over?.id as string | undefined;
    const activeId = String(e.active.id);
    if (!overId) return;
    // droppable ids: slot:P1.., bench:0..17, roster:<playerId>, roster-list
    if (overId.startsWith("slot:")) {
      const pos = overId.split(":")[1] as Position;
      const playerId = activeId.replace("player:", "");
      // Restrição: slot L só aceita jogador L
      if (pos === "L") {
        const p = get().players.find((p) => p.id === playerId);
        if (p && p.role !== "L") return;
      }
      // Restrição: jogador L só pode ser colocado no slot L
      else {
        const p = get().players.find((p) => p.id === playerId);
        if (p && p.role === "L") return;
      }
      get().placePlayer(pos, playerId);
      set({ selectedSlot: null, selectedBenchIndex: null });
    } else if (overId.startsWith("bench:")) {
      const idx = Number(overId.split(":")[1]);
      const playerId = activeId.replace("player:", "");
      get().moveToBench(playerId, idx);
      set({ selectedSlot: null, selectedBenchIndex: null });
    } else if (overId === "roster-list") {
      // Remover jogador do time e colocá-lo de volta na lista
      const playerId = activeId.replace("player:", "");
      const s = get();

      // Verificar se o jogador está em algum slot
      for (const [pos, pid] of Object.entries(s.team.slots)) {
        if (pid === playerId) {
          s.clearPosition(pos as any);
          set({ selectedSlot: null, selectedBenchIndex: null });
          break;
        }
      }

      // Verificar se o jogador está na lista de reservas
      const benchIndex = s.team.bench.indexOf(playerId);
      if (benchIndex >= 0) {
        s.removeFromBench(playerId);
        set({ selectedSlot: null, selectedBenchIndex: null });
      }
    }
    set({ activeDragId: null });
  },
  onDragStart: (e) => set({ activeDragId: String(e.active.id) }),
  onDragCancel: () => set({ activeDragId: null }),
  activeDragId: null,
}));

export function getPlayerById(id: string) {
  return useStore.getState().players.find((p) => p.id === id);
}
