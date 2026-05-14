import { Link, useLocation, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { hash: "work", label: "Work" },
  { hash: "visuals", label: "Visuals" },
  { hash: "writing", label: "Writing" },
  { hash: "about", label: "About" },
  { hash: "contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const location = useLocation();
  const router = useRouter();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Scroll-spy for active section on the home page
  useEffect(() => {
    if (!onHome) { setActiveId(""); return; }
    const ids = links.map((l) => l.hash);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [onHome, location.pathname]);

  const handleSectionClick = (e: React.MouseEvent, hash: string) => {
    setOpen(false);
    if (onHome) {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) {
        window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
        // Update hash without triggering scroll jump
        window.history.replaceState(null, "", `/#${hash}`);
      }
    }
    // Otherwise let the Link navigate to "/" with hash; index route handles scroll
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8" aria-label="Primary">
        <Link to="/" className="font-serif text-2xl leading-none tracking-tight">
          Omkar Raut
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const isActive = onHome && activeId === l.hash;
            return (
              <li key={l.hash}>
                <Link
                  to="/"
                  hash={l.hash}
                  onClick={(e) => handleSectionClick(e, l.hash)}
                  className={`text-sm transition-colors hover:text-foreground ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-md md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-background md:hidden">
          <ul className="flex flex-col gap-2 px-5 py-8">
            {links.map((l) => (
              <li key={l.hash}>
                <Link
                  to="/"
                  hash={l.hash}
                  onClick={(e) => handleSectionClick(e, l.hash)}
                  className="block py-3 font-serif text-3xl text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
