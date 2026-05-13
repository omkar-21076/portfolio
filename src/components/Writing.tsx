import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

type Tile = {
  source: "Medium" | "LinkedIn";
  title: string;
  date: string;
  href: string;
  className: string;
};

const tiles: Tile[] = [
  {
    source: "Medium",
    title: "Designing for cognitive load: less to remember, more to do",
    date: "Mar 2025",
    href: "#",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    source: "LinkedIn",
    title: "Why accessibility is the default, not the addition",
    date: "Feb 2025",
    href: "#",
    className: "md:col-span-2",
  },
  {
    source: "Medium",
    title: "Patterns that make enterprise UI feel calm",
    date: "Jan 2025",
    href: "#",
    className: "md:col-span-2",
  },
  {
    source: "LinkedIn",
    title: "A tiny note on consistency",
    date: "Dec 2024",
    href: "#",
    className: "",
  },
  {
    source: "LinkedIn",
    title: "Forms are a conversation",
    date: "Nov 2024",
    href: "#",
    className: "",
  },
  {
    source: "Medium",
    title: "From Figma to ship: handoff that respects engineering",
    date: "Oct 2024",
    href: "#",
    className: "md:col-span-2",
  },
];

export function Writing() {
  return (
    <section id="writing" className="border-t border-border px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Design thoughts</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-4xl md:text-5xl">Articles &amp; posts</h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:auto-rows-[180px] md:grid-cols-4">
          {tiles.map((t, i) => (
            <Reveal key={i} delay={i * 0.04} className={t.className}>
              <a
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-lg border border-border bg-card p-6 transition-colors hover:bg-secondary"
              >
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="rounded-full border border-border px-2 py-0.5">{t.source}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl leading-snug md:text-2xl">{t.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{t.date}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
