"use client";
import { motion } from "motion/react";
import { fadeUp } from "@/components/sections/hero/variants";

function About() {
  return (
    <div className="w-full flex flex-col items-center sm:items-start justify-center gap-4 py-16">
      <motion.div
        className="flex flex-col items-center sm:items-start justify-center gap-2"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
      >
        <h2 className="text-primary text-xl md:text-2xl">About</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium">
          Who Am I?
        </h1>
      </motion.div>
      <motion.p
        className="w-full max-w-4xl text-muted-foreground text-base md:text-lg text-center sm:text-left leading-relaxed"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.15}
      >
        I am a{" "}
        <strong className="font-semibold text-foreground">
          Computer Science
        </strong>{" "}
        major at{" "}
        <strong className="font-semibold text-foreground">
          California State University, Northridge
        </strong>{" "}
        pursuing a minor in{" "}
        <strong className="font-semibold text-foreground">Data Science</strong>.
        I focus on building{" "}
        <strong className="font-semibold text-foreground">
          full-stack applications
        </strong>{" "}
        that combine modern web technologies with{" "}
        <strong className="font-semibold text-foreground">AI systems</strong>.
        My work often centers on creating practical tools such as{" "}
        <strong className="font-semibold text-foreground">
          AI learning platforms
        </strong>
        , accessibility software, and scalable web applications. I enjoy leading{" "}
        <strong className="font-semibold text-foreground">
          technical teams
        </strong>
        , designing{" "}
        <strong className="font-semibold text-foreground">
          system architecture
        </strong>
        , and turning ideas into working products through rapid prototyping and{" "}
        <strong className="font-semibold text-foreground">hackathons</strong>.
        My goal is to continue developing software that solves meaningful
        problems while growing as an engineer in{" "}
        <strong className="font-semibold text-foreground">AI</strong> and
        large-scale systems.
      </motion.p>
    </div>
  );
}

export default About;
