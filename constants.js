export const METADATA = {
  author: "Bagas Setiaji",
  title: "Portfolio | Bagas Setiaji",
  description:
    "Bagas Setiaji is a passionate Fullstack Software Engineer with 3+ years of experience in architecting, developing, and deploying scalable web and mobile applications.",
  siteUrl: "https://bagassetiaji.dev/",
  twitterHandle: "@bagassetiaji",
  keywords: [
    "Bagas Setiaji",
    "Fullstack Software Engineer",
    "Frontend Engineer",
    "Backend Engineer",
    "Software Engineer",
    "React Developer",
    "Go Developer",
    "Portfolio",
    "Devfolio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Fullstack Engineer",
  "I build web & mobile applications",
  "I craft scalable and maintainable software",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:stjbagas28@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/bagas-setiaji-865664248/",
  },
  {
    name: "github",
    url: "https://github.com/BagasStj",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "javascript",
    "typescript",
    "go",
    "python",
    "kotlin",
    "dart",
    "docker",
    "git",
    "linux",
    "postgresql",
  ],
  librariesAndFrameworks: [
    "react",
    "solidjs",
    "angular",
    "nextjs",
    "tailwindcss",
    "flutter",
    "nestjs",
  ],
  databases: ["postgresql", "mysql", "supabase", "mongodb"],
  other: ["docker", "git", "linux"],
};

// First entry is the featured case study: it's the only project with
// real on-site deployment proof (a live tournament), so it earns the
// larger treatment in the Projects grid instead of an arbitrary pick.
export const PROJECTS = [
  {
    name: "GolfScoreID",
    imageKey: "golfscoreid-dashboard",
    proof: [
      { imageKey: "golfscoreid-pangkalanjati", label: "Padang Golf Pangkalan Jati" },
      {
        imageKey: "kartini-branded-landing",
        label: "Kartini Fun Tournament, Jatinangor National Golf & Resort",
      },
      {
        imageKey: "golfscoreid-titleist-sedayu",
        label: "Titleist Invitational 2026, Sedayu Golf Jakarta",
      },
    ],
    description: "Live tournament scoring with real-time GPS hole monitoring ⛳",
    url: null,
    tech: ["SolidJS", "Go", "React Native", "PostgreSQL", "Docker"],
  },
  {
    name: "SmartGuard",
    imageKey: "smartguard-web-admin",
    description: "Security patrol & shift attendance for field guard teams 🛡️",
    url: null,
    tech: ["Kotlin", "React", "Go", "PostgreSQL"],
  },
  {
    name: "WMS Resto",
    imageKey: "wms-dashboard",
    description: "Warehouse & recipe-costing system for multi-kitchen F&B ops 📦",
    url: null,
    tech: ["React", "Go", "PostgreSQL"],
  },
  {
    name: "Smart WFM",
    imageKey: "smartwfm-dashboard",
    description: "Field workforce & SLA tracking for fiber install crews 📡",
    url: null,
    tech: ["React", "Go", "PostgreSQL", "Docker"],
  },
];

export const WORK_CONTENTS = [
  {
    company: "PT. Decom Feno Mahaka",
    role: "Software Engineer",
    period: "December 2025 – Present",
    location: "Indonesia",
    tags: ["SolidJS", "Go", "React Native", "Convex", "PostgreSQL", "Docker"],
    highlights: [
      {
        title: "Golf Scoring Platform",
        description:
          "Designed and developed a comprehensive golf scoring platform for web, mobile, and tablet applications, enabling real-time score tracking and player statistics management.",
      },
      {
        title: "Tournament Management",
        description:
          "Architected a tournament management system supporting player registration, scheduling, scoring, and live leaderboard synchronization across multiple devices.",
      },
      {
        title: "Golf Course Management",
        description:
          "Built scalable backend services with Go and responsive frontend with SolidJS and React Native. Collaborated with stakeholders to deliver reliable, maintainable software.",
      },
    ],
  },
  {
    company: "PT. Smartelco Solusi Teknologi",
    role: "Fullstack Software Engineer",
    period: "December 2024 – Present",
    location: "Purwokerto, Indonesia",
    tags: ["React", "SolidJS", "Go", "Kotlin", "Python", "PostgreSQL", "Docker"],
    highlights: [
      {
        title: "Workspace Management App",
        description:
          "Developed a native Workspace Management mobile application using Kotlin and Jetpack Compose with a focus on performance and modern Android UI.",
      },
      {
        title: "Real-Time Communication Platform",
        description:
          "Built a real-time enterprise communication platform using React and Go, supporting secure messaging and scalable backend services.",
      },
      {
        title: "AI-Powered Document Processing",
        description:
          "Designed and implemented AI-powered document processing solutions by integrating OCR technologies with LLMs. Developed Telegram and WhatsApp automation bots using Python.",
      },
    ],
  },
  {
    company: "Abisatya Bangun Iman",
    role: "Fullstack Software Engineer (Freelance)",
    period: "February 2026 – March 2026",
    location: "Remote",
    tags: ["Flutter", "Dart", "NestJS", "TypeScript", "Supabase", "PostgreSQL"],
    highlights: [
      {
        title: "Hajj & Umrah Mobile App",
        description:
          "Developed an end-to-end Hajj and Umrah management mobile application using Flutter, delivering a responsive cross-platform experience for pilgrims and administrators.",
      },
      {
        title: "Backend & CMS",
        description:
          "Designed and implemented scalable backend services using NestJS. Built and customized a Content Management System (CMS) to enable administrators to manage pilgrimage packages and schedules.",
      },
      {
        title: "Third-Party Integrations",
        description:
          "Integrated third-party APIs to support real-time notifications and operational workflows, ensuring reliable communication between users and administrators.",
      },
    ],
  },
  {
    company: "PT. Braincode Solutions",
    role: "Frontend Developer",
    period: "July 2022 – November 2024",
    location: "Jakarta / Cilacap, Indonesia",
    tags: ["Angular", "SolidJS", "TypeScript", "Tailwind CSS", "AG Grid", "Highcharts"],
    highlights: [
      {
        title: "Enterprise Dashboards",
        description:
          "Developed enterprise dashboards and business applications using Angular and Angular Material. Built interactive data visualization features with AG Grid, AmCharts, Highcharts, DevExtreme, and Google Maps.",
      },
      {
        title: "Modern Web Interfaces",
        description:
          "Developed modern, responsive web interfaces using SolidJS, Tailwind CSS, and DaisyUI. Optimized frontend performance and resolved production issues across enterprise projects.",
      },
      {
        title: "Team Collaboration",
        description:
          "Collaborated with backend engineers and UI/UX designers to deliver maintainable and scalable web applications. Improved application stability across multiple enterprise client projects over 2+ years.",
      },
    ],
  },
];

export const GTAG = "G-XXXXXXXXXX";



