import { useDroppable, useDraggable } from "@dnd-kit/core";
import type { Position } from "../lib/types";
import { getPlayerById, useStore } from "../state/store";
import { useTranslation } from "react-i18next";
import { GripVertical, Info } from "lucide-react";

type Props = { pos: Position; label?: string };

export function Slot({ pos, label }: Props) {
  const { t } = useTranslation();
  const id = `slot:${pos}`;
  const { isOver, setNodeRef } = useDroppable({ id });
  const playerId = useStore((s) => s.team.slots[pos]);
  const setType = useStore((s) => s.setSelectedType);
  const selectSlot = useStore((s) => s.selectSlot);
  const selected = useStore((s) => s.selectedSlot) === pos;
  const activeDragId = useStore((s) => s.activeDragId);
  const player = playerId ? getPlayerById(playerId) : null;
  const openPlayerModal = useStore((s) => s.openPlayerModal);
  const {
    attributes,
    listeners,
    setNodeRef: setDragRef,
    transform,
    isDragging,
  } = useDraggable(
    player ? { id: `player:${player.id}` } : { id: `slot:${pos}-empty` }
  );
  const dragStyle = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  // Verificar se hÃ¡ um jogador sendo arrastado
  const isPlayerBeingDragged =
    activeDragId && activeDragId.startsWith("player:");

  // Verificar se o jogador sendo arrastado Ã© um L (Libero)
  const draggedPlayer = isPlayerBeingDragged
    ? getPlayerById(activeDragId.replace("player:", ""))
    : null;
  const isDraggedPlayerLibero = draggedPlayer?.role === "L";

  // Verificar se o slot Ã© vÃ¡lido para o jogador sendo arrastado
  const isSlotValidForPlayer =
    (pos === "L" && isDraggedPlayerLibero) ||
    (pos !== "L" && !isDraggedPlayerLibero) ||
    !isPlayerBeingDragged;

  // Usar o label fornecido ou o padrÃ£o
  const displayLabel = label !== undefined ? label : labelFor(pos);

  return (
    <div ref={setNodeRef} className="slot-card absolute">
      <button
        onClick={() => {
          setType(
            pos === "MB1" || pos === "MB2"
              ? "MB"
              : pos === "WS1" || pos === "WS2"
              ? "WS"
              : pos
          );
          selectSlot(pos);
        }}
        ref={player && !isDragging ? setDragRef : undefined}
        {...(player && !isDragging ? { ...listeners, ...attributes } : {})}
        onContextMenu={(e) => e.preventDefault()}
        style={{
          ...(player && !isDragging ? dragStyle : undefined),
          aspectRatio: "71/100",
          touchAction: "none",
        }}
        className={`w-20 md:w-24 2xl:w-36 rounded-lg border-2 grid place-items-center bg-black/30 backdrop-blur-sm overflow-hidden dnd-draggable ${
          isOver && isPlayerBeingDragged && isSlotValidForPlayer
            ? "border-cyan-400 bg-cyan-900/20"
            : isOver && isPlayerBeingDragged && !isSlotValidForPlayer
            ? "border-red-500 bg-red-900/20"
            : isOver
            ? "border-teal-400"
            : selected
            ? "border-white"
            : "border-white/40"
        }  ${isDragging ? "opacity-60" : ""}
        ${pos === "L" ? "border-dashed" : ""}`}
      >
        {player && !isDragging ? (
          <div className="w-full h-full relative">
            <div className="md:hidden absolute top-1 left-1 z-10 inline-flex items-center justify-center w-6 h-6 rounded bg-black/40 text-white/80">
              <GripVertical size={14} />
            </div>
            {player.avatar ? (
              <img
                src={player.avatar}
                alt={player.name}
                className="absolute inset-0 w-full h-full object-contain"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-700/50 to-neutral-900/60" />
            )}
            {/* Info button for starters */}
            <button
              type="button"
              className="absolute top-1 right-1 z-10 inline-flex items-center justify-center w-6 h-6 rounded bg-black/70 text-white/80 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                if (player) openPlayerModal(player.id);
              }}
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              aria-label="Open player info"
            >
              <Info size={14} />
            </button>
            <div className="absolute bottom-0 left-0 w-full bg-black/70 py-0 md:py-1 flex items-center justify-center">
              <div className="font-semibold text-xs leading-4">
                {player.name}
              </div>
            </div>
          </div>
        ) : isOver && isPlayerBeingDragged && isSlotValidForPlayer ? (
          <div className="text-center text-cyan-400/90 p-2">
            <div className="font-semibold text-xs md:text-sm">
              {t("slots.drop_here")}
            </div>
            <div className="text-xs opacity-80">
              {t("slots.drop_here_description")}
            </div>
          </div>
        ) : isOver && isPlayerBeingDragged && !isSlotValidForPlayer ? (
          <div className="text-center text-red-400/90 p-2">
            {" "}
            <div className="font-semibold text-sm">
              {t("slots.invalid_position")}
            </div>
            <div className="text-xs opacity-80">
              {t("slots.libero_position_only")}
            </div>
          </div>
        ) : (
          <div className="text-3xl text-white/80 select-none">+</div>
        )}
      </button>
      <div className="text-center text-xs mt-2 opacity-80">{displayLabel}</div>
    </div>
  );
}

function labelFor(pos: Position) {
  if (pos === "MB1" || pos === "MB2") return "MB";
  if (pos === "WS1" || pos === "WS2") return "WS";
  return pos;
}
