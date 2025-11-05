"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";
import { projectsList } from "@/lib/data/projects";
import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import { motion } from "motion/react";

function Projects() {
  return (
    <motion.div
      id="projects"
      className="flex flex-col items-center p-8 w-full"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{once: true}}
    >
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <Carousel
        className="w-[250px] sm:w-[300px] md:w-[600px] lg:w-[900px]"
        opts={{
          slidesToScroll: "auto",
        }}
      >
        <CarouselContent>
          {projectsList.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <ProjectCard
                imgURL={project.imgURL}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
  );
}

export default Projects;
