import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Omkar Raut" },
      { name: "description", content: "Get in touch with Omkar Raut for UX work and conversations." },
      { property: "og:title", content: "Contact — Omkar Raut" },
      { property: "og:description", content: "Open to enterprise UX roles and freelance projects." },
    ],
  }),
  component: () => <div className="pt-10"><Contact /></div>,
});
