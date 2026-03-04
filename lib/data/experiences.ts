import { getBadgeStyling } from "./badgeStyling";

export interface ExperienceItem {
  imgSrc: string;
  date: string;
  role: string;
  location: string;
  impacts: string[];
  tags: {
    title: string;
    priority: string;
    background: string;
    foreground: string;
    icon: string;
  }[];
}

export const experienceList: ExperienceItem[] = [
  {
    imgSrc: "/images/CodeForACause.jpg",
    date: "Nov 2025",
    role: "Tech Lead / Fullstack Developer",
    location: "Code for a Cause Hackathon · CSUN Society of Software Engineers",
    impacts: [
      "Led development of an AI-powered platform addressing accessibility challenges",
      "Architected fullstack application using modern web technologies",
      "Integrated machine learning models to analyze and interpret user input",
      "Coordinated a cross-functional team to deliver a working MVP within 24 hours",
    ],
    tags: [
      {
        title: "Next.js",
        priority: "high",
        ...getBadgeStyling("Next.js"),
      },
      {
        title: "React",
        priority: "high",
        ...getBadgeStyling("React"),
      },
      {
        title: "Supabase",
        priority: "high",
        ...getBadgeStyling("Supabase"),
      },
      {
        title: "AI/ML",
        priority: "high",
        ...getBadgeStyling("AI/ML"),
      },
      {
        title: "PostgreSQL",
        priority: "medium",
        ...getBadgeStyling("PostgreSQL"),
      },
      {
        title: "Team Leadership",
        priority: "low",
        ...getBadgeStyling("Team Leadership"),
      },
    ],
  },
  {
    imgSrc: "/images/ClubConnect.jpg",
    date: "Oct 2025",
    role: "Fullstack Developer",
    location: "NextGen Hacks 2025 · CSUN Society of Software Engineers",
    impacts: [
      "Built ClubConnect with a team of 6",
      "Earned 2nd place at CSUN's NextGen Hacks",
      "Integrated Instagram and Discord APIs for automated posting",
      "Designed scalable backend schema with Supabase and PostgreSQL",
    ],
    tags: [
      { title: "Next.js", priority: "high", ...getBadgeStyling("Next.js") },
      { title: "Tailwind", priority: "medium", ...getBadgeStyling("Tailwind") },
      { title: "Shadcn-UI", priority: "medium", ...getBadgeStyling("Shadcn-UI") },
      { title: "PostgreSQL", priority: "high", ...getBadgeStyling("PostgreSQL") },
      { title: "Supabase", priority: "high", ...getBadgeStyling("Supabase") },
      { title: "APIs", priority: "low", ...getBadgeStyling("APIs") },
    ],
  },
  {
    imgSrc: "/images/VCDCSS.jpeg",
    date: "Jun 2024 - Aug 2024",
    role: "Software Engineering Intern",
    location: "Ventura County Department of Child Support Services",
    impacts: [
      "Automated deployment across 100+ machines",
      "Reduced repetitive installs",
      "Redesigned ASP.NET intranet pages for 200+ users",
      "Resolved recurring hardware and software failures",
    ],
    tags: [
      { title: "SCCM", priority: "high", ...getBadgeStyling("SCCM") },
      { title: "ASP.NET", priority: "high", ...getBadgeStyling("ASP.NET") },
      { title: "IT Support", priority: "medium", ...getBadgeStyling("IT Support") },
      { title: "Helpdesk", priority: "medium", ...getBadgeStyling("Helpdesk") },
      { title: "Authentication", priority: "low", ...getBadgeStyling("Authentication") },
    ],
  },
];
