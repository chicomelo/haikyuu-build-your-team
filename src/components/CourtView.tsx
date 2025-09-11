import { Slot } from "./Slot";
import { ClearAllButton } from "./ClearAllButton";
import { useStore } from "../state/store";
import type { Position } from "../lib/types";

// Positions anchored by percentage over the court background
// Using 16:9 full background; adjust anchors for the new image
const POSITIONS = [
  { pos: "S" },
  { pos: "MB1" },
  { pos: "WS1" },
  { pos: "L" },
  { pos: "WS2" },
  { pos: "MB2" },
  { pos: "OP" },
] as const;

export function CourtView() {
  const rotationLabels = useStore((s) => s.rotationLabels);

  return (
    <section className="slot-card-wrapper">
      {POSITIONS.map((p) => (
        <Slot
          key={p.pos}
          pos={p.pos as any}
          label={rotationLabels[p.pos as Position]}
        />
      ))}
      <Bench />
      <ClearAllButton />
    </section>
  );
}

import { Bench } from "./bench/Bench";
