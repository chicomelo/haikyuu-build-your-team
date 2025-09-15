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
import { useStore } from "./state/store";
import { useEffect } from "react";
import { decodeTeamFromQuery, clearTeamQuery } from "./services/share";
import { loadTeam, saveTeam } from "./services/storage";
import { DragPreview } from "./components/DragPreview";
import { getPlayerById } from "./state/store";

// Algoritmo de detecção de colisão híbrido
function customCollisionDetection(args: any) {
  // Primeiro tenta pointerWithin para precisão máxima
  const pointerCollisions = pointerWithin(args);

  // Se não encontrar colisões com pointerWithin, tenta rectIntersection como fallback
  if (pointerCollisions.length > 0) {
    return pointerCollisions;
  }

  return rectIntersection(args);
}

function App() {
  const onDragEnd = useStore((s) => s.onDragEnd);
  const onDragStart = useStore((s) => s.onDragStart);
  const onDragCancel = useStore((s) => s.onDragCancel);
  const activeId = useStore((s) => s.activeDragId);
  const team = useStore((s) => s.team);
  const rotationLabels = useStore((s) => s.rotationLabels);
  const loadTeamState = useStore((s) => s.loadTeam);

  // load from URL or localStorage on first render
  useEffect(() => {
    const fromUrl = decodeTeamFromQuery();
    const fromLocal = loadTeam();

    // Priorizar dados da URL se disponíveis
    const data = fromUrl || fromLocal;

    if (data) {
      // place players according to saved team
      loadTeamState(data.team, data.rotationLabels);
    }

    // Adicionar um pequeno atraso antes de limpar a query para garantir que os dados foram carregados
    if (fromUrl) {
      setTimeout(() => {
        clearTeamQuery();
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    saveTeam(team, rotationLabels);
  }, [team, rotationLabels]);

  const isMobile = useIsMobile();
  const sensors = isMobile
    ? useSensors(
        useSensor(TouchSensor, {
          activationConstraint: {
            delay: 160,
            tolerance: 8,
          },
        })
      )
    : useSensors(
        useSensor(PointerSensor, {
          activationConstraint: {
            distance: 4,
          },
        })
      );

  return (
    <div className="min-h-dvh flex flex-col">
      <TeamHeader />
      <DndContext
        sensors={sensors}
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        onDragCancel={onDragCancel}
        collisionDetection={customCollisionDetection}
      >
        {/* Área principal (abaixo do header e acima do roster) */}
        <main className="flex-1">
          <div className="mx-auto max-w-[1600px] relative ">
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
    </div>
  );
}

export default App;
