export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 px-5 py-10 text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/30 md:flex-row md:items-center md:px-8">
        <div className="flex items-center gap-6">
          <span>© {new Date().getFullYear()} Omkar Raut</span>
          <span className="h-px w-8 bg-foreground/30" />
          <span>Based in India</span>
        </div>
        <div className="flex items-center gap-12">
          <span>Portfolio v2.0</span>
          <span>Built with care</span>
        </div>
      </div>
    </footer>
  );
}
