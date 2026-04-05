import { getBadgeStyling } from "./badgeStyling";

interface Project {
  imgURL: string;
  title: string;
  description: string;
  impacts?: string[];
  tags: {
    title: string;
    priority: string;
    background: string;
    foreground: string;
    icon: string;
  }[];
  demo_link?: string;
  repo_link?: string;
}

// Projects
export const projectsList: Project[] = [
  {
    title: "RPI Security Camera",
    imgURL: "/images/RPI_Cam.avif",
    description:
      "YOLOv8 person detection on a Raspberry Pi: record clips on trigger, FFmpeg encode, upload to Supabase Storage with Postgres metadata.",
    impacts: [
      "End-to-end OpenCV + YOLOv8 pipeline on Raspberry Pi with clip capture on high-confidence detections",
      "FFmpeg H.264 + faststart for browser-playable uploads to Supabase Storage",
      "Pairs with a Next.js dashboard repo for realtime playback and listings",
    ],
    tags: [
      { title: "Python", priority: "high", ...getBadgeStyling("Python") },
      { title: "YOLOv8", priority: "high", ...getBadgeStyling("APIs") },
      { title: "OpenCV", priority: "high", ...getBadgeStyling("APIs") },
      { title: "Supabase", priority: "medium", ...getBadgeStyling("Supabase") },
    ],
    demo_link: "",
    repo_link: "https://github.com/DCabahug1/rpi-security-camera",
  },
  {
    title: "ASLingo",
    imgURL: "/images/ASLingo.jpg",
    description: "AI-powered American Sign Language learning platform.",
    impacts: [
      "Real-time ASL gesture recognition using MediaPipe",
      "Machine learning classification with Random Forest",
      "Built during a 48-hour accessibility hackathon",
    ],
    tags: [
      { title: "React Native", priority: "high", ...getBadgeStyling("React JS") },
      { title: "FastAPI", priority: "high", ...getBadgeStyling("APIs") },
      { title: "MediaPipe", priority: "high", ...getBadgeStyling("APIs") },
      { title: "Supabase", priority: "medium", ...getBadgeStyling("Supabase") },
      { title: "OpenAI", priority: "medium", ...getBadgeStyling("OpenAI") },
    ],
    demo_link: "",
    repo_link: "https://github.com/DCabahug1/Group-1-CFAC",
  },
  {
    title: "TopicTutor",
    imgURL: "/images/TopicTutor.png",
    description: "Adaptive AI learning platform.",
    impacts: [
      "Generates full courses using AI",
      "Adaptive quizzes and mastery testing",
      "AI response validation reduced errors by 70%",
    ],
    tags: [
      {
        title: "Next.js",
        priority: "high",
        ...getBadgeStyling("Next.js"),
      },
      {
        title: "OpenAI",
        priority: "high",
        ...getBadgeStyling("OpenAI"),
      },
      {
        title: "Supabase",
        priority: "medium",
        ...getBadgeStyling("Supabase"),
      },
      {
        title: "Tailwind",
        priority: "medium",
        ...getBadgeStyling("Tailwind"),
      },
    ],
    demo_link: "https://topictutor.vercel.app/",
    repo_link: "https://github.com/DCabahug1/topictutor",
  },
  {
    imgURL: "/images/Memos.png",
    title: "Memos",
    description: "Note-taking app with Supabase auth, SSR, and AI reflections.",
    impacts: [
      "Server-side rendering with Next.js App Router",
      "AI-generated daily reflections on your notes",
      "Full auth flow with Supabase",
    ],
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
    demo_link: "https://memos.vercel.app/",
    repo_link: "https://github.com/DCabahug1/memos",
  },
  {
    imgURL: "/images/ChatLink.png",
    title: "ChatLink",
    description: "Real-time chat app with Firebase.",
    impacts: [
      "Real-time messaging with Firebase listeners",
      "User authentication and persistent sessions",
      "Responsive layout for mobile and desktop",
    ],
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
    demo_link: "https://dcabahug1-chatlinkv2.netlify.app/",
    repo_link: "https://github.com/DCabahug1/ChatLink-v2",
  },
  {
    imgURL: "/images/Weatherly.png",
    title: "Weatherly",
    description: "Weather forecast app with location services.",
    impacts: [
      "Live weather data via external API",
      "Geolocation-based automatic forecasts",
      "7-day extended forecast with icons",
    ],
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
    demo_link: "https://dc-weatherly.vercel.app/",
    repo_link: "https://github.com/DCabahug1/Weatherly",
  },
  {
    imgURL: "/images/ToDo_List.png",
    title: "To-Do List",
    description: "Task management app with cloud sync.",
    impacts: [
      "Real-time sync across devices with Firebase",
      "Task categorization and priority sorting",
      "Clean, minimal UI with drag-and-drop support",
    ],
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
    demo_link: "https://dcabahug-to-do-list.netlify.app/",
    repo_link: "https://github.com/DCabahug1/todo-list",
  },
];
