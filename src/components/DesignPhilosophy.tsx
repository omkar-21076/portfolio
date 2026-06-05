import { Reveal } from "./Reveal";

export function DesignPhilosophy() {
  return (
    <section className="border-t border-border px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Philosophy
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="font-serif font-medium leading-[1.15] tracking-tight text-foreground text-[clamp(2rem,4.5vw,3.75rem)]">
            Designing minimal experiences for complex systems, reducing
            <span className="text-muted-foreground"> cognitive load </span>
            so people can focus on their work—not the tool.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
