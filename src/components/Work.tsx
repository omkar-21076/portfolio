import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import legalDms from "@/assets/work-legal-dms.jpg";
import compliance from "@/assets/work-compliance-companion.jpg";
import eatsure from "@/assets/work-eatsure.jpg";

const projects = [
  {
    n: "01",
    name: "Legal DMS",
    tagline: "Data Management System",
    description:
      "An in-house legal data management system with an Outlook add-in that lets teams file legal matters directly from Outlook to SharePoint.",
    tags: ["Enterprise", "Outlook Add-in", "SharePoint"],
    image: legalDms,
  },
  {
    n: "02",
    name: "Compliance Companion",
    tagline: "Application compliance, simplified",
    description:
      "A guided application that helps app owners stay compliant by walking them through the data they need to submit, step by step.",
    tags: ["Enterprise", "Forms", "Workflow"],
    image: compliance,
  },
  {
    n: "03",
    name: "Eatsure",
    tagline: "Influencer widget",
    description:
      "An embeddable influencer widget that increases average order value by surfacing curated picks at the right moment in checkout.",
    tags: ["Consumer", "Conversion"],
    image: eatsure,
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
              <article className="group grid gap-6 rounded-lg border border-border bg-card p-6 transition-colors hover:bg-secondary md:grid-cols-[280px_1fr_auto] md:items-center md:gap-10 md:p-8">
                <div className="overflow-hidden rounded-md border border-border">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.tagline}`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div>
                  <p className="font-serif text-sm text-muted-foreground">{p.n}</p>
                  <h3 className="mt-1 font-serif text-2xl md:text-3xl">{p.name}</h3>
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
                <ArrowUpRight className="h-5 w-5 self-start text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground md:self-center" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
