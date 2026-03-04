"use client";
import { motion } from "motion/react";
import { fadeUp } from "@/components/sections/hero/variants";
import { experienceList } from "@/lib/data/experiences";
import { educationList } from "@/lib/data/education";
import { GraduationCap, Briefcase } from "lucide-react";

function Experience() {
  return (
    <section className="w-full flex flex-col items-center sm:items-start gap-8 py-16">
      {/* Heading */}
      <motion.div
        className="flex flex-col items-center sm:items-start gap-2 w-full text-center sm:text-left"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
      >
        <h2 className="text-primary text-xl md:text-2xl">Background</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center sm:text-left">
          <span className="block sm:inline">Experience</span>
          <span className="block sm:inline"> &amp; </span>
          <span className="block sm:inline">Education</span>
        </h1>
      </motion.div>

      {/* Timeline */}
      <div className="w-full flex flex-col">
        {/* Experience entries */}
        {experienceList.map((item, i) => (
          <motion.div
            key={item.role + item.date}
            className="relative flex gap-5 last:pb-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i * 0.1}
          >
            {/* Timeline spine */}
            <div className="flex flex-col items-center shrink-0">
              <div className="flex items-center justify-center size-9 rounded-full bg-primary text-primary-foreground shrink-0">
                <Briefcase className="size-4" />
              </div>
              <div className="w-px flex-1 bg-border h-full" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 pt-1 pb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Experience
              </span>
              <div>
                <h3 className="text-base font-semibold">{item.role}</h3>
                <p className="text-sm text-muted-foreground">{item.location}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.date}</p>
              </div>
              <ul className="flex flex-col gap-1 mt-1">
                {item.impacts.map((impact) => (
                  <li key={impact} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-[7px] size-1.5 rounded-full bg-primary shrink-0" />
                    {impact}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

        {/* Education entries */}
        {educationList.map((item, i) => (
          <motion.div
            key={item.institution}
            className="relative flex gap-5 last:pb-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={(experienceList.length + i) * 0.1}
          >
            {/* Timeline spine */}
            <div className="flex flex-col items-center shrink-0">
              <div className="flex items-center justify-center size-9 rounded-full bg-muted border border-border text-muted-foreground shrink-0">
                <GraduationCap className="size-4" />
              </div>
              <div className="w-px flex-1 bg-border h-full" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 pt-1 pb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Education
              </span>
              <div>
                <h3 className="text-base font-semibold">{item.institution}</h3>
                <p className="text-sm text-muted-foreground">{item.degree}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Expected graduation: {item.graduation} · GPA: {item.gpa}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
