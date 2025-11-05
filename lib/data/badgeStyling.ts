export interface BadgeStyle {
  background: string;
  foreground: string;
  icon: string;
}

export function getBadgeStyling(name: string): BadgeStyle {
  switch (name) {
    case "Next.js":
      return { background: "#000000", foreground: "#FFFFFF", icon: "Next.js" };
    case "React JS":
      return { background: "#1E88E5", foreground: "#FFFFFF", icon: "React" };
    case "Supabase":
      return { background: "#2E8B57", foreground: "#FFFFFF", icon: "Supabase" };
    case "Firebase":
      return { background: "#FF8F00", foreground: "#FFFFFF", icon: "Firebase" };
    case "Tailwind":
      return { background: "#1976D2", foreground: "#FFFFFF", icon: "Tailwind" };
    case "Weather API":
      return { background: "#0284C7", foreground: "#FFFFFF", icon: "API" };
    case "Vercel":
      return { background: "#000000", foreground: "#FFFFFF", icon: "Vercel" };
    case "Netlify":
      return { background: "#00695C", foreground: "#FFFFFF", icon: "Netlify" };
    case "SCCM":
      return { background: "#0078D4", foreground: "#FFFFFF", icon: "Computer" };
    case "ASP.NET":
      return { background: "#512BD4", foreground: "#FFFFFF", icon: "Microsoft" };
    case "IT Support":
      return { background: "#6B7280", foreground: "#FFFFFF", icon: "Headset" };
    case "Helpdesk":
      return { background: "#059669", foreground: "#FFFFFF", icon: "Headset" };
    case "Authentication":
      return { background: "#DC2626", foreground: "#FFFFFF", icon: "Lock" };
    case "Shadcn-UI":
      return { background: "#18181B", foreground: "#FFFFFF", icon: "Book" };
    case "PostgreSQL":
      return { background: "#336791", foreground: "#FFFFFF", icon: "PostgreSQL" };
    case "APIs":
      return { background: "#0284C7", foreground: "#FFFFFF", icon: "API" };
    default:
      return { background: "#6B7280", foreground: "#FFFFFF", icon: "" };
  }
}
