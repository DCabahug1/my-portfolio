"use client";
import Header from "@/components/header/Header";
import ProjectCard from "@/components/sections/projects/ProjectCard";
import { projectsList } from "@/lib/data/projects";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

function ProjectsPage() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex flex-col w-full max-w-6xl px-4 py-16 gap-8">
        <Link href='/'>
        <Button>
            <ArrowLeft className="size-4" />
            Back to Home
          </Button>
        </Link>
        {/* Heading */}
        <div className="flex flex-col items-center sm:items-start gap-2">
          <h2 className="text-primary text-xl md:text-2xl">All Work</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium">
            All Projects
          </h1>
        </div>

        {/* Cards */}
        <div className="w-full flex flex-col gap-5">
          {projectsList.map((project) => (
            <Dialog key={project.title}>
              <DialogTrigger asChild>
                <div>
                  <ProjectCard {...project} />
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>{project.title}</DialogTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                    <Button
                      type="button"
                      variant="default"
                      className=""
                      disabled
                    >
                      View Repository
                      <Github className="size-4" />
                    </Button>
                  )}
                  {project.demo_link ? (
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
                  ) : (
                    <Button
                      type="button"
                      variant="outline"
                      className=""
                      disabled
                    >
                      Live Demo
                      <ExternalLink className="size-4" />
                    </Button>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
