import React from "react";
import Header from "@/components/header/Header";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Projects from "@/components/sections/projects/Projects";
import Skills from "@/components/sections/skills/Skills";
import Experience from "@/components/sections/experience/Experience";
import CTA from "@/components/sections/cta/CTA";
function page() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex flex-col items-center w-full max-w-6xl px-4">
        <Hero />
        <div id="about" className="w-full scroll-mt-20"><About /></div>
        <div id="skills" className="w-full scroll-mt-20"><Skills /></div>
        <div id="experience" className="w-full scroll-mt-20"><Experience /></div>
        <div id="projects" className="w-full scroll-mt-20"><Projects /></div>
        <div id="contact" className="w-full scroll-mt-20"><CTA /></div>
      </div>
    </div>
  );
}

export default page;
