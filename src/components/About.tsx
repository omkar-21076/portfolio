import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-border px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_320px]">
        <div>
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Three years designing enterprise software with a bias toward
              <span className="italic"> clarity</span>,
              <span className="italic"> consistency</span>, and
              <span className="italic"> accessibility</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              I focus on minimal design that reduces cognitive load — fewer decisions,
              clearer hierarchy, and consistent patterns. My work spans complex internal
              tools where good UX quietly removes hours of friction from people's day.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <dl className="space-y-4 border-t border-border pt-6 text-sm md:border-l md:border-t-0 md:pl-8 md:pt-0">
            {[
              ["Role", "UX Designer"],
              ["Company", "Siemens Healthineers"],
              ["Focus", "Enterprise · Accessibility"],
              ["Experience", "3 years"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="text-right text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
