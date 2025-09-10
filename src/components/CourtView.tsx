import { Slot } from "./Slot";
import { ClearAllButton } from "./ClearAllButton";
import { useStore } from "../state/store";
import type { Position } from "../lib/types";

// Positions anchored by percentage over the court background
// Using 16:9 full background; adjust anchors for the new image
const POSITIONS = [
  { pos: "S", x: 38, y: 24 },
  { pos: "MB1", x: 50, y: 24 },
  { pos: "WS1", x: 62, y: 24 },
  { pos: "L", x: 32, y: 62 },
  { pos: "WS2", x: 44, y: 62 },
  { pos: "MB2", x: 56, y: 62 },
  { pos: "OP", x: 68, y: 62 },
] as const;

export function CourtView() {
  const rotationLabels = useStore((s) => s.rotationLabels);

  return (
    <section className="relative w-full min-h-[70vh]">
      <div className="absolute inset-0">
        {POSITIONS.map((p) => (
          <Slot
            key={p.pos}
            pos={p.pos as any}
            x={p.x}
            y={p.y}
            label={rotationLabels[p.pos as Position]}
          />
        ))}
        <Bench />
        <ClearAllButton />
      </div>
    </section>
  );
}

import { Bench } from "./bench/Bench";
