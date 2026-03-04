import { LucideIcon } from "lucide-react";

function AboutTag({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
      <Icon className="size-4 shrink-0 text-primary" />
      {label}
    </div>
  );
}

export default AboutTag;
