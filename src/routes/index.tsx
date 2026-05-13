import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Visuals } from "@/components/Visuals";
import { Writing } from "@/components/Writing";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Visuals />
      <Writing />
      <Contact />
    </>
  );
}
