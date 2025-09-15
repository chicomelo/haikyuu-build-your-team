import { useDraggable } from "@dnd-kit/core";
import { GripVertical } from "lucide-react";
import type { Player } from "../lib/types";

export function PlayerCard({ p, compact }: { p: Player; compact?: boolean }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: `player:${p.id}` });
  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : ({} as React.CSSProperties);
  (style as any).touchAction = isDragging ? "none" : "auto";

  // Proporção correta das imagens: 178x250 (aproximadamente 0.71 ou 71:100)
  const aspectRatioClass = compact ? "aspect-[71/100]" : "aspect-[71/100]";
  const widthClass = compact ? "w-[72px] md:w-[96px]" : "w-[120px]";

  return (
    <button
      ref={setNodeRef}
      style={style}
      className={`card cursor-grab active:cursor-grabbing select-none overflow-hidden dnd-draggable ${widthClass} ${
        isDragging ? "opacity-60" : ""
      }`}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className={`w-full ${aspectRatioClass} bg-neutral-800 relative`}>
        {/* Drag handle: somente ele inicia o drag */}
        <div
          className="absolute top-1 left-1 z-10 inline-flex items-center justify-center w-6 h-6 rounded bg-black/40 text-white/80 hover:text-white cursor-grab active:cursor-grabbing drag-handle"
          {...listeners}
          {...attributes}
          aria-label="Drag handle"
        >
          <GripVertical size={14} />
        </div>
        {p.avatar ? (
          <img
            src={p.avatar}
            alt={p.name}
            className="absolute inset-0 w-full h-full object-contain"
            draggable={false}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-xs opacity-70">
            {p.name}
          </div>
        )}
        {/* Nome sobre a imagem, similar aos slots do time principal */}
        <div className="absolute bottom-0 left-0 right-0 text-center text-xs bg-black/70 py-1">
          <div className="font-semibold truncate">{p.name}</div>
          <div className="text-[10px] opacity-80">{p.role}</div>
        </div>
      </div>
    </button>
  );
}
