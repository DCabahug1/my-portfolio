import React from "react";
import { ExperienceItem } from "@/lib/data/experiences";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { getIcon } from "@/components/Icones/LogoIcons";

function Experience({
  experience,
  isEnd,
}: {
  experience: ExperienceItem;
  isEnd?: boolean;
}) {
  return (
    <div className="flex gap-8 justify-end w-full">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="hidden lg:block text-lg font-semibold text-nowrap"
      >
        {experience.date}
      </motion.h2>
      {/* Timeline Dot and Line */}
      <div className="flex flex-col items-center">
        <div className="rounded-full h-10 w-10 border-white border-4 shadow-2xl ">
          {/* Icon */}
        </div>
        {!isEnd ? <div className="h-full w-0.5 bg-white "></div> : null}
      </div>
      {/* Experience Content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-col pt-2"
      >
        <p className="lg:hidden font-semibold">{experience.date}</p>
        <div className="flex flex-col gap-4 pb-4 pt-2 ">
          <Image
            src={experience.imgSrc}
            alt={experience.role}
            width={1200}
            height={1200}
            className="rounded-lg object-cover h-64 sm:h-80 w-full max-w-2xl border-3 border-white shadow-lg"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">{experience.role}</h2>
            <p className="text-foreground/60">{experience.location}</p>
            <p className="max-w-2xl">{experience.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag, index) => (
              <Badge
                key={index}
                className="badge"
                style={{
                  backgroundColor: tag.background,
                  color: tag.foreground,
                }}
              >
                {getIcon(tag.icon, { className: "w-4 h-4" })}
                {tag.title}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;
