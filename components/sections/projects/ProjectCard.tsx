"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import React, { Suspense } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import { useEffect, useState } from "react";

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
  tags: {
    title: string;
    priority: string;
    background: string;
    foreground: string;
  }[];
  link: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const checkCharsInTags = () => {
    let totalChars = 0;

    tags.forEach((tag) => {
      totalChars += tag.title.length;
    });

    return totalChars;
  };

  // console.log(tags);

  return (
    <div className="p-1 w-full h-full">
      <Card
        className="p-0 overflow-hidden cursor-pointer hover:border-primary transition-all duration-200 w-full h-full flex flex-col"
        onClick={() => window.open(link, "_blank")}
      >
        <CardContent className="flex flex-col items-center p-0 w-full flex-1">
          {imgURL && (
            <Suspense
              fallback={<Skeleton className="w-full h-40 sm:h-60 md:h-60" />}
            >
              <Image
                src={imgURL}
                alt={title}
                width={200}
                height={100}
                className="flex-none w-full object-cover h-40 sm:h-60 md:h-60"
              />
            </Suspense>
          )}
          {!imgURL && <Skeleton className="w-full h-40 sm:h-60 md:h-60" />}
          <div className="flex flex-1 flex-col items-center gap-2 w-full p-4">
            <CardTitle className="lg:text-xl">{title}</CardTitle>
            <p className="flex flex-1 text-center items-center w-full">{description}</p>
            {/* Marquee container for small/medium screens */}
            
            <Marquee className="rounded-full p-1 overflow-hidden">
              <MarqueeContent
                speed={20}
                autoFill={true}
                pauseOnHover={true}
                gradient={false}
                className="items-center rounded-full"
                
              >
                {tags.map((tag, index) => (
                  <MarqueeItem className="m-1">
                    <Badge
                      key={"tag-marquee-" + index}
                      className="shrink-0"
                      style={{
                        backgroundColor: tag.background,
                        color: tag.foreground,
                      }}
                    >
                      {tag.title}
                    </Badge>
                  </MarqueeItem>
                ))}
              </MarqueeContent>
            </Marquee>

          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProjectCard;
