import portrait from "@/assets/portrait-placeholder.svg";
import { Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative px-5 pb-24 pt-16 md:px-8 md:pt-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal>
          <img
            src={portrait}
            alt="Portrait of Omkar Raut"
            width={144}
            height={144}
            className="mb-8 h-32 w-32 rounded-full border border-border object-cover md:h-36 md:w-36"
          />
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif text-[clamp(3.5rem,10vw,7rem)] leading-[0.95] tracking-tight">
            Omkar Raut
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            UX Designer at <span className="text-foreground">Siemens Healthineers</span>
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl font-serif text-2xl italic leading-snug text-foreground/90 md:text-3xl">
            I turn complex enterprise workflows into simple, accessible products.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Link
            to="/work"
            className="mt-10 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium transition-opacity hover:opacity-70"
          >
            See selected work <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
