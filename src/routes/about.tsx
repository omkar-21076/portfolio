import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Omkar Raut" },
      { name: "description", content: "About Omkar Raut, UX Designer focused on minimal, accessible enterprise design." },
      { property: "og:title", content: "About — Omkar Raut" },
      { property: "og:description", content: "UX Designer at Siemens Healthineers. 3 years of enterprise design." },
    ],
  }),
  component: () => <div className="pt-10"><About /></div>,
});
