import { useDroppable, useDraggable } from "@dnd-kit/core";
import { useStore, getPlayerById } from "../../state/store";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "../../lib/hooks/useMediaQuery";
import { GripVertical } from "lucide-react";

function BenchSlot({ index }: { index: number }) {
  const { t } = useTranslation();
  const id = `bench:${index}`;
  const { isOver, setNodeRef } = useDroppable({ id });
  const pid = useStore((s) => s.team.bench[index] || "");
  const setType = useStore((s) => s.setSelectedType);
  const selectBench = useStore((s) => s.selectBench);
  const selectedBench = useStore((s) => s.selectedBenchIndex);
  const activeDragId = useStore((s) => s.activeDragId);
  const player = pid ? getPlayerById(pid) : null;
  const {
    attributes,
    listeners,
    setNodeRef: setDragRef,
    transform,
    isDragging,
  } = useDraggable(
    player ? { id: `player:${player.id}` } : { id: `bench-empty-${index}` }
  );
  const isMobile = useIsMobile();
  const dragStyle: any = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : {};
  dragStyle.touchAction = isDragging ? "none" : "auto";

  // Verificar se há um jogador sendo arrastado
  const isPlayerBeingDragged =
    activeDragId && activeDragId.startsWith("player:");

  // Verificar se o jogador sendo arrastado é um L (Libero)
  // const draggedPlayer = isPlayerBeingDragged
  //   ? getPlayerById(activeDragId.replace('player:', ''))
  //   : null;
  // const isDraggedPlayerLibero = draggedPlayer?.role === 'L'; // Comentado pois não está sendo usado no momento

  return (
    <button
      onClick={() => {
        setType("all");
        selectBench(index);
      }}
      ref={setNodeRef}
      className={`bench-card ${
        isOver && isPlayerBeingDragged
          ? "border-cyan-400 bg-cyan-900/20"
          : isOver
          ? "border-teal-400"
          : selectedBench === index
          ? "border-white"
          : "border-white/20"
      } grid place-items-center bg-black/30 overflow-hidden`}
    >
      {player && !isDragging ? (
        <div className="relative w-full h-full">
          {isMobile && (
            <div
              className="absolute top-1 left-1 z-10 inline-flex items-center justify-center w-5 h-5 rounded bg-black/40 text-white/80 hover:text-white cursor-grab active:cursor-grabbing drag-handle md:hidden"
              {...listeners}
              {...attributes}
              aria-label="Drag handle"
            >
              <GripVertical size={12} />
            </div>
          )}
          {player.avatar ? (
            <img
              ref={setDragRef as any}
              {...listeners}
              {...attributes}
              style={dragStyle}
              src={player.avatar}
              alt={player.name}
              className={`w-full h-full object-contain ${
                isDragging ? "opacity-60" : ""
              }`}
              draggable={false}
            />
          ) : (
            <div
              ref={setDragRef as any}
              {...listeners}
              {...attributes}
              style={dragStyle}
              className="text-xs"
            >
              {player.name}
            </div>
          )}
        </div>
      ) : isOver && isPlayerBeingDragged ? (
        <div className="text-center text-cyan-400/90 p-1">
          <div className="text-xs font-semibold">{t("slots.drop_here")}</div>
          {/* <div className="text-[10px] opacity-80">{t("slots.drop_here_description")}</div> */}
        </div>
      ) : (
        <div className="text-xl text-white/60">+</div>
      )}
    </button>
  );
}

export function Bench() {
  const { t } = useTranslation();
  return (
    <div className="bench-list-wrapper">
      <div className="bench-list">
        {Array.from({ length: 12 }).map((_, i) => (
          <BenchSlot key={i} index={i} />
        ))}
      </div>
      <div className="mt-1 text-center text-sm opacity-80">{t("bench")}</div>
    </div>
  );
}
