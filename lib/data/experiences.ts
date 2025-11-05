import { getBadgeStyling } from "./badgeStyling";

export const experienceList = [
  {
    imgSrc: "/images/VCDCSS.jpeg",
    title: "System Administration Intern",
    location: "Ventura County Department of Child Support Services",
    description:
      "Distributed and installed new technology, provided helpdesk support, deployed applications using SCCM, redesigned intranet sites with ASP.NET, and managed secure authentication with Imprivata.",
    tags: [
      { title: "SCCM", priority: "high", ...getBadgeStyling("SCCM") },
      {
        title: "ASP.NET",
        priority: "high",
        ...getBadgeStyling("ASP.NET"),
      },
      {
        title: "IT Support",
        priority: "medium",
        ...getBadgeStyling("IT Support"),
      },
      {
        title: "Helpdesk",
        priority: "medium",
        ...getBadgeStyling("Helpdesk"),
      },
      {
        title: "Authentication",
        priority: "low",
        ...getBadgeStyling("Authentication"),
      },
    ],
  },

  {
    imgSrc: "/images/ClubConnect.jpg",
    title: "Fullstack Developer",
    location: "NextGen Hacks 2025, CSUN Society of Software Engineers",
    description:
      "Built ClubConnect with a team of 6, a platform for students to discover clubs and for leaders to post once to Discord and Instagram. Developed full-stack features with Next.js, Tailwind, Shadcn-UI, PostgreSQL, and Supabase.",
    tags: [
      {
        title: "Next.js",
        priority: "high",
        ...getBadgeStyling("Next.js"),
      },
      {
        title: "Tailwind",
        priority: "medium",
        ...getBadgeStyling("Tailwind"),
      },
      {
        title: "Shadcn-UI",
        priority: "medium",
        ...getBadgeStyling("Shadcn-UI"),
      },
      {
        title: "PostgreSQL",
        priority: "high",
        ...getBadgeStyling("PostgreSQL"),
      },
      {
        title: "Supabase",
        priority: "high",
        ...getBadgeStyling("Supabase"),
      },
      { title: "APIs", priority: "low", ...getBadgeStyling("APIs") },
    ],
  },
];
