"use client";

import React from "react";
import {motion} from "motion/react";

function About() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
    <div className="flex flex-col items-center justify-center gap-2">
      <h2 className="xl:hidden text-3xl font-bold">About Me</h2>
      <p className="text-md xl:text-lg text-center xl:text-left max-w-2xl leading-8 xl:leading-12">
        I am a <strong>Computer Science major</strong> at{" "}
        <strong>California State University, Northridge</strong> with experience
        in{" "}
        <strong>software development</strong> and{" "}
        <strong>system administration</strong>. I specialize in building{" "}
        full-stack applications with <strong>Next.js</strong>,{" "}
        <strong>React</strong>,{" "}
        <strong>PostgreSQL</strong>, and{" "}
        <strong>Supabase</strong>, and I am skilled in languages like{" "}
        <strong>JavaScript</strong>, <strong>Python</strong>,{" "}
        <strong>TypeScript</strong>, <strong>Java</strong>, and{" "}
        <strong>C++</strong>. I’ve also worked with professional tools such as{" "}
        <strong>Microsoft SCCM</strong>, <strong>ASP.NET</strong>, and{" "}
        <strong>Git/GitHub</strong>. I’m driven by building{" "}
        <strong>practical, user-focused solutions</strong> and am eager to
        continue growing in <strong>software engineering</strong> and{" "}
        <strong>IT roles</strong>.
      </p>
    </div>
    </motion.div>
      );
}

export default About;
