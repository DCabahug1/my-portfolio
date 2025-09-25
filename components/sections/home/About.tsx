"use client";

import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h2 className="xl:hidden text-3xl font-bold">About Me</h2>
      <p className="text-md xl:text-lg text-center xl:text-left max-w-2xl leading-8 xl:leading-12">
        As a <strong>Computer Science major</strong> at{" "}
        <strong>California State University, Northridge</strong>, I bring a
        versatile skill set including <strong>Java</strong>, <strong>JavaScript</strong>
        , <strong>React</strong>, <strong>HTML</strong>, <strong>CSS</strong>,{" "}
        <strong>Python</strong>, and <strong>C++</strong>. I have hands-on experience
        with the <strong>MERN stack (MongoDB, Express, React, Node.js)</strong> and
        tools such as <strong>Firebase</strong>, <strong>Tailwind</strong>,{" "}
        <strong>ASP.NET</strong>, and <strong>Git/GitHub</strong>. I am actively seeking
        opportunities to apply my skills in <strong>software development</strong>{" "}
        and <strong>information technology</strong>, contributing to{" "}
        <strong>reliable, user-focused solutions</strong>.
      </p>
      {/* Mobile */}
    </div>
  );
}

export default About;
