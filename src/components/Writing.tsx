import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import selfServicePortalThumb from "@/assets/writing-self-service-portal.png";
import aiBuildersThumb from "@/assets/writing-ai-builders.png";

type Tile = {
  source: "Medium" | "LinkedIn";
  title: string;
  date: string;
  href: string;
  className: string;
  image?: string;
};

const tiles: Tile[] = [
  {
    source: "Medium",
    title: "AI can build an app in minutes, but can it solve a problem?",
    date: "2025",
    href: "https://medium.com/@omkar-raut/ai-can-build-an-app-in-minutes-but-can-it-solve-a-problem-d7c46a6392f7",
    image: aiBuildersThumb,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    source: "Medium",
    title: "Building a user-friendly self-service portal: tips for UX design & implementation",
    date: "Jan 2025",
    href: "https://medium.com/@omkar-raut/building-a-user-friendly-self-service-portal-tips-for-ux-design-implementation-ff97f801e8b4",
    image: selfServicePortalThumb,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    source: "LinkedIn",
    title: "Understanding SaaS Products",
    date: "2024",
    href: "https://www.linkedin.com/posts/omkar-raut_userexperience-saasdesign-saasproduct-activity-7166819851749974017-60Eb?utm_source=share&utm_medium=member_desktop&rcm=ACoAACOUDR0BNZ2HZNYy2nuW_r-uwvHpRZywQIE",
    className: "md:col-span-2",
  },
  {
    source: "LinkedIn",
    title: "Prototyping using variable/modes and conditional statements",
    date: "2024",
    href: "https://www.linkedin.com/posts/omkar-raut_config2023-prototyping-userexperiencedesign-activity-7085939943125979136-sL2s?utm_source=share&utm_medium=member_desktop&rcm=ACoAACOUDR0BNZ2HZNYy2nuW_r-uwvHpRZywQIE",
    className: "md:col-span-2",
  },
  {
    source: "Medium",
    title: "Designing for cognitive load: less to remember, more to do",
    date: "Mar 2025",
    href: "#",
    className: "md:col-span-2",
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
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-border bg-card transition-colors hover:bg-secondary"
              >
                {t.image && (
                  <>
                    <div className="absolute inset-0 bg-black" />
                    <img
                      src={t.image}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/70 to-transparent" />
                  </>
                )}
                <div
                  className={`relative flex h-full flex-col justify-between p-6 ${
                    t.image ? "text-white" : ""
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span
                      className={`rounded-full border px-2 py-0.5 ${
                        t.image
                          ? "border-white/40 bg-black/30 text-white backdrop-blur-sm"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      {t.source}
                    </span>
                    <ArrowUpRight
                      className={`h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                        t.image ? "text-white" : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl leading-snug md:text-2xl">{t.title}</h3>
                    <p
                      className={`mt-2 text-xs ${
                        t.image ? "text-white/80" : "text-muted-foreground"
                      }`}
                    >
                      {t.date}
                    </p>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
