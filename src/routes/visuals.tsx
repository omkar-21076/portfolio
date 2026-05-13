import { createFileRoute } from "@tanstack/react-router";
import { Visuals } from "@/components/Visuals";

export const Route = createFileRoute("/visuals")({
  head: () => ({
    meta: [
      { title: "Visuals — Omkar Raut" },
      { name: "description", content: "Visual explorations and design artifacts by Omkar Raut." },
      { property: "og:title", content: "Visuals — Omkar Raut" },
      { property: "og:description", content: "A continuous gallery of visual work." },
    ],
  }),
  component: () => <div className="pt-10"><Visuals /></div>,
});
