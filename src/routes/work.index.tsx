import { createFileRoute } from "@tanstack/react-router";
import { Work } from "@/components/Work";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Omkar Raut" },
      { name: "description", content: "Selected UX projects: Legal DMS, Compliance Companion, and Eatsure." },
      { property: "og:title", content: "Work — Omkar Raut" },
      { property: "og:description", content: "Selected enterprise and consumer UX projects." },
    ],
  }),
  component: () => <div className="pt-10"><Work /></div>,
});
