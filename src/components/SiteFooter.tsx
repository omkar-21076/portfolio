export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:px-8">
        <p>© {new Date().getFullYear()} Omkar Raut</p>
        <p>Built with care.</p>
      </div>
    </footer>
  );
}
