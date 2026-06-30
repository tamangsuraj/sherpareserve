"use client";

/**
 * Topographic contour system — the brand's signature motif.
 * Concentric irregular elevation rings around a peak, drawn as a survey map
 * would render the Himalaya. Used as ambient texture, dividers and card grounds.
 */

const SIZE = 480;
const CX = 248;
const CY = 232;

// Per-ring radial perturbations (fixed seed → deterministic, SSR-safe).
const SEED = [1.0, 0.86, 1.08, 0.92, 1.12, 0.9, 1.05, 0.95, 1.1, 0.88, 1.04, 0.97];

function ringPath(radius: number, squash = 0.74): string {
  const points = SEED.length;
  const coords: [number, number][] = [];
  for (let i = 0; i < points; i++) {
    const angle = (i / points) * Math.PI * 2;
    const r = radius * SEED[i];
    const x = CX + Math.cos(angle) * r;
    const y = CY + Math.sin(angle) * r * squash;
    coords.push([x, y]);
  }
  // Smooth closed Catmull-Rom → cubic bezier
  let d = `M ${coords[0][0].toFixed(1)} ${coords[0][1].toFixed(1)}`;
  for (let i = 0; i < points; i++) {
    const p0 = coords[(i - 1 + points) % points];
    const p1 = coords[i];
    const p2 = coords[(i + 1) % points];
    const p3 = coords[(i + 2) % points];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d + " Z";
}

const RINGS = [34, 64, 96, 130, 166, 204, 244, 286];

export function Topography({
  className = "",
  animate = false,
  rings = RINGS.length,
  color = "currentColor",
}: {
  className?: string;
  animate?: boolean;
  rings?: number;
  color?: string;
}) {
  const shown = RINGS.slice(0, rings);
  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ color }}
    >
      <g stroke="currentColor" strokeWidth={1} vectorEffect="non-scaling-stroke">
        {shown.map((r, i) => {
          const len = Math.round(r * 6.4);
          return (
            <path
              key={r}
              d={ringPath(r)}
              className={animate ? "draw-on" : undefined}
              style={
                animate
                  ? ({
                      ["--len" as string]: len,
                      animationDelay: `${0.15 * i + 0.2}s`,
                      opacity: 0.35 + i * 0.07,
                    } as React.CSSProperties)
                  : { opacity: 0.3 + i * 0.06 }
              }
            />
          );
        })}
        {/* Peak marker */}
        <g
          className={animate ? "draw-on" : undefined}
          style={
            animate
              ? ({ ["--len" as string]: 40, animationDelay: "1.5s" } as React.CSSProperties)
              : undefined
          }
        >
          <path d={`M ${CX - 14} ${CY + 8} L ${CX} ${CY - 18} L ${CX + 14} ${CY + 8}`} />
        </g>
      </g>
    </svg>
  );
}

/** A horizontal contour fragment used as a section divider. */
export function ContourDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-6 text-gold/45 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-20 bg-gradient-to-r from-transparent to-gold/35 sm:w-36" />
      <svg viewBox="0 0 80 28" fill="none" className="w-16 shrink-0">
        <g stroke="currentColor" strokeWidth="1" strokeLinecap="round">
          <path d="M4 22 C 22 22, 28 8, 40 8 C 52 8, 58 22, 76 22" opacity="0.5" />
          <path d="M16 22 C 28 22, 32 13, 40 13 C 48 13, 52 22, 64 22" opacity="0.75" />
          <path d="M36 14 L40 9 L44 14" opacity="0.9" />
        </g>
      </svg>
      <span className="h-px w-20 bg-gradient-to-l from-transparent to-gold/35 sm:w-36" />
    </div>
  );
}
