import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import legalDms from "@/assets/work-legal-dms.jpg";
import compliance from "@/assets/work-compliance-companion.jpg";
import eatsure from "@/assets/work-eatsure.jpg";

export const Route = createFileRoute("/work/compliance-companion")({
  head: () => ({
    meta: [
      { title: "Compliance Companion — Case Study — Omkar Raut" },
      { name: "description", content: "A guided experience that turns dense compliance into a step-by-step conversation." },
      { property: "og:title", content: "Compliance Companion — Case Study" },
      { property: "og:description", content: "Step-by-step guidance for app owners submitting compliance data." },
      { property: "og:image", content: compliance },
    ],
  }),
  component: () => (
    <CaseStudy
      number="02"
      name="Compliance Companion"
      tagline="Turning dense compliance forms into a guided, plain-language conversation."
      heroImage={compliance}
      meta={{ role: "UX Designer", timeline: "6 months, 2024", team: "1 designer, 3 engineers, 2 PMs, 1 compliance SME", platform: "Web (desktop-first)" }}
      context="App owners across the company were required to submit compliance data quarterly, but the existing form had 90+ fields, no save state, and used legal language. Submission rates were low and rework was high."
      problem="App owners need to know exactly what to provide, in their own words, and finish in a single sitting without re-doing work."
      goals={[
        "Cut average completion time from 45 to under 20 minutes.",
        "Reduce rework cycles per submission from 2.1 to under 1.",
        "Move on-time submission rate from 58% to over 85%.",
        "Make the tone approachable without losing legal precision.",
      ]}
      research={{
        intro: "Twelve interviews with app owners, plus a content audit of the existing form with the compliance team. We learned that owners did not need fewer questions — they needed the right question at the right time, with examples.",
        insights: [
          { quote: "I don't know what 'data subject category' means. Just ask me who uses my app.", source: "App Owner, Internal Tools" },
          { quote: "If I leave the page, I lose everything. So I copy answers into a Word doc first.", source: "App Owner, Customer Apps" },
        ],
      }}
      flowImage={compliance}
      explorationImages={[legalDms, eatsure]}
      solution={{
        text: "A stepper that breaks the form into 6 themed chapters, each with plain-language questions, inline examples, and autosave. A live summary on the right shows what's still needed. Compliance reviewers see the same record with the original legal field names mapped underneath.",
        image: compliance,
      }}
      outcomes={[
        { value: "−58%", label: "Average completion time" },
        { value: "+31pt", label: "On-time submission rate" },
        { value: "0.7", label: "Rework cycles per submission" },
      ]}
      reflection="Mapping plain-language questions to the legal schema underneath was the hardest design decision and the most valuable. It let two audiences — owners and reviewers — share one source of truth without compromising either side."
      prev={{ to: "/work/legal-dms", label: "Legal DMS" }}
      next={{ to: "/work/eatsure", label: "Eatsure" }}
    />
  ),
});
