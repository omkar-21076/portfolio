import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { DesignPhilosophy } from "@/components/DesignPhilosophy";
import { Work } from "@/components/Work";
import { Visuals } from "@/components/Visuals";
import { Writing } from "@/components/Writing";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace(/^#/, "");
    if (!hash) return;
    // Wait a tick for layout
    const id = window.setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
      }
    }, 50);
    return () => window.clearTimeout(id);
  }, [location.hash]);

  return (
    <>
      <Hero />
      <About />
      <DesignPhilosophy />
      <Work />
      <Visuals />
      <Writing />
      <Contact />
    </>
  );
}
