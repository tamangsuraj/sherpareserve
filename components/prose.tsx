import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import type { Block } from "@/lib/blog";

/**
 * Minimal, safe inline parser for blog copy. Supports **bold** and
 * [label](/path) links only — no raw HTML, so there's no injection surface.
 * Internal links use next/link; external links open in a new tab.
 */
function renderInline(text: string): ReactNode[] {
  // Split on markdown links first, then handle bold within each segment.
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  const pushBold = (segment: string) => {
    const parts = segment.split(/\*\*(.+?)\*\*/g);
    parts.forEach((part, i) =>
      nodes.push(
        i % 2 === 1 ? (
          <strong key={`b-${key++}`} className="font-semibold text-bone">
            {part}
          </strong>
        ) : (
          <Fragment key={`t-${key++}`}>{part}</Fragment>
        ),
      ),
    );
  };

  while ((match = linkRe.exec(text)) !== null) {
    pushBold(text.slice(last, match.index));
    const [, label, href] = match;
    const internal = href.startsWith("/");
    nodes.push(
      internal ? (
        <Link key={`l-${key++}`} href={href} className="text-gold underline-offset-4 hover:underline">
          {label}
        </Link>
      ) : (
        <a
          key={`l-${key++}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline-offset-4 hover:underline"
        >
          {label}
        </a>
      ),
    );
    last = match.index + match[0].length;
  }
  pushBold(text.slice(last));
  return nodes;
}

export function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="display-line mt-12 text-2xl text-bone sm:text-3xl"
              >
                {renderInline(block.text)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-8 font-serif text-xl text-bone sm:text-2xl">
                {renderInline(block.text)}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-3 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-lg leading-relaxed text-bone/70">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-4 text-lg leading-relaxed text-bone/70">
                    <span className="data mt-1 shrink-0 text-gold">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-2 border-gold/50 pl-6 font-serif text-2xl font-light italic leading-snug text-bone/90"
              >
                {renderInline(block.text)}
              </blockquote>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="rounded-2xl border border-gold/20 bg-forest-soft/30 px-7 py-6"
              >
                {block.title && (
                  <p className="eyebrow mb-2">{block.title}</p>
                )}
                <p className="text-lg leading-relaxed text-bone/75">
                  {renderInline(block.text)}
                </p>
              </aside>
            );
          default:
            return (
              <p key={i} className="text-lg leading-relaxed text-bone/70">
                {renderInline(block.text)}
              </p>
            );
        }
      })}
    </div>
  );
}
