import React from "react";
import Header from "@/components/header/Header";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Projects from "@/components/sections/projects/Projects";

function page() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex flex-col items-center w-full max-w-6xl px-4">
        <Hero />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default page;
