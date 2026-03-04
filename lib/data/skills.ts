export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "C++", "Java"],
  },
  {
    name: "Frameworks",
    skills: ["React", "React Native", "Next.js", "Node.js", "Express", "FastAPI", "ASP.NET"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "Supabase", "MySQL", "Firebase"],
  },
  {
    name: "AI & Machine Learning",
    skills: ["OpenAI API", "MediaPipe", "Scikit-learn", "Random Forest", "Computer Vision"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Vercel", "Netlify", "Expo", "Supabase Edge Functions", "Microsoft SCCM", "Imprivata"],
  },
];
