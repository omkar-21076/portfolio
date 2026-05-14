import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import legalDms from "@/assets/work-legal-dms.jpg";
import compliance from "@/assets/work-compliance-companion.jpg";
import eatsure from "@/assets/work-eatsure.jpg";

export const Route = createFileRoute("/work/legal-dms")({
  head: () => ({
    meta: [
      { title: "Legal DMS — Case Study — Omkar Raut" },
      { name: "description", content: "Filing legal matters from Outlook to SharePoint without leaving the inbox." },
      { property: "og:title", content: "Legal DMS — Case Study" },
      { property: "og:description", content: "An Outlook add-in that turns email into structured legal records." },
      { property: "og:image", content: legalDms },
    ],
  }),
  component: () => (
    <CaseStudy
      number="01"
      name="Legal DMS"
      tagline="Filing legal matters from Outlook to SharePoint, without leaving the inbox."
      heroImage={legalDms}
      meta={{ role: "Lead UX Designer", timeline: "8 months, 2024", team: "2 designers, 4 engineers, 1 PM", platform: "Outlook add-in, SharePoint" }}
      context="Legal teams spent hours each week copying email threads, attachments and metadata into the document management system. The handoff was manual, error-prone, and discouraged adoption of the central system of record."
      problem="Lawyers should be able to file a matter into the DMS in under a minute, from inside the tool they already live in — Outlook."
      goals={[
        "Reduce time-to-file by 50% for high-volume matter teams.",
        "Improve metadata accuracy so retrieval and audit are reliable.",
        "Increase weekly active filing in the DMS by 25%.",
        "Keep the experience accessible (WCAG 2.1 AA) across enterprise themes.",
      ]}
      research={{
        intro: "We shadowed eight lawyers and three legal assistants across two regions, then ran a diary study for two weeks. The pattern was consistent: people knew where things should live, but the path to get them there was the friction.",
        insights: [
          { quote: "I batch my filing on Friday afternoon because doing it inline breaks my thinking.", source: "Senior Associate, M&A" },
          { quote: "Half my filing errors come from picking the wrong matter from a list of 400.", source: "Legal Assistant" },
        ],
      }}
      flowImage={legalDms}
      explorationImages={[compliance, eatsure]}
      solution={{
        text: "A side panel inside Outlook that detects matter context from the thread, prefills metadata, and files the email plus selected attachments into SharePoint with one confirmation. Smart defaults reduce the average filing action to three clicks.",
        image: legalDms,
      }}
      outcomes={[
        { value: "−62%", label: "Time-to-file per email" },
        { value: "+38%", label: "Weekly active filers" },
        { value: "4.6/5", label: "Internal satisfaction score" },
      ]}
      reflection="The biggest unlock was not a new feature — it was removing steps. When the system inferred context the user already had in their head, trust grew quickly. Next, I would invest more in conflict resolution UX for ambiguous threads."
      next={{ to: "/work/compliance-companion", label: "Compliance Companion" }}
    />
  ),
});
