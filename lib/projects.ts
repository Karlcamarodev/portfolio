export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "content-guardian",
    title: "Content Guardian",
    description:
      "AI-powered content moderation platform built with Next.js 14, TypeScript, and Tailwind CSS. Features modern glassmorphism UI, dark/light themes, and scalable architecture ready for AI integration. Designed for community managers to maintain safe online spaces.",
    image: "/projects/content-guardian.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    liveUrl: "https://content-guardian.vercel.app",
    githubUrl: "https://github.com/Karlcamarodev/content-guardian",
    featured: true,
  },
  {
    id: "tiktok-dashboard",
    title: "TikTok Analytics Dashboard",
    description:
      "Real-time analytics dashboard for TikTok content creators and agencies. Features interactive data visualization with Chart.js, glassmorphism design with gradient accents, and responsive mobile-friendly layout for data-driven decision making.",
    image: "/projects/tiktok-dashboard.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Chart.js", "GitHub Pages"],
    liveUrl: "https://karlcamarodev.github.io/tiktok-dashboard/",
    githubUrl: "https://github.com/Karlcamarodev/tiktok-dashboard",
    featured: true,
  },
  {
    id: "quest-manager",
    title: "Quest Manager",
    description:
      "Gamified task management system that transforms your to-do list into an RPG adventure. Features include XP and leveling system, drag-and-drop task management, progress tracking with Chart.js, daily streak system, and LocalStorage persistence.",
    image: "/projects/quest-manager.png",
    tags: ["HTML5", "CSS3", "JavaScript ES6+", "Chart.js", "LocalStorage"],
    liveUrl: "https://karlcamarodev.github.io/quest-manager/",
    githubUrl: "https://github.com/Karlcamarodev/quest-manager",
    featured: true,
  },
];