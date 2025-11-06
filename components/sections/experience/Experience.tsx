import React from "react";
import { ExperienceItem } from "@/lib/data/experiences";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

function Experience({
  experience,
  isEnd,
}: {
  experience: ExperienceItem;
  isEnd?: boolean;
}) {
  return (
    <div className="flex gap-8 justify-end w-full">
      {/* Timeline Dot and Line */}
      <h2 className="hidden lg:block text-lg font-semibold text-nowrap">
        {experience.date}
      </h2>
      <div className="flex flex-col items-center">
        <div className="rounded-full h-10 w-10 bg-primary">{/* Icon */}</div>
        {!isEnd ? <div className="h-full w-0.5 bg-primary"></div> : null}
      </div>
      {/* Experience Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 py-4"
      >
        <Image
          src={experience.imgSrc}
          alt={experience.role}
          width={200}
          height={200}
          className="rounded-lg object-cover h-64 sm:h-80 w-full max-w-2xl border-2 border-primary"
        />
        <div className="flex flex-col gap-2">

        <h2 className="text-lg font-semibold">{experience.role}</h2>
        <p className="text-sm text-muted-foreground">{experience.location}</p>
        <p className="lg:hidden text-sm font-semibold">{experience.date}</p>
        <p className="max-w-2xl">{experience.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {experience.tags.map((tag, index) => (
            <Badge
              key={index}
              className="badge"
              style={{ backgroundColor: tag.background, color: tag.foreground }}
            >
              {tag.title}
            </Badge>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;
