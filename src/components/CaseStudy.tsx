import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export type CaseStudyNav = {
  to: string;
  label: string;
};

export type CaseStudyScreen = {
  title: string;
  image: string;
  caption?: string;
};

export type CaseStudyProps = {
  number: string;
  name: string;
  tagline: string;
  heroImage: string;
  meta: {
    role: string;
    platform: string;
    timeline?: string;
    team?: string;
  };
  context: string;
  focusAreas?: string[];
  problem?: string;
  challenge?: string;
  goals?: string[];
  research?: { intro: string; insights: { quote: string; source: string }[] };
  flowImage?: string;
  explorationImages?: [string, string];
  screens?: CaseStudyScreen[];
  screensVariant?: "full" | "phone-grid";
  solution?: { text: string; image?: string };
  constraints?: string[];
  collaboration?: string;
  outcomes?: { value: string; label: string }[];
  accentOutcomes?: boolean;
  impact?: string[];
  reflection?: string;
  learnings?: string[];
  prev?: CaseStudyNav;
  next?: CaseStudyNav;
};

export function CaseStudy(p: CaseStudyProps) {
  const metaItems = [
    { k: "Role", v: p.meta.role },
    p.meta.timeline ? { k: "Timeline", v: p.meta.timeline } : null,
    p.meta.team ? { k: "Team", v: p.meta.team } : null,
    { k: "Platform", v: p.meta.platform },
  ].filter(Boolean) as { k: string; v: string }[];

  return (
    <article className="px-5 pb-24 pt-10 md:px-8 md:pb-32 md:pt-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
        </Reveal>

        {/* Hero */}
        <header className="mt-10">
          <Reveal>
            <p className="font-serif text-sm text-muted-foreground">{p.number}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-2 font-serif text-4xl md:text-6xl">{p.name}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{p.tagline}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 overflow-hidden rounded-lg border border-border">
              <img
                src={p.heroImage}
                alt={`${p.name} hero`}
                className="aspect-[16/9] w-full object-cover"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </Reveal>
        </header>

        {/* Meta strip */}
        <section
          className={`mt-14 grid gap-6 border-y border-border py-8 ${
            metaItems.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3"
          }`}
        >
          {metaItems.map((m) => (
            <div key={m.k}>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{m.k}</p>
              <p className="mt-2 text-sm">{m.v}</p>
            </div>
          ))}
        </section>

        {/* Focus areas */}
        {p.focusAreas && p.focusAreas.length > 0 && (
          <section className="mt-12">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Focus areas</p>
            </Reveal>
            <Reveal delay={0.05}>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.focusAreas.map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        )}

        {/* Context (+ optional problem) */}
        <section className="mt-20 grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl">Context</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="space-y-6">
              <p className="text-base leading-relaxed whitespace-pre-line">{p.context}</p>
              {p.problem && (
                <div className="rounded-lg border border-border bg-card p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Problem statement
                  </p>
                  <p className="mt-3 font-serif text-xl leading-snug">{p.problem}</p>
                </div>
              )}
            </div>
          </Reveal>
        </section>

        {/* Challenge */}
        {p.challenge && (
          <section className="mt-20 grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-4xl">Challenge</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-base leading-relaxed whitespace-pre-line">{p.challenge}</p>
            </Reveal>
          </section>
        )}

        {/* Goals */}
        {p.goals && p.goals.length > 0 && (
          <section className="mt-20 grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-4xl">Goals &amp; success metrics</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <ul className="space-y-3">
                {p.goals.map((g, i) => (
                  <li key={i} className="flex gap-3 text-base leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                    {g}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        )}

        {/* Research */}
        {p.research && (
          <section className="mt-20">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-4xl">Research</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-6 max-w-5xl space-y-4 text-base leading-relaxed">
                {p.research.intro.split(/\n\n+/).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {p.research.insights.map((i, idx) => (
                <Reveal key={idx} delay={0.05 * idx}>
                  <blockquote className="h-full rounded-lg border border-border bg-card p-6">
                    <p className="font-serif text-xl leading-snug">&ldquo;{i.quote}&rdquo;</p>
                    <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {i.source}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* IA / flow */}
        {p.flowImage && (
          <section className="mt-20">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-4xl">Information architecture</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
                A simplified flow that maps user intent to system response, removing
                detours and reducing the number of decisions at each step.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 overflow-hidden rounded-lg border border-border">
                <img src={p.flowImage} alt="User flow" className="aspect-[16/9] w-full object-cover" />
              </div>
            </Reveal>
          </section>
        )}

        {/* Explorations */}
        {p.explorationImages && (
          <section className="mt-20">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-4xl">Design explorations</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
                Several directions were tested before converging. Each option was
                evaluated against the core success metrics and validated with users.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {p.explorationImages.map((src, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <div className="overflow-hidden rounded-lg border border-border">
                    <img
                      src={src}
                      alt={`Exploration ${i + 1}`}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* Screens gallery */}
        {p.screens && p.screens.length > 0 && (
          <section className="mt-20">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-4xl">Key screens</h2>
            </Reveal>
            {p.screensVariant === "phone-grid" ? (
              <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
                {p.screens.map((s, i) => (
                  <Reveal key={i} delay={0.05 * i}>
                    <figure>
                      <div className="overflow-hidden rounded-lg border border-border bg-card">
                        <img
                          src={s.image}
                          alt={s.title}
                          className="aspect-[9/16] w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <figcaption className="mt-4">
                        <p className="font-serif text-base md:text-lg">{s.title}</p>
                        {s.caption && (
                          <p className="mt-1 max-w-2xl text-xs md:text-sm text-muted-foreground">{s.caption}</p>
                        )}
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="mt-10 space-y-12">
                {p.screens.map((s, i) => (
                  <Reveal key={i} delay={0.05 * i}>
                    <figure>
                      <div className="overflow-hidden rounded-lg border border-border bg-card">
                        <img
                          src={s.image}
                          alt={s.title}
                          className="w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <figcaption className="mt-4">
                        <p className="font-serif text-xl">{s.title}</p>
                        {s.caption && (
                          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{s.caption}</p>
                        )}
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Impact (qualitative) — placed after Key screens */}
        {p.impact && p.impact.length > 0 && (
          <section className="mt-20 grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-4xl">Impact</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <ul className="space-y-3">
                {p.impact.map((c, i) => (
                  <li key={i} className="flex gap-3 text-base leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        )}

        {/* Final solution */}
        {p.solution && (
          <section className="mt-20">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-4xl">Final solution</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-6 max-w-5xl space-y-4 text-base leading-relaxed">
                {p.solution.text.split(/\n\n+/).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>
            {p.solution.image && (
              <Reveal delay={0.1}>
                <div className="mt-10 overflow-hidden rounded-lg border border-border">
                  <img
                    src={p.solution.image}
                    alt="Final solution"
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
              </Reveal>
            )}
          </section>
        )}

        {/* Constraints */}
        {p.constraints && p.constraints.length > 0 && (
          <section className="mt-20 grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-4xl">Constraints</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <ul className="space-y-3">
                {p.constraints.map((c, i) => (
                  <li key={i} className="flex gap-3 text-base leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        )}

        {/* Collaboration */}
        {p.collaboration && (
          <section className="mt-20 grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-4xl">Collaboration &amp; delivery</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-base leading-relaxed whitespace-pre-line">{p.collaboration}</p>
            </Reveal>
          </section>
        )}

        {/* Outcomes (numeric) */}
        {p.outcomes && p.outcomes.length > 0 && (
          <section className="mt-20">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-4xl">Outcome &amp; impact</h2>
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {p.outcomes.map((o, i) => (
                <Reveal key={i} delay={0.05 * i} className="h-full">
                  <div className="h-full rounded-lg border border-border bg-card p-8">
                    <p className={`font-serif text-4xl md:text-5xl ${p.accentOutcomes ? "text-success" : ""}`}>{o.value}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{o.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* Reflection */}
        {p.reflection && (
          <section className="mt-20 grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-4xl">Reflection</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-base leading-relaxed">{p.reflection}</p>
            </Reveal>
          </section>
        )}

        {/* Learnings */}
        {p.learnings && p.learnings.length > 0 && (
          <section className="mt-20 grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-4xl">Learnings</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <ul className="space-y-3">
                {p.learnings.map((c, i) => (
                  <li key={i} className="flex gap-3 text-base leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        )}

        {/* Prev / Next */}
        <nav className="mt-24 flex flex-col gap-4 border-t border-border pt-10 md:flex-row md:items-center md:justify-between">
          {p.prev ? (
            <Link
              to={p.prev.to}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              <span>
                <span className="block text-xs uppercase tracking-[0.2em]">Previous</span>
                <span className="font-serif text-lg text-foreground">{p.prev.label}</span>
              </span>
            </Link>
          ) : <span />}
          {p.next ? (
            <Link
              to={p.next.to}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:text-right"
            >
              <span className="md:text-right">
                <span className="block text-xs uppercase tracking-[0.2em]">Next</span>
                <span className="font-serif text-lg text-foreground">{p.next.label}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          ) : <span />}
        </nav>
      </div>
    </article>
  );
}
