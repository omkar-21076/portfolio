import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import legalDms from "@/assets/work-legal-dms.jpg";
import compliance from "@/assets/work-compliance-companion.jpg";
import eatsure from "@/assets/work-eatsure.jpg";

export const Route = createFileRoute("/work/eatsure")({
  head: () => ({
    meta: [
      { title: "Eatsure — Case Study — Omkar Raut" },
      { name: "description", content: "An influencer pick widget that increases AOV at the right moment in checkout." },
      { property: "og:title", content: "Eatsure — Case Study" },
      { property: "og:description", content: "Embedding curated influencer picks into the food checkout flow." },
      { property: "og:image", content: eatsure },
    ],
  }),
  component: () => (
    <CaseStudy
      number="03"
      name="Eatsure"
      tagline="An embeddable widget that brings curated influencer picks into checkout."
      heroImage={eatsure}
      meta={{ role: "Product Designer", timeline: "3 months, 2023", team: "1 designer, 2 engineers, 1 PM", platform: "Mobile web, native iOS/Android" }}
      context="Average order value plateaued for repeat users. The team had a library of influencer-curated dish lists but no surface that put them in front of the user at a moment of intent."
      problem="Users should discover an influencer's pick at a point in the journey where adding it feels natural, not interruptive."
      goals={[
        "Lift average order value by 8% on sessions that see the widget.",
        "Keep checkout drop-off within 1pt of baseline.",
        "Make the widget reusable across three brands in the group.",
      ]}
      research={{
        intro: "We instrumented the existing flow and ran a 4-cell A/B/C/D test of widget placements: home, restaurant page, cart, and post-add toast. Cart and toast won on intent without hurting completion.",
        insights: [
          { quote: "I'll try a chef's pick if it's right there when I'm already paying. Not on the home page.", source: "Repeat user, Bengaluru" },
          { quote: "I follow this creator. If she added it, I'll add it.", source: "First-time user, Mumbai" },
        ],
      }}
      flowImage={eatsure}
      explorationImages={[legalDms, compliance]}
      solution={{
        text: "A compact card that appears in the cart with one influencer's pick relevant to the order, one tap to add, and a clear creator attribution. The widget is a single React component consumed by all three brand apps with brand-token theming.",
        image: eatsure,
      }}
      outcomes={[
        { value: "+11%", label: "AOV on widget-exposed sessions" },
        { value: "−0.4pt", label: "Net checkout drop-off" },
        { value: "3", label: "Brands shipped on one component" },
      ]}
      reflection="Placement mattered more than content. The same recommendation that felt promotional on the home screen felt helpful in the cart. I would invest next in personalisation of which creator appears, not which dish."
      prev={{ to: "/work/compliance-companion", label: "Compliance Companion" }}
    />
  ),
});
