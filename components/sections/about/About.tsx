"use client";
import { motion } from "motion/react";
import { fadeUp } from "@/components/sections/hero/variants";
import AboutTag from "./AboutTag";
import { Code2, BrainCircuit, Rocket, Users } from "lucide-react";

const tags = [
  { icon: Code2, label: "Full-Stack Development" },
  { icon: BrainCircuit, label: "AI & Machine Learning" },
  { icon: Rocket, label: "Rapid Prototyping" },
  { icon: Users, label: "Technical Leadership" },
];

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
        I am a <span className="text-primary">Computer Science</span> major at{" "}
        <span className="text-primary">
          California State University, Northridge
        </span>{" "}
        pursuing a minor in <span className="text-primary">Data Science</span>.
        I focus on building{" "}
        <span className="text-primary">full-stack applications</span> that
        combine modern web technologies with{" "}
        <span className="text-primary">AI systems</span>. My work often centers
        on creating practical tools such as{" "}
        <span className="text-primary">AI learning platforms</span>,
        accessibility software, and scalable web applications. I enjoy leading{" "}
        <span className="text-primary">technical teams</span>, designing{" "}
        <span className="text-primary">system architecture</span>, and turning
        ideas into working products through rapid prototyping and{" "}
        <span className="text-primary">hackathons</span>. My goal is to continue
        developing software that solves meaningful problems while growing as an
        engineer in <span className="text-primary">AI</span> and large-scale
        systems.
      </motion.p>
      <motion.div
        className="flex flex-wrap justify-center sm:justify-start gap-2"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.3}
      >
        {tags.map((tag) => (
          <AboutTag key={tag.label} icon={tag.icon} label={tag.label} />
        ))}
      </motion.div>
    </div>
  );
}

export default About;
