import { getBadgeStyling } from "./badgeStyling";

// Projects
export const projectsList = [
  {
    imgURL: "/images/Memos.png",
    title: "Memos",
    description: "Note-taking app with Supabase auth, SSR, and AI reflections",
    tags: [
      {
        title: "Next.js",
        priority: "high",
        ...getBadgeStyling("Next.js"),
      },
      {
        title: "Supabase",
        priority: "high",
        ...getBadgeStyling("Supabase"),
      },
      {
        title: "Tailwind",
        priority: "medium",
        ...getBadgeStyling("Tailwind"),
      },
      {
        title: "Vercel",
        priority: "low",
        ...getBadgeStyling("Vercel"),
      },
    ],
    link: "https://memos.vercel.app/",
  },
  {
    imgURL: "/images/ChatLink.png",
    title: "ChatLink",
    description: "Real-time chat app with Firebase",
    tags: [
      {
        title: "React JS",
        priority: "high",
        ...getBadgeStyling("React JS"),
      },
      {
        title: "Firebase",
        priority: "high",
        ...getBadgeStyling("Firebase"),
      },
      {
        title: "Tailwind",
        priority: "medium",
        ...getBadgeStyling("Tailwind"),
      },
      {
        title: "Netlify",
        priority: "low",
        ...getBadgeStyling("Netlify"),
      },
    ],
    link: "https://dcabahug1-chatlinkv2.netlify.app/",
  },
  {
    imgURL: "/images/Weatherly.png",
    title: "Weatherly",
    description: "Weather forecast app with location services",
    tags: [
      {
        title: "React JS",
        priority: "high",
        ...getBadgeStyling("React JS"),
      },
      {
        title: "Weather API",
        priority: "high",
        ...getBadgeStyling("Weather API"),
      },
      {
        title: "Tailwind",
        priority: "medium",
        ...getBadgeStyling("Tailwind"),
      },
      {
        title: "Vercel",
        priority: "low",
        ...getBadgeStyling("Vercel"),
      },
    ],
    link: "https://dc-weatherly.vercel.app/",
  },
  {
    imgURL: "/images/ToDo_List.png",
    title: "To-Do List",
    description: "Task management app with cloud sync",
    tags: [
      {
        title: "React JS",
        priority: "high",
        ...getBadgeStyling("React JS"),
      },
      {
        title: "Firebase",
        priority: "high",
        ...getBadgeStyling("Firebase"),
      },
      {
        title: "Netlify",
        priority: "low",
        ...getBadgeStyling("Netlify"),
      },
    ],
    link: "https://dcabahug-to-do-list.netlify.app/",
  },
];
