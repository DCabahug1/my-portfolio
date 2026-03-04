import Image from "next/image";

interface Tag {
  title: string;
  priority: string;
  background: string;
  foreground: string;
  icon: string;
}

interface ProjectCardProps {
  imgURL: string;
  title: string;
  description: string;
  impacts?: string[];
  tags: Tag[];
  demo_link?: string;
  repo_link?: string;
}

function ProjectCard({ imgURL, title, description, impacts, tags }: ProjectCardProps) {
  return (
    <div className="w-full flex flex-col sm:flex-row rounded-xl border border-border bg-card overflow-hidden cursor-pointer hover:border-primary/40 transition-colors">
      {/* Image */}
      <div className="relative w-full sm:w-[42%] shrink-0 aspect-video sm:aspect-auto sm:min-h-[220px]">
        <Image
          src={imgURL}
          alt={title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, 42vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between gap-4 p-5 sm:p-6 flex-1 min-w-0">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>

          {impacts && impacts.length > 0 && (
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Impact
              </span>
              <ul className="flex flex-col gap-1">
                {impacts.map((impact) => (
                  <li key={impact} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-[7px] size-1.5 rounded-full bg-primary shrink-0" />
                    {impact}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag.title}
              className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
            >
              {tag.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
