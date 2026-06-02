import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto w-full max-w-7xl text-foreground">
        {/* Section header */}
        <Reveal>
          <div className="mb-16 w-full border-b border-border pb-8 md:mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
              Contact / Collaborate
            </span>
          </div>
        </Reveal>

        {/* Asymmetrical grid */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-24">
          {/* Left: oversized headline */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2
                className="font-semibold leading-[0.85] tracking-tighter"
                style={{ fontSize: "clamp(3.5rem, 10vw, 8.5rem)" }}
              >
                Let's
                <br />
                talk<span className="text-foreground/20">.</span>
              </h2>
            </Reveal>
          </div>

          {/* Right: copy + actions */}
          <div className="flex flex-col justify-start pt-4 lg:col-span-5 lg:pt-16">
            <Reveal delay={0.1}>
              <p className="mb-16 max-w-sm text-lg leading-relaxed text-foreground/80 md:text-xl">
                Open to enterprise UX roles, freelance projects, and good
                conversations about design.
              </p>
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal delay={0.15}>
                <a
                  href="mailto:rautomkar21076@gmail.com"
                  className="group inline-flex w-fit flex-col"
                >
                  <span className="text-xl font-semibold tracking-tight md:text-2xl lg:text-3xl">
                    rautomkar21076@gmail.com
                  </span>
                  <span className="h-px w-full origin-right scale-x-100 bg-foreground transition-transform duration-500 ease-in-out group-hover:scale-x-0" />
                  <span className="-mt-px h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-500 ease-in-out group-hover:scale-x-100" />
                </a>
              </Reveal>

              <Reveal delay={0.2}>
                <a
                  href="https://www.linkedin.com/in/omkar-raut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-fit flex-col"
                >
                  <span className="text-xl font-semibold tracking-tight md:text-2xl lg:text-3xl">
                    LinkedIn
                  </span>
                  <span className="h-px w-full origin-right scale-x-100 bg-foreground transition-transform duration-500 ease-in-out group-hover:scale-x-0" />
                  <span className="-mt-px h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-500 ease-in-out group-hover:scale-x-100" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
