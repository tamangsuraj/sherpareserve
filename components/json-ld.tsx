/**
 * Renders a JSON-LD structured-data block. Schema.org markup is the strongest
 * single signal for Google rich results and for being cited in AI Overviews /
 * AI answer engines, which lean heavily on machine-readable entity data.
 *
 * Server component — safe to drop into any page. Pass a single schema object or
 * an array of objects (rendered as a @graph-style list of <script> tags).
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify output is safe; no user input is interpolated.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
