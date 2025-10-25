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

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center h-min w-full p-8"
    >
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <Carousel className="w-full max-w-[225px] md:max-w-[500px] lg:max-w-[900px]"
      opts={{
        slidesToScroll: "auto",
      }}>
      <CarouselContent>
        {projectsList.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <ProjectCard imgURL={project.imgURL} title={project.title} description={project.description} tags={project.tags} link={project.link}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  );
}

export default Projects;
