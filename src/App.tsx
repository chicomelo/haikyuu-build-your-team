import "./index.css";
import {
  DndContext,
  DragOverlay,
  pointerWithin,
  rectIntersection,
  useSensor,
  useSensors,
  PointerSensor,
  TouchSensor,
} from "@dnd-kit/core";
import { useIsMobile } from "./lib/hooks/useMediaQuery";
import { CourtView } from "./components/CourtView";
import { RosterBar } from "./components/RosterBar";
import { TeamHeader } from "./components/TeamHeader";
import { BuffPanel } from "./components/BuffPanel";
import { useStore, getPlayerById } from "./state/store";
import { useEffect, useState } from "react";
import { decodeTeamFromQuery, clearTeamQuery } from "./services/share";
import { loadTeam, saveTeam } from "./services/storage";
import { DragPreview } from "./components/DragPreview";
import { PlayerInfoModal } from "./components/PlayerInfoModal";
import { MemoryModal } from "./components/MemoryModal";
import { MemoryCatalogPage } from "./components/MemoryCatalogPage";

// Algoritmo de detecção de colisão híbrido
function customCollisionDetection(args: any) {
  const pointerCollisions = pointerWithin(args);
  if (pointerCollisions.length > 0) {
    return pointerCollisions;
  }
  return rectIntersection(args);
}

function TeamBuilderView() {
  const onDragEnd = useStore((s) => s.onDragEnd);
  const onDragStart = useStore((s) => s.onDragStart);
  const onDragCancel = useStore((s) => s.onDragCancel);
  const activeId = useStore((s) => s.activeDragId);
  const isMobile = useIsMobile();
  const sensors = isMobile
    ? useSensors(
        useSensor(TouchSensor, {
          activationConstraint: {
            delay: 80,
            tolerance: 8,
          },
        }),
      )
    : useSensors(
        useSensor(PointerSensor, {
          activationConstraint: {
            distance: 4,
          },
        }),
      );

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
      onDragCancel={onDragCancel}
      collisionDetection={customCollisionDetection}
    >
      <main className="flex-1">
        <div className="mx-auto max-w-[1600px] relative">
          <BuffPanel />
          <CourtView />
        </div>
      </main>
      <RosterBar />
      <DragOverlay dropAnimation={null}>
        {(() => {
          const pid = activeId?.startsWith("player:")
            ? activeId.slice(7)
            : undefined;
          const p = pid ? getPlayerById(pid) : undefined;
          return p ? <DragPreview p={p} /> : null;
        })()}
      </DragOverlay>
    </DndContext>
  );
}

function App() {
  const [viewMode, setViewMode] = useState<"team" | "memories">("team");
  const team = useStore((s) => s.team);
  const rotationLabels = useStore((s) => s.rotationLabels);
  const loadTeamState = useStore((s) => s.loadTeam);

  useEffect(() => {
    const fromUrl = decodeTeamFromQuery();
    const fromLocal = loadTeam();
    const data = fromUrl || fromLocal;

    if (data) {
      loadTeamState(data.team, data.rotationLabels);
    }

    if (fromUrl) {
      setTimeout(() => {
        clearTeamQuery();
      }, 100);
    }
  }, [loadTeamState]);

  useEffect(() => {
    saveTeam(team, rotationLabels);
  }, [team, rotationLabels]);

  return (
    <div className="min-h-dvh flex flex-col">
      <TeamHeader viewMode={viewMode} onChangeView={setViewMode} />
      {viewMode === "team" ? <TeamBuilderView /> : <MemoryCatalogPage />}
      <PlayerInfoModal />
      <MemoryModal />
    </div>
  );
}

export default App;
