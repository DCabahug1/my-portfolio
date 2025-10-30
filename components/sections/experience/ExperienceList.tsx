import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import Experience from "./Experience";
import { experienceList } from "@/lib/data/experiences";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

function ExperienceList() {
  return (
    <div
      id="experience"
      className="flex flex-col items-center justify-center h-min w-full p-8 gap-4"
    >
      <h2 className="text-3xl font-bold">Experience</h2>
      <Card className="w-full max-w-xl p-0 overflow-hidden">
        <Accordion type="single" collapsible className="">
          {experienceList.map((experience, index) => (
            <AccordionItem key={"experience_" + index} value={index.toString()}>
              <AccordionTrigger className="px-6 !no-underline cursor-pointer rounded-none">
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold">{experience.location}</h2>
                  <p className="text-muted-foreground font-thin">{experience.title}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col items-center gap-6 px-6">
                {experience.imgSrc && (
                  <Image
                    src={experience.imgSrc}
                    alt=""
                    height={200}
                    width={300}
                    className="h-64 w-full rounded-lg object-cover overflow-hidden"
                  />
                )}
                <p>{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map((tag, index) => (
                    <Badge key={index}>{tag}</Badge>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </div>
  );
}

export default ExperienceList;
