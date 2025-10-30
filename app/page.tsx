"use client";

import Projects from "@/components/sections/projects/Projects";
import Contact from "@/components/sections/contact/Contact";
import Home from "@/components/sections/home/Home";
import AboutMobile from "@/components/sections/aboutMobile/AboutMobile";
import React from "react";
import { Button } from "@/components/ui/button";
import ExperienceList from "@/components/sections/experience/ExperienceList";
import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";

function page() {
  return (
    <div className="flex flex-col items-center font-sans p-8 w-full">
      <Home />
      <AboutMobile />
      <Button className="w-48 h-min text-xl hover:shadow-[0_0_20px_0_#000] hover:shadow-primary/80 m-8">
        <a href="/Duane_Cabahug_Resume.pdf" target="_blank">
          View Resume
        </a>
      </Button>
      <ExperienceList />
      <Projects />
      <Contact />
    </div>
  );
}

export default page;
