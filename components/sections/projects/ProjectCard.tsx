"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

function ProjectCard({
  imgURL,
  title,
  description,
  tags,
  link,
}: {
  imgURL: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}) {
  const checkCharsInTags = () => {
    // return total characters in all tags

    let totalChars = 0;
    tags.forEach((tag) => {
      totalChars += tag.length;
    });
    return totalChars;
  };

  return (
    <div className="p-1">
      <Card className="p-0 overflow-hidden cursor-pointer hover:border-primary transition-all duration-200" onClick={() => window.open(link, "_blank")}>
        <CardContent className="flex flex-col aspect-3/4 items-center p-0 h-full">
          <Image
            src={imgURL}
            alt={title}
            width={200}
            height={100}
            className="w-full h-[50%] min-h-[50%] object-cover"
          />

          <div className="flex flex-col h-full w-full items-center justify-around p-2">
            <div className="flex flex-col items-center gap-2">
              <CardTitle className="lg:text-xl">{title}</CardTitle>
              <CardDescription className="text-center w-full">
                {description}
              </CardDescription>
            </div>
            {/* Marquee container for small/medium screens */}
            <div className="relative w-full overflow-hidden p-2 lg:hidden">
              <div
                className={`flex gap-2 ${
                  tags.length > 3 || checkCharsInTags() > 20
                    ? "animate-marquee whitespace-nowrap"
                    : ""
                }`}
              >
                {tags.map((tag, index) => (
                  <Badge key={"tag-" + index} className="shrink-0">
                    {tag}
                  </Badge>
                ))}
                {(tags.length > 3 || checkCharsInTags() > 20) &&
                  tags.map((tag, index) => (
                    <Badge key={"tag-" + index} className="shrink-0">
                      {tag}
                    </Badge>
                  ))}
              </div>
            </div>
            {/* Wrapped container for large screens */}
            <div className="hidden lg:flex w-full gap-2 p-2 flex-wrap justify-start">
              {tags.map((tag, index) => (
                <Badge key={"tag-" + index}>{tag}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProjectCard;
