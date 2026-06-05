import portrait from "@/assets/portrait.jpg";
import { Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-16 md:px-8 md:pt-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Content */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-foreground" />
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-foreground">
                UX Designer focused on Enterprise Systems & Accessibility
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-8 whitespace-nowrap font-serif text-[clamp(3rem,7.5vw,6rem)] font-medium leading-[0.9] tracking-tight">
              Omkar <span className="italic">Raut</span>
            </h1>
          </Reveal>

          <div className="mt-10 max-w-md space-y-8">
            <Reveal delay={0.1}>
              <p className="text-xl leading-relaxed text-muted-foreground md:text-2xl">
                Turning enterprise complexity into experiences people can understand, trust, and use efficiently.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <Link
                to="/work"
                className="group inline-flex items-center gap-4"
              >
                <span className="border-b border-foreground pb-1 text-base font-medium transition-all duration-500 group-hover:pr-6 md:text-lg">
                  See selected work
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground transition-colors duration-500 group-hover:bg-foreground group-hover:text-background">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Architectural Image */}
        <div className="relative lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[420px]">
              {/* Offset hairline frame */}
              <div className="absolute -inset-4 -rotate-3 rounded-sm border border-foreground/10" />

              {/* Soft blurred backdrop */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-[80%] w-[120%] -translate-x-1/2 -translate-y-1/2 rotate-12 bg-muted/60 opacity-60 blur-3xl" />

              {/* Main image */}
              <div className="group relative h-full w-full overflow-hidden bg-muted shadow-2xl">
                <img
                  src={portrait}
                  alt="Portrait of Omkar Raut"
                  className="h-full w-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                />

                {/* OR monogram overlay */}
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-6">
                  <span className="-mb-4 block font-serif text-8xl italic leading-none text-background opacity-20">
                    OR
                  </span>
                </div>

                {/* Corner tag */}
                <div className="absolute right-0 top-0 flex h-16 w-16 items-center justify-center bg-foreground">
                  <span className="rotate-90 text-[10px] font-bold uppercase tracking-widest text-background">
                    2024
                  </span>
                </div>
              </div>

              {/* Geometric detail */}
              <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 items-center justify-center rounded-full border border-foreground md:flex">
                <div className="h-2 w-2 rounded-full bg-foreground" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
