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
              Creating enterprise experiences that reduce
              <span className="text-muted-foreground"> cognitive load</span> and improve
              <span className="text-muted-foreground"> decision making</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              I design enterprise products used in complex environments where every
              decision carries effort. My focus is on reducing cognitive load through
              clear information hierarchy, consistent patterns, and accessible
              interactions—helping people complete tasks with greater confidence and
              efficiency.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <dl className="space-y-4 border-t border-border pt-6 text-sm md:border-l md:border-t-0 md:pl-8 md:pt-0">
            {[
              ["Role", "UX Designer"],
              ["Company", "Siemens Healthineers"],
              ["Domain", "Healthcare · Enterprise"],
              ["Focus", "Clarity · Accessibility"],
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
