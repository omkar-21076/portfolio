import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    name: "Legal DMS",
    tagline: "Data Management System",
    description:
      "An in-house legal data management system with an Outlook add-in that lets teams file legal matters directly from Outlook to SharePoint.",
    tags: ["Enterprise", "Outlook Add-in", "SharePoint"],
  },
  {
    n: "02",
    name: "Compliance Companion",
    tagline: "Application compliance, simplified",
    description:
      "A guided application that helps app owners stay compliant by walking them through the data they need to submit, step by step.",
    tags: ["Enterprise", "Forms", "Workflow"],
  },
  {
    n: "03",
    name: "Eatsure",
    tagline: "Influencer widget",
    description:
      "An embeddable influencer widget that increases average order value by surfacing curated picks at the right moment in checkout.",
    tags: ["Consumer", "Conversion"],
  },
];

export function Work() {
  return (
    <section id="work" className="border-t border-border px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected work</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-4xl md:text-5xl">Projects</h2>
        </Reveal>

        <div className="mt-14 space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <article className="group grid gap-6 rounded-lg border border-border bg-card p-6 transition-colors hover:bg-secondary md:grid-cols-[120px_1fr_auto] md:items-start md:gap-10 md:p-10">
                <div className="font-serif text-3xl text-muted-foreground md:text-4xl">{p.n}</div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed">{p.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <ArrowUpRight className="h-5 w-5 self-start text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
