/** Provenance data used across the certificate / label framing. */
export const BRAND = {
  established: "MMXIV",
  origin: "Solukhumbu, Nepal",
  coordinates: "27°59′N · 86°55′E",
  elevation: "3,440 M",
  batch: "No. 014",
  curedDays: "21",
} as const;

/** Per-tier survey data shown on the spec-label cards. */
export const PRODUCT_SPEC: Record<
  string,
  { ref: string; netWeight: string; hardness: string }
> = {
  small: { ref: "SR·01", netWeight: "30–45 g", hardness: "VII / X" },
  medium: { ref: "SR·02", netWeight: "70–110 g", hardness: "VIII / X" },
  large: { ref: "SR·03", netWeight: "120–200 g", hardness: "IX / X" },
};
