import { Reveal } from "./Reveal";
import aiReviewDashboard from "@/assets/visual-ai-review-dashboard.png.asset.json";
import comparePlans from "@/assets/visual-compare-plans.png.asset.json";
import cultpassFitness from "@/assets/visual-cultpass-fitness.png.asset.json";
import pricingPage from "@/assets/visual-pricing-page.png.asset.json";
import lumaSmartwatch from "@/assets/visual-luma-smartwatch.png.asset.json";

type Tile = { src: string; title: string };

const tiles: Tile[] = [
  { src: aiReviewDashboard.url, title: "AI Design Review — Dashboard" },
  { src: comparePlans.url, title: "Compare Plans" },
  { src: cultpassFitness.url, title: "cultpass — Fitness Brand" },
  { src: pricingPage.url, title: "Pricing Page" },
  { src: lumaSmartwatch.url, title: "LUMA — Smartwatch Landing" },
];

export function Visuals() {
  return (
    <section id="visuals" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Visuals</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-4xl md:text-5xl">Things I've made</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 max-w-xl text-muted-foreground">
            A continuous scroll of recent visual explorations. Hover to pause.
          </p>
        </Reveal>
      </div>

      <div className="marquee-wrapper mt-14 overflow-hidden" aria-label="Visual gallery, continuous horizontal scroll">
        <div className="marquee-track flex w-max gap-5">
          {[...tiles, ...tiles].map((t, i) => {
            const isDuplicate = i >= tiles.length;
            return (
              <figure
                key={i}
                className="flex w-80 shrink-0 flex-col md:w-[420px]"
                aria-hidden={isDuplicate}
              >
                <div className="h-64 w-full overflow-hidden rounded-lg border border-border bg-card md:h-80">
                  <img
                    src={t.src}
                    alt={isDuplicate ? "" : t.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                  {t.title}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
