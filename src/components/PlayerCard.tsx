import { useDraggable } from "@dnd-kit/core";
import type { Player } from "../lib/types";

export function PlayerCard({ p, compact }: { p: Player; compact?: boolean }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: `player:${p.id}` });
  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  // Proporção correta das imagens: 178x250 (aproximadamente 0.71 ou 71:100)
  const aspectRatioClass = compact ? "aspect-[71/100]" : "aspect-[71/100]";
  const widthClass = compact ? "w-[96px]" : "w-[120px]";

  return (
    <button
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={`card cursor-grab active:cursor-grabbing select-none overflow-hidden ${widthClass} ${
        isDragging ? "opacity-60" : ""
      }`}
    >
      <div className={`w-full ${aspectRatioClass} bg-neutral-800 relative`}>
        {p.avatar ? (
          <img
            src={p.avatar}
            alt={p.name}
            className="absolute inset-0 w-full h-full object-contain"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-xs opacity-70">
            {p.name}
          </div>
        )}
        {/* Nome sobre a imagem, similar aos slots do time principal */}
        <div className="absolute bottom-0 left-0 right-0 text-center text-xs bg-black/70 py-1">
          <div className="font-semibold leading-none truncate">{p.name}</div>
          <div className="text-[10px] opacity-80">{p.role}</div>
        </div>
      </div>
    </button>
  );
}
