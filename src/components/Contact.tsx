import { Reveal } from "./Reveal";
import { Linkedin, Github, Instagram, BookOpen, Dribbble, Twitter } from "lucide-react";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/", Icon: Linkedin },
  { label: "Medium", href: "https://medium.com/@", Icon: BookOpen },
  { label: "Dribbble", href: "https://dribbble.com/", Icon: Dribbble },
  { label: "X / Twitter", href: "https://x.com/", Icon: Twitter },
  { label: "GitHub", href: "https://github.com/", Icon: Github },
  { label: "Instagram", href: "https://instagram.com/", Icon: Instagram },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-5xl leading-tight md:text-7xl">
            Let's <span className="italic">talk.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
            Open to enterprise UX roles, freelance projects, and good conversations about design.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <a
            href="mailto:hello@omkarraut.design"
            className="mt-10 inline-block font-serif text-2xl italic underline decoration-1 underline-offset-8 transition-opacity hover:opacity-70 md:text-3xl"
          >
            hello@omkarraut.design
          </a>
        </Reveal>
        <Reveal delay={0.2}>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
