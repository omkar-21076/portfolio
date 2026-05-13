import { Reveal } from "./Reveal";

const tiles = Array.from({ length: 8 }, (_, i) => i + 1);

export function Visuals() {
  return (
    <section id="visuals" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Visuals</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-4xl md:text-5xl">Things I've made</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 max-w-xl text-muted-foreground">
            A continuous scroll of recent visual explorations. Hover to pause.
          </p>
        </Reveal>
      </div>

      <div className="marquee-wrapper mt-14 overflow-hidden" aria-label="Visual gallery, continuous horizontal scroll">
        <div className="marquee-track flex w-max gap-5">
          {[...tiles, ...tiles].map((t, i) => (
            <div
              key={i}
              className="flex h-64 w-80 shrink-0 items-center justify-center rounded-lg border border-border bg-card md:h-80 md:w-[420px]"
              aria-hidden={i >= tiles.length}
            >
              <span className="font-serif text-5xl text-muted-foreground/50">0{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
