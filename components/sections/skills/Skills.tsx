"use client";
import { motion } from "motion/react";
import { fadeUp } from "@/components/sections/hero/variants";
import { skillCategories } from "@/lib/data/skills";

function Skills() {
  return (
    <section className="w-full flex flex-col items-center sm:items-start gap-8 py-16">
      {/* Heading */}
      <motion.div
        className="flex flex-col items-center sm:items-start gap-2"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
      >
        <h2 className="text-primary text-xl md:text-2xl">Technical Expertise</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium">Skills</h1>
      </motion.div>

      {/* Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.name}
            className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i * 0.08}
          >
            <h3 className="text-sm font-semibold text-foreground">{category.name}</h3>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
