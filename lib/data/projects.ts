// Color Index
export const tagColors = {
  "Next.js": { background: "#000000", foreground: "#FFFFFF" },     // Black bg, white text
  "React JS": { background: "#61DAFB", foreground: "#FFFFFF" },    // React blue bg, black text
  "Supabase": { background: "#3ECF8E", foreground: "#FFFFFF" },    // Supabase green bg, black text
  "Firebase": { background: "#FFCA28", foreground: "#FFFFFF" },    // Firebase yellow bg, black text
  "Tailwind": { background: "#38BDF8", foreground: "#FFFFFF" },    // Tailwind blue bg, black text
  "Weather API": { background: "#0284C7", foreground: "#FFFFFF" }, // Deep blue bg, white text
  "Vercel": { background: "#000000", foreground: "#FFFFFF" },      // Black bg, white text
  "Netlify": { background: "#00C7B7", foreground: "#FFFFFF" },     // Netlify teal bg, white text
};

// Projects
export const projectsList = [
  {
    imgURL: "/images/Memos.png",
    title: "Memos",
    description: "Note-taking app with Supabase auth, SSR, and AI reflections",
    tags: [
      { title: "Next.js", priority: "high", ...tagColors["Next.js"] },
      { title: "Supabase", priority: "high", ...tagColors["Supabase"] },
      { title: "Tailwind", priority: "medium", ...tagColors["Tailwind"] },
      { title: "Vercel", priority: "low", ...tagColors["Vercel"] },
    ],
    link: "https://memos.vercel.app/",
  },
  {
    imgURL: "/images/ChatLink.png",
    title: "ChatLink",
    description: "Real-time chat app with Firebase",
    tags: [
      { title: "React JS", priority: "high", ...tagColors["React JS"] },
      { title: "Firebase", priority: "high", ...tagColors["Firebase"] },
      { title: "Tailwind", priority: "medium", ...tagColors["Tailwind"] },
      { title: "Netlify", priority: "low", ...tagColors["Netlify"] },
    ],
    link: "https://dcabahug1-chatlinkv2.netlify.app/",
  },
  {
    imgURL: "/images/Weatherly.png",
    title: "Weatherly",
    description: "Weather forecast app with location services",
    tags: [
      { title: "React JS", priority: "high", ...tagColors["React JS"] },
      { title: "Weather API", priority: "high", ...tagColors["Weather API"] },
      { title: "Tailwind", priority: "medium", ...tagColors["Tailwind"] },
      { title: "Vercel", priority: "low", ...tagColors["Vercel"] },
    ],
    link: "https://dc-weatherly.vercel.app/",
  },
  {
    imgURL: "/images/ToDo_List.png",
    title: "To-Do List",
    description: "Task management app with cloud sync",
    tags: [
      { title: "React JS", priority: "high", ...tagColors["React JS"] },
      { title: "Firebase", priority: "high", ...tagColors["Firebase"] },
      { title: "Netlify", priority: "low", ...tagColors["Netlify"] },
    ],
    link: "https://dcabahug-to-do-list.netlify.app/",
  },
];
