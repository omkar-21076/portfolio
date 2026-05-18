import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import hero from "@/assets/eatsure-hero.webp";
import home from "@/assets/eatsure-home.webp";
import curators from "@/assets/eatsure-curators.webp";
import profile from "@/assets/eatsure-profile.webp";
import ui from "@/assets/eatsure-ui.webp";
import cart from "@/assets/eatsure-cart.webp";
import payment from "@/assets/eatsure-payment.webp";

export const Route = createFileRoute("/work/eatsure")({
  head: () => ({
    meta: [
      { title: "EatSure — Case Study — Omkar Raut" },
      {
        name: "description",
        content:
          "Designing an influencer curation widget on the EatSure app that helps users discover curated food combinations and increases order value.",
      },
      { property: "og:title", content: "EatSure — Case Study" },
      {
        property: "og:description",
        content:
          "Influencer curation widget on the EatSure app — food discovery, curator trust, and higher order value.",
      },
      { property: "og:image", content: hero },
    ],
    links: [
      { rel: "preload", as: "image", href: hero, fetchpriority: "high" },
    ],
  }),
  component: () => (
    <CaseStudy
      number="03"
      name="Designing a Food Curation Feature on the EatSure App"
      tagline="An influencer curation widget that helps users discover curated food combinations and increases overall order value."
      heroImage={hero}
      meta={{
        role: "UX Designer",
        platform: "Mobile · EatSure App",
      }}
      focusAreas={[
        "Product thinking",
        "Feature design",
        "Food curation experience",
        "UI design",
        "User flow creation",
        "Usability testing",
      ]}
      context={`The project focused on designing an influencer curation widget feature within the EatSure app which allows food bloggers to share their curated food combinations and helps users discover different varieties of food based on moods, tastes, and occasions.

The idea behind the feature was to create curated combinations where multiple food items are selected and combined together to form a complete meal experience. The feature also explored how curated recommendations from food bloggers could help users make quicker food decisions while increasing overall order value for the business.`}
      challenge={`The challenge was to design a curation feature that could help users discover curated food combinations while also building trust around recommendations shared by food bloggers.

The feature needed to answer several important questions:

• How users would discover curated suggestions
• Why users would trust curated recommendations
• How users could edit suggested curations
• Whether users would want to know more about curators
• How the feature could help the business increase food item sales in a single order

Another important consideration was creating an experience that felt useful instead of overwhelming. Since EatSure follows a cloud kitchen model, users already have access to different cuisines and food items from multiple brands. The feature needed to make food discovery easier while encouraging users to try combinations they may not normally order.

The target audience primarily included working professionals, as curated food combinations could help them make quicker food decisions without spending too much time browsing through menus.`}
      research={{
        intro: `The feature idea was explored by first understanding how curation already exists across different digital platforms. Curated experiences are commonly used based on user behavior, preferences, and browsing patterns to make recommendations feel more personalized.

The project explored how the same concept could be implemented within a food ordering experience by allowing food bloggers to suggest combinations based on their tastes and experiences.

Different user scenarios were considered during the process. One example explored how curated combinations could help users quickly decide meals for occasions such as birthday celebrations without spending too much effort deciding what to order. Another scenario explored how users with unique taste preferences could discover combinations already tried and recommended by other food enthusiasts.

The process also explored how curated experiences could help users discover new food combinations while reducing the effort involved in food selection and decision-making.`,
        insights: [
          {
            quote:
              "Curated experiences can help simplify food decision-making for users who often struggle to decide what to order from multiple options.",
            source: "Key finding",
          },
          {
            quote:
              "Recommendations from trusted curators could create stronger confidence in trying new food combinations and cuisines.",
            source: "Key finding",
          },
          {
            quote:
              "Curated combinations could help users complete food ordering decisions faster while also increasing the number of food items purchased within a single order.",
            source: "Key finding",
          },
          {
            quote:
              "Users may want flexibility to edit curated combinations instead of ordering recommendations exactly as suggested.",
            source: "Key finding",
          },
        ],
      }}
      screensVariant="phone-grid"
      screens={[
        {
          title: "Home screen",
          image: home,
          caption: "Curated suggestion entry point on the home feed.",
        },
        {
          title: "Curated suggestions",
          image: curators,
          caption: "Discovering curations from food bloggers.",
        },
        {
          title: "Curator profile",
          image: profile,
          caption: "Building trust through curator profiles.",
        },
        {
          title: "UI components & edit flow",
          image: ui,
          caption: "Curation card, edit selection, and cancel confirmation.",
        },
        {
          title: "Cart",
          image: cart,
          caption: "Curated combinations carried through to cart with cross-sell.",
        },
        {
          title: "Payment",
          image: payment,
          caption: "Checkout flow for curated orders.",
        },
      ]}
      impact={[
        "The feature explored how curated food experiences could help increase conversion and session length within the EatSure app.",
        "Increase overall order value.",
        "Encourage users to try different cuisines together.",
        "Improve repeat visits through curated recommendations.",
        "Create a win-win situation for food bloggers, users, and businesses.",
        "The feature also introduced opportunities for users to follow food curators and revisit the platform regularly to explore new curated combinations.",
      ]}
      solution={{
        text: `The feature introduced curated food combinations created by food bloggers directly within the EatSure experience. These curated combinations allowed users to discover meals based on different tastes, moods, cuisines, and occasions.

The experience focused on helping users quickly explore combinations suggested by curators instead of individually selecting food items manually. The feature also explored how curated experiences could create a more personalized feeling for users, similar to getting food suggestions from someone with similar tastes.

The design process focused on understanding:

• How users would discover curated suggestions
• How trust could be established around curators
• How users could purchase or modify curated combinations
• Whether users would want to explore curator profiles further

The feature also considered how curated experiences could help businesses increase overall order value by encouraging users to order multiple food items together instead of individual dishes.

The UI explored:

• Curated meal discovery
• Curator profiles
• Combination editing flow
• Ordering flow for curated meals
• Trust-building elements around curators
• Personalized recommendation experience`,
      }}
      constraints={[
        "The feature needed to fit naturally within the existing EatSure ecosystem without making the ordering experience feel more complicated.",
        "Another important consideration was balancing personalization with simplicity. The curated experience needed to feel engaging while still helping users make quicker decisions instead of adding more browsing complexity.",
        "The feature also needed to support both user goals and business goals by improving food discovery while encouraging larger order combinations.",
      ]}
      collaboration={`The design process focused on understanding the complete user journey around curated food experiences before moving into UI design.

Different questions were explored throughout the process:

• How users would discover curated combinations
• How trust would be built around curators
• How editing curated combinations could work
• How the ordering flow would behave
• Whether users would want to know more about food curators

The UI screens and prototype flows were created around these decisions and later reviewed through feedback and iteration.

The process also included reflecting on setbacks, receiving feedback, and continuously improving the feature direction before finalizing the overall experience.`}
      reflection="The project reinforced the importance of designing features around user behavior instead of only focusing on UI screens."
      learnings={[
        "It also highlighted how curated experiences can create more personalized and engaging interactions when users feel recommendations are coming from trusted people with similar tastes and preferences.",
        "Another key learning was understanding how business goals and user goals can align together when the experience helps users make faster decisions while also increasing engagement and order value.",
      ]}
      prev={{ to: "/work/compliance-companion", label: "Compliance Companion" }}
    />
  ),
});
