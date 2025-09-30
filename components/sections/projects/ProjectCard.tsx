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
  tags: {title: string, priority: string}[];
  link: string;
}) {
  const checkCharsInTags = () => {
    // return total characters in all tags

    let totalChars = 0;
    tags.forEach((tag) => {
      totalChars += tag.title.length;
    });
    return totalChars;
  };

  return (
    <div className="p-1">
      <Card
        className="p-0 overflow-hidden cursor-pointer hover:border-primary transition-all duration-200"
        onClick={() => window.open(link, "_blank")}
      >
        <CardContent className="flex flex-col aspect-3/4 items-center p-0 h-full w-full">
          {imgURL && (
            <Image
              src={imgURL}
              alt={title}
              width={200}
              height={100}
              className="w-full h-[50%] min-h-[50%] object-cover"
            />
          )}
          {!imgURL && (
            <div className="w-full h-[50%] min-h-[50%] bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">No Image</span>
            </div>
          )}

          <div className="flex flex-col h-full max-h-[50%] w-full items-center justify-between p-4 gap-2">
            <div className="flex flex-col items-center gap-2">
              <CardTitle className="lg:text-xl">{title}</CardTitle>
              <CardDescription className="text-center w-full">
                {description}
              </CardDescription>
            </div>
            {/* Marquee container for small/medium screens */}
            <div className="flex items-center w-full h-[50%] ">
              <div className="relative w-full overflow-hidden p-2 lg:hidden">
                <div
                  className={`flex gap-2 ${
                    tags.length > 3 || checkCharsInTags() > 20
                      ? "animate-marquee"
                      : "flex-wrap"
                  }`}
                  style={{
                    whiteSpace:
                      tags.length > 3 || checkCharsInTags() > 20
                        ? "nowrap"
                        : "normal",
                  }}
                >
                  {tags.map((tag, index) => (
                    <Badge key={"tag-" + index} className="shrink-0" variant={tag.priority == 'high' ? 'default' : tag.priority == 'medium' ? 'outline' : 'secondary'}>
                      {tag.title}
                    </Badge>
                  ))}
                  {(tags.length > 3 || checkCharsInTags() > 20) &&
                    tags.map((tag, index) => (
                      <Badge key={"tag-" + index} className="shrink-0" variant={tag.priority == 'high' ? 'default' : tag.priority == 'medium' ? 'outline' : 'secondary'}>
                        {tag.title}
                      </Badge>
                    ))}
                </div>
              </div>
              {/* Wrapped container for large screens */}

              <div className="hidden lg:flex w-full h-min gap-2 p-2 flex-wrap justify-start">
                {tags.map((tag, index) => (
                  <Badge key={"tag-" + index} variant={tag.priority == 'high' ? 'default' : tag.priority == 'medium' ? 'outline' : 'secondary'}>{tag.title}</Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProjectCard;
