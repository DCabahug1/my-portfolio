import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Experience({
  imgSrc,
  title,
  location,
  description,
  tags,
}: {
  imgSrc: string;
  title: string;
  location: string;
  description: string;
  tags: string[];
}) {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="h-min w-full border-b">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3>{title}</h3>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
          <Button
            className="cursor-pointer"
            variant="ghost"
            onClick={toggleOpen}
          >
            {open ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
      </div>
      {/* Content */}
      <div
        className={`flex flex-col gap-4 p-6 bg-accent ${
          !open ? "h-0 overflow-hidden" : ""
        } transition-all duration-300 ease-in-out`}
      >
        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
