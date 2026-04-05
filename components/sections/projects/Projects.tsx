"use client";
import { motion } from "motion/react";
import { fadeUp } from "@/components/sections/hero/variants";
import { projectsList } from "@/lib/data/projects";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

function Projects() {
  const featured = projectsList.slice(0, 3);

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
        <h2 className="text-primary text-xl md:text-2xl">Featured Work</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium">
          Projects
        </h1>
      </motion.div>

      {/* Cards */}
      <div className="w-full flex flex-col gap-5">
        {featured.map((project, i) => (
          <Dialog key={project.title}>
            <DialogTrigger asChild>
              <motion.div
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                custom={i * 0.1}
              >
                <ProjectCard {...project} />
              </motion.div>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>{project.title}</DialogTitle>
              <div className={`grid grid-cols-1 ${project.demo_link ? "sm:grid-cols-2" : "sm:grid-cols-1"} gap-2`}>
                {project.repo_link ? (
                  <Button variant="default" className="" asChild>
                    <Link
                      href={project.repo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repository
                      <Github className="size-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button type="button" variant="default" className="" disabled>
                    View Repository
                    <Github className="size-4" />
                  </Button>
                )}
                {project.demo_link && (
                  <Button variant="outline" className="" asChild>
                    <Link
                      href={project.demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <ExternalLink className="size-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {/* View all link */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.3}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Button variant="outline">
            View all projects
            <ArrowRight className="size-4" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}

export default Projects;
