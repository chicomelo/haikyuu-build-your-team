import type { Player } from "../lib/types";

export function DragPreview({ p }: { p: Player }) {
  return (
    <div className="card overflow-hidden w-[64px] md:w-[96px]">
      <div className="w-full aspect-[71/100] bg-neutral-800 relative">
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
      </div>
    </div>
  );
}
