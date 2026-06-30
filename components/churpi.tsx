"use client";

import { useId } from "react";

type Variant = "small" | "medium" | "large";

const DIMS: Record<Variant, { len: number; thick: number }> = {
  small: { len: 148, thick: 50 },
  medium: { len: 208, thick: 56 },
  large: { len: 252, thick: 66 },
};

/**
 * Custom-illustrated churpi chew bar — the actual product.
 * A cured, smoke-dried cheese baton: amber-cream body lit from above, one
 * rounded original end and one sliced face that reveals the ageing rings
 * (a nod to the brand's topographic contour motif). SVG so it stays crisp
 * and weightless on the free tier.
 */
export function ChurpiBar({
  variant = "medium",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const raw = useId().replace(/[:]/g, "");
  const { len, thick } = DIMS[variant];

  const padX = 28;
  const padTop = 16;
  const padBottom = 44;
  const W = len + padX * 2;
  const H = thick + padTop + padBottom;

  const xL = padX;
  const xR = padX + len;
  const yT = padTop;
  const yB = padTop + thick;
  const midY = (yT + yB) / 2;
  const rc = thick * 0.48;

  const body = `M ${xR} ${yT} H ${xL + rc} Q ${xL} ${yT} ${xL} ${yT + rc} V ${yB - rc} Q ${xL} ${yB} ${xL + rc} ${yB} H ${xR} Z`;

  const cutRx = thick * 0.2;
  const halfH = thick / 2;

  // Deterministic surface mottling (smoke char), as body fractions.
  const speckles: [number, number, number][] = [
    [0.22, 0.34, 0.05],
    [0.36, 0.64, 0.045],
    [0.5, 0.28, 0.055],
    [0.58, 0.7, 0.04],
    [0.68, 0.46, 0.05],
    [0.3, 0.8, 0.04],
    [0.44, 0.18, 0.038],
    [0.62, 0.58, 0.035],
  ];

  const g = (s: string) => `${raw}-${s}`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      role="img"
      aria-label="The Original Chew — a cured Himalayan churpi bar"
    >
      <defs>
        {/* Cylindrical body shading, lit from above */}
        <linearGradient id={g("body")} x1="0" y1={yT} x2="0" y2={yB} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F3E6C6" />
          <stop offset="0.28" stopColor="#E4C88E" />
          <stop offset="0.62" stopColor="#CB9C5C" />
          <stop offset="1" stopColor="#9C6E38" />
        </linearGradient>
        {/* Cross-section of the sliced end */}
        <radialGradient id={g("cut")} cx="0.42" cy="0.4" r="0.75">
          <stop offset="0" stopColor="#F4E8CC" />
          <stop offset="0.7" stopColor="#D7B377" />
          <stop offset="1" stopColor="#B07F40" />
        </radialGradient>
        {/* Top sheen */}
        <linearGradient id={g("sheen")} x1="0" y1={yT} x2="0" y2={midY} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFF8E8" stopOpacity="0.55" />
          <stop offset="1" stopColor="#FFF8E8" stopOpacity="0" />
        </linearGradient>
        {/* Contact shadow */}
        <radialGradient id={g("shadow")} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#000000" stopOpacity="0.42" />
          <stop offset="1" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <clipPath id={g("clip")}>
          <path d={body} />
        </clipPath>
      </defs>

      {/* Contact shadow */}
      <ellipse
        cx={(xL + xR) / 2 + 6}
        cy={yB + 16}
        rx={len * 0.47}
        ry={9}
        fill={`url(#${g("shadow")})`}
      />

      {/* Body */}
      <path d={body} fill={`url(#${g("body")})`} stroke="#7C5A30" strokeOpacity="0.3" strokeWidth="1" />

      {/* Surface detail, clipped to the bar */}
      <g clipPath={`url(#${g("clip")})`}>
        {/* sheen band */}
        <ellipse cx={(xL + xR) / 2} cy={yT + thick * 0.26} rx={len * 0.46} ry={thick * 0.2} fill={`url(#${g("sheen")})`} />
        {/* smoke mottling */}
        {speckles.map(([fx, fy, fr], i) => (
          <ellipse
            key={i}
            cx={xL + fx * len}
            cy={yT + fy * thick}
            rx={thick * fr}
            ry={thick * fr * 0.78}
            fill="#6E4C24"
            opacity={0.16}
          />
        ))}
        {/* craze lines */}
        <path d={`M ${xL + len * 0.3} ${yT + 4} q 6 ${thick * 0.5} -2 ${thick - 8}`} stroke="#7A552A" strokeOpacity="0.18" strokeWidth="1" fill="none" />
        <path d={`M ${xL + len * 0.66} ${yT + 6} q -5 ${thick * 0.4} 3 ${thick - 10}`} stroke="#7A552A" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      </g>

      {/* Sliced end face with ageing rings */}
      <g>
        <ellipse cx={xR} cy={midY} rx={cutRx} ry={halfH} fill={`url(#${g("cut")})`} stroke="#8A6230" strokeOpacity="0.5" strokeWidth="1" />
        {[0.66, 0.36].map((k) => (
          <ellipse
            key={k}
            cx={xR + 1}
            cy={midY}
            rx={cutRx * k}
            ry={halfH * k}
            fill="none"
            stroke="#9C6E38"
            strokeOpacity="0.45"
            strokeWidth="0.9"
          />
        ))}
        <ellipse cx={xR - cutRx * 0.3} cy={midY - halfH * 0.42} rx={cutRx * 0.35} ry={halfH * 0.28} fill="#FFF8E8" opacity="0.4" />
      </g>
    </svg>
  );
}
