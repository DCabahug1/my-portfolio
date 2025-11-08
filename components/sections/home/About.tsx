"use client";

import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h2 className="xl:hidden text-3xl font-bold">About Me</h2>
      <p className="text-foreground/80 text-md font-light xl:text-lg text-center xl:text-left max-w-2xl leading-8 xl:leading-10">
        I am a <strong className="font-bold text-foreground">Computer Science major</strong> at{" "}
        <strong className="font-bold text-foreground">California State University, Northridge</strong> with experience
        in <strong className="font-bold text-foreground">full-stack development</strong> and{" "}
        <strong className="font-bold text-foreground">technical problem-solving</strong>. I focus on building{" "}
        <strong className="font-bold text-foreground">practical, user-centered applications</strong> and have worked
        across the full development lifecycle, from planning and implementation
        to testing and deployment. I’ve gained experience in both{" "}
        <strong className="font-bold text-foreground">team-based projects</strong> and{" "}
        <strong className="font-bold text-foreground">professional environments</strong>, where I’ve learned to adapt
        to real development workflows and contribute to meaningful solutions.
        I’m motivated by <strong className="font-bold text-foreground">continuous learning</strong>, creating{" "}
        <strong className="font-bold text-foreground">impactful software</strong>, and growing into roles that
        strengthen my skills in <strong className="font-bold text-foreground">software engineering</strong> and{" "}
        <strong className="font-bold text-foreground">technology-driven work</strong>.
      </p>
    </div>
      );
}

export default About;
