import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import hero from "@/assets/legal-dms-hero.webp";
import matters from "@/assets/legal-dms-matters.webp";
import outlook from "@/assets/legal-dms-outlook.webp";
import sidebar from "@/assets/legal-dms-sidebar.webp";
import forms from "@/assets/legal-dms-forms.webp";
import landing from "@/assets/legal-dms-landing.webp";

export const Route = createFileRoute("/work/legal-dms")({
  head: () => ({
    meta: [
      { title: "Legal DMS — Case Study — Omkar Raut" },
      {
        name: "description",
        content:
          "UX for an M365-based legal document and matter management system, with an Outlook add-in for seamless email filing.",
      },
      { property: "og:title", content: "Legal DMS — Case Study" },
      {
        property: "og:description",
        content:
          "A unified SharePoint + Outlook experience that lets legal teams file matters without leaving their inbox.",
      },
      { property: "og:image", content: hero },
    ],
  }),
  component: () => (
    <CaseStudy
      number="01"
      name="Legal DMS"
      tagline="A unified M365-based legal document and matter management system, with an Outlook add-in for seamless email filing."
      heroImage={hero}
      meta={{
        role: "UX Designer",
        platform: "SharePoint Online · Outlook add-in · Fluent UI",
      }}
      focusAreas={[
        "UX Strategy",
        "Workflow Optimization",
        "Outlook Add-in Experience",
        "Enterprise UX",
        "Agile Collaboration",
        "Fluent UI-based Design",
      ]}
      context={`The initiative focused on addressing increasing workload, fragmented tools, and inefficient processes faced by legal teams. Legal professionals needed a single, reliable environment to manage documents and matters, collaborate securely, and fulfil mandatory reporting obligations — without adding more tools or manual work.

To address this, the organization established a unified, M365-based legal document and matter management solution using SharePoint Online as the foundation, supported by an Outlook add-in for seamless email filing, with a long-term vision of expanding into a full legal matter management platform.`}
      challenge={`The existing landscape, built on multiple legacy systems, created silos, redundant efforts, and rising costs, while also limiting transparency and productivity.

When I joined the project, development was already in progress and sprint timelines were fixed. UX had been planned as part of the team, but there was a strong assumption that introducing UX at this stage might increase developers' workload, complicate implementation, and delay upcoming deployments — rooted in the belief that UX often adds polish late in the process rather than enabling delivery.

One of the first critical areas where UX played a role was email filing through the Outlook add-in — an action performed repeatedly by legal users under time pressure.`}
      screens={[
        {
          title: "Legal DMS dashboard",
          image: landing,
          caption:
            "SharePoint-based home that surfaces favourite matters, quick reporting, and entry points into Law Firm Management and the dashboard.",
        },
        {
          title: "My Matters workspace",
          image: matters,
          caption:
            "A clear table view with consistent column hierarchy, status pills, and quick switching between My, Favorite, and All Matters.",
        },
        {
          title: "Outlook add-in — file mail to matter",
          image: outlook,
          caption:
            "An inline panel in Outlook that lets users file the current mail and attachments to the right matter, without leaving the inbox.",
        },
        {
          title: "Matter picker — three states",
          image: sidebar,
          caption:
            "My Matters, Favorites, and Recent Matters share one consistent shell. Users land where they left off and can file in two taps.",
        },
        {
          title: "Adverse Party forms & message center",
          image: forms,
          caption:
            "Structured, repeatable form patterns with clear validation, success, and error states — all built within Fluent UI constraints.",
        },
      ]}
      constraints={[
        "Fixed sprint timelines with development already in progress.",
        "Fluent UI component limitations.",
        "Outlook add-in environment restrictions.",
        "Existing SHS UI guidelines to align with.",
        "Limited implementation flexibility for net-new components.",
        "Developers did not have access to Figma — conventional design handoffs were not realistic.",
      ]}
      collaboration={`Instead of challenging assumptions directly, I focused first on alignment. I spent time understanding the technical ecosystem — particularly Fluent UI and SHS UI guidelines — from a developer's perspective: which components were fixed, where flexibility existed, and which constraints were non-negotiable.

To support implementation, I ran walkthrough calls to explain design intent and interaction behavior, and produced detailed PDFs documenting CSS properties, spacing systems, typography, colors, and component behavior. Developers could implement confidently without friction.

Over time, developers began involving UX earlier, ideas were validated before implementation, and collaboration became stronger across teams. What started as concern about increased workload evolved into shared ownership and faster execution.`}
      impact={[
        "Less rework and smoother deployments.",
        "Stronger alignment across design, product, and engineering.",
        "Improved implementation confidence within Fluent UI constraints.",
        "Legacy system retirement and reduced reporting dependencies.",
        "Productivity gains through streamlined workflows and automation — realized through adoption enabled by usable UX.",
      ]}
      learnings={[
        "UX leadership is about prioritizing impact over output.",
        "Embracing constraints early enables faster delivery.",
        "Collaboration beyond traditional handoffs creates better outcomes.",
        "UX can reduce friction and accelerate delivery when embedded thoughtfully within Agile environments.",
      ]}
      next={{ to: "/work/compliance-companion", label: "Compliance Companion" }}
    />
  ),
});
