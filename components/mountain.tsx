import type { ReactNode } from "react";

/**
 * Compact mountain glyph — the seal mark used in the wordmark lock-up,
 * header and footer. Kept minimal; the topographic contour system carries
 * the larger expression of the motif.
 */
export function MountainMark({
  className = "",
  strokeWidth = 1.2,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 120 72"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 60 L42 16 L60 40 L76 22 L114 60" />
      <path d="M42 16 L35 27 M42 16 L49 27" className="opacity-55" />
      <path d="M76 22 L71 31 M76 22 L81 31" className="opacity-55" />
      <path d="M6 60 L114 60" className="opacity-40" />
    </svg>
  );
}

/**
 * Certificate corner ticks. Wraps content in a hairline label frame with
 * surveyed corner registration marks — the brand's "provenance label" device.
 */
export function LabelFrame({
  children,
  className = "",
  tone = "gold",
}: {
  children: ReactNode;
  className?: string;
  tone?: "gold" | "forest";
}) {
  const c = tone === "gold" ? "border-gold/30" : "border-forest/25";
  return (
    <div className={`relative ${className}`}>
      <span className={`pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t ${c}`} />
      <span className={`pointer-events-none absolute right-0 top-0 h-4 w-4 border-r border-t ${c}`} />
      <span className={`pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l ${c}`} />
      <span className={`pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r ${c}`} />
      {children}
    </div>
  );
}
