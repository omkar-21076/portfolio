import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import hero from "@/assets/compliance-hero.webp";
import dashboard from "@/assets/compliance-dashboard.webp";
import pre1 from "@/assets/compliance-prescreen-1.webp";
import pre2 from "@/assets/compliance-prescreen-2.webp";
import pre3 from "@/assets/compliance-prescreen-3.webp";
import applicable from "@/assets/compliance-aspects-applicable.webp";
import notApplicable from "@/assets/compliance-aspects-not-applicable.webp";

export const Route = createFileRoute("/work/compliance-companion")({
  head: () => ({
    meta: [
      { title: "Compliance Companion — Case Study — Omkar Raut" },
      {
        name: "description",
        content:
          "An enterprise compliance assessment tool that simplifies a highly complex compliance process and reduces cognitive load for application owners.",
      },
      { property: "og:title", content: "Compliance Companion — Case Study" },
      {
        property: "og:description",
        content:
          "Guided pre-screening, applicable-aspect transparency, and contextual chatbot support for non-expert compliance users.",
      },
      { property: "og:image", content: hero },
    ],
    links: [
      { rel: "preload", as: "image", href: hero, fetchpriority: "high" },
    ],
  }),
  component: () => (
    <CaseStudy
      number="02"
      name="Compliance Companion"
      tagline="An enterprise compliance assessment tool that simplifies a highly complex compliance process and reduces cognitive load for application owners."
      heroImage={hero}
      meta={{
        role: "UX Designer",
        platform: "Web · Angular",
      }}
      focusAreas={[
        "Enterprise UX",
        "Workflow simplification",
        "Guided user journeys",
        "Cognitive load reduction",
        "UX research & testing",
        "AI-assisted support experience",
      ]}
      context={`Compliance Companion is an enterprise compliance assessment tool designed to help application owners and teams identify which compliance, regulatory, and legal requirements apply to their applications. The tool supports teams in documenting application purpose, data usage, technology landscape, deployment regions, customer-facing vs internal usage, third-party vs in-house solutions, and regulatory applicability.

The goal of the project was to simplify a highly complex compliance process and reduce the cognitive load experienced by users while navigating multiple legal and regulatory requirements.`}
      challenge={`The existing compliance process was difficult for non-expert users to understand and navigate. Users were expected to complete multiple compliance and legal documentation flows across areas such as Cybersecurity, Data Privacy, FDA, ICFR, EU AI Act, country-specific regulations, and software clearing.

The system was primarily usable only for experienced users familiar with compliance processes. New users often felt overwhelmed and struggled to understand where to begin, which aspects applied to them, and how different sections were connected. Many users required continuous support while completing legal documentation tasks because the process itself created high cognitive load through complex terminology, large numbers of mandatory sections, unclear navigation, and lack of guidance.

Another challenge was balancing usability with system complexity. The application was connected with multiple external systems during the compliance process, which increased load times and made the experience feel heavy for users already dealing with complicated workflows.`}
      research={{
        intro: `The project followed a structured research and validation process to understand how users interacted with the system and where the biggest usability challenges existed.

Users were first identified through the Early Bird Community, including both regular and moderate users of the tool. Surveys and task links were shared through Email and Viva Engage without step-by-step instructions in order to avoid design bias during testing. Responses were kept anonymous, while users could optionally participate in usability testing sessions.

Survey findings were analyzed and converted into usability insights, which were later shared with stakeholders and development teams. Five users were selected for usability testing sessions where they completed tasks through screen-sharing sessions without interviewer guidance. Observations, struggles, and suggestions were captured throughout the process.

The findings from surveys and usability testing were then prioritized based on usability impact, accessibility standards, and sprint feasibility. Improvements were reviewed collaboratively with management and development teams before being aligned with sprint planning and implementation.

Follow-up usability testing sessions were later conducted to validate whether the redesigned experience successfully addressed the identified usability issues.`,
        insights: [
          {
            quote:
              "Users struggled with navigation, unclear workflow paths, and confusion between “View” and “Edit” states.",
            source: "Usability testing finding",
          },
          {
            quote:
              "The chatbot experience initially created uncertainty because users were unsure how or when to use it.",
            source: "Usability testing finding",
          },
        ],
      }}
      screens={[
        {
          title: "My Assessments dashboard",
          image: dashboard,
          caption:
            "A clear entry point with Drafts, Software I Own, and Software I Manage — users land where they left off and can resume in one tap.",
        },
        {
          title: "Pre-screening · Section 1",
          image: pre1,
          caption:
            "Basic application information — business owner, software manager, name, operational status, and description.",
        },
        {
          title: "Pre-screening · Section 2",
          image: pre2,
          caption:
            "Plain-language questions about how users interact with the application, how many use it, and where they are located.",
        },
        {
          title: "Pre-screening · Section 3",
          image: pre3,
          caption:
            "Installation, login, AI features, and medical-device questions — the final step before applicability is determined.",
        },
        {
          title: "Applicable Aspects",
          image: applicable,
          caption:
            "Only the compliance aspects relevant to the user become active, with progress visibility for each section.",
        },
        {
          title: "Not Applicable Aspects",
          image: notApplicable,
          caption:
            "Non-applicable aspects are still visible but visually separated, so users understand why they are inactive.",
        },
      ]}
      impact={[
        "The redesigned experience improved usability and adoption across the platform by making compliance workflows more understandable and manageable for non-expert users.",
        "73% of respondents found the new landing page more intuitive, while 59% found the redesigned entry creation process easier to understand and complete.",
        "The contextual chatbot experience also saw positive adoption, particularly because it provided immediate and relevant guidance during lengthy compliance tasks.",
        "The redesigned system improved navigation clarity, reduced confusion around compliance applicability, and gave users better visibility into their progress and completion states throughout the workflow.",
      ]}
      solution={{
        text: `To simplify the experience, the redesigned flow introduced a guided pre-screening process that asked users basic questions about their application. Based on those responses, only the compliance aspects relevant to the user became active.

Non-applicable aspects were still visible, but visually separated and greyed out so users could understand why they were inactive. This gave users greater transparency and control while reducing confusion around aspect applicability.

The redesigned experience also introduced progress visibility, helping users understand which sections were completed and which were still pending. Users could export a PDF summary containing all completed documentation and compliance-related information, making the process more manageable and traceable.

A major addition to the experience was the contextual chatbot support system. Since users were not legal experts and often struggled with compliance terminology, the chatbot dynamically updated suggested questions based on the screen the user was currently on. This helped users get immediate support without leaving the workflow or depending entirely on external teams for guidance.

The overall design approach focused on creating smaller and more understandable journeys instead of overwhelming users with large compliance workflows at once. Minimal UI patterns, clearer hierarchy, and simplified flows helped reduce cognitive load while still supporting the complexity of the system.`,
      }}
      constraints={[
        "The application was built using Angular and connected with multiple external systems during the compliance process. While the platform provided flexibility in design, one of the biggest concerns was maintaining usability within a heavy system architecture and ensuring that performance issues did not overwhelm users.",
        "The project also involved large amounts of compliance-related information, complex conditional logic between aspects, and workflows that needed to remain scalable across multiple regulatory scenarios.",
        "The design approach therefore focused on maintaining minimal interfaces, clear hierarchy, smaller user journeys, and reducing cognitive load while still supporting the complexity of enterprise compliance processes.",
      ]}
      collaboration={`Research findings, usability issues, and accessibility concerns were continuously reviewed and prioritized with stakeholders, management teams, and developers throughout the project lifecycle.

UX decisions were aligned closely with sprint planning to ensure implementation feasibility within ongoing development timelines. The process emphasized continuous validation, iterative delivery, and strong collaboration between UX and development teams to ensure that usability improvements remained technically feasible while still solving user problems effectively.`}
      outcomes={[
        { value: "73%", label: "Found the new landing page more intuitive" },
        { value: "59%", label: "Found the redesigned entry creation easier to complete" },
        { value: "30%+", label: "Chatbot adoption during compliance tasks" },
      ]}
      reflection={`This project reinforced the importance of breaking down complex enterprise workflows into smaller and more manageable journeys. It highlighted how contextual guidance, visibility, and transparency can significantly reduce cognitive load in compliance-heavy systems designed for non-expert users.`}
      learnings={[
        "The experience also emphasized the value of combining user research with iterative delivery and continuous validation throughout the design process.",
        "Designing guided workflows, simplifying technical terminology, and improving system transparency helped create a more usable and supportive experience without reducing the complexity required by the compliance process itself.",
      ]}
      prev={{ to: "/work/legal-dms", label: "Legal DMS" }}
      next={{ to: "/work/eatsure", label: "Eatsure" }}
    />
  ),
});
