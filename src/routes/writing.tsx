import { createFileRoute } from "@tanstack/react-router";
import { Writing } from "@/components/Writing";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing — Omkar Raut" },
      { name: "description", content: "Articles on Medium and posts on LinkedIn about UX, accessibility, and enterprise design." },
      { property: "og:title", content: "Writing — Omkar Raut" },
      { property: "og:description", content: "Design thoughts: articles and posts." },
    ],
  }),
  component: () => <div className="pt-10"><Writing /></div>,
});
