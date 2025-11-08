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
      <div className="flex flex-col pt-2">
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="lg:hidden font-semibold"
        >
          {experience.date}
        </motion.p>
        <div className="flex flex-col gap-4 pb-4 pt-2 ">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={experience.imgSrc}
              alt={experience.role}
              width={1200}
              height={1200}
              className="rounded-lg object-cover h-64 sm:h-80 w-full max-w-2xl border-3 border-white shadow-lg"
            />
          </motion.div>
          <div className="flex flex-col gap-2">
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg font-semibold"
            >
              {experience.role}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-foreground/60"
            >
              {experience.location}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              {experience.description}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
