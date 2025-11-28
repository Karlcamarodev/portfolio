// Data de los proyectos de Karl Camaro

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  github: string;
  demo: string;
  status: "live" | "in-progress" | "completed";
  category: "web-app" | "dashboard" | "productivity";
  year: string;
}

export const projects: Project[] = [
  {
    id: "content-guardian",
    title: "Content Guardian",
    description: "AI-Powered Content Moderation Platform",
    longDescription:
      "Modern web application for real-time content analysis and moderation using AI. Features automated workflows, sentiment detection, and comprehensive moderation tools for community management.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "AI Integration"],
    features: [
      "Real-time content analysis",
      "AI-powered sentiment detection",
      "Automated moderation workflows",
      "Dark/Light mode support",
      "Responsive design",
      "Modern glassmorphism UI",
    ],
    github: "https://github.com/Karlcamarodev/content-guardian",
    demo: "https://content-guardian-five.vercel.app",
    status: "live",
    category: "web-app",
    year: "2024",
  },
  {
    id: "tiktok-dashboard",
    title: "TikTok Analytics Dashboard",
    description: "Real-time Analytics & Insights Platform",
    longDescription:
      "Interactive dashboard for tracking TikTok metrics and performance analytics. Features real-time data visualization, engagement metrics, and audience insights with modern glassmorphism design.",
    tech: ["HTML5", "CSS3", "JavaScript ES6+", "Chart.js"],
    features: [
      "Real-time metrics tracking",
      "Interactive data charts",
      "Engagement analytics",
      "Audience insights",
      "Glassmorphism design",
      "Fully responsive layout",
    ],
    github: "https://github.com/Karlcamarodev/tiktok-dashboard",
    demo: "https://karlcamarodev.github.io/tiktok-dashboard/",
    status: "live",
    category: "dashboard",
    year: "2024",
  },
  {
    id: "quest-manager",
    title: "Quest Manager",
    description: "Gamified Task Management System",
    longDescription:
      "RPG-style task manager that transforms productivity into an engaging game experience. Features XP system, level progression, achievements, and daily streaks to motivate task completion.",
    tech: ["HTML5", "CSS3", "JavaScript ES6+", "LocalStorage"],
    features: [
      "XP and leveling system",
      "Achievement system",
      "Daily streak tracking",
      "Drag & drop interface",
      "Subtask management",
      "Progress visualization",
    ],
    github: "https://github.com/Karlcamarodev/quest-manager",
    demo: "https://karlcamarodev.github.io/quest-manager/",
    status: "live",
    category: "productivity",
    year: "2024",
  },
];

// Función helper para obtener un proyecto por ID
export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

// Función helper para obtener proyectos por categoría
export function getProjectsByCategory(
  category: Project["category"]
): Project[] {
  return projects.filter((project) => project.category === category);
}

// Función helper para obtener proyectos por estado
export function getProjectsByStatus(status: Project["status"]): Project[] {
  return projects.filter((project) => project.status === status);
}