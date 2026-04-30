/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  challenges: string[];
  roadmap: string[];
  links: {
    live?: string;
    serverRepo?: string;
    clientRepo?: string;
  };
  detailsImage: string;
  vsn: string;
}

export const PROJECTS: Project[] = [
  {
    id: "medinest",
    title: "Medi Nest - Online Pharmacy & Healthcare Platform",
    description: "A full-stack enterprise solution featuring real-time inventory tracking, secure payment integration, and a custom CMS.",
    longDescription: "MediNest is a comprehensive online pharmacy and healthcare platform designed to provide seamless access to medicines and medical services. It features a robust e-commerce system for drug purchases, appointment booking for healthcare professionals, and a centralized patient health record management system.",
    image: "/medinest1.png",
    detailsImage: "/medinest2.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Stripe", "Firebase", "Framer Motion", "shadcn/ui"],
    challenges: [
      "Managing synchronized state across multi-step checkout processes while ensuring data persistence and real-time inventory locking.",
      "Optimized database queries and implemented Redis caching to reduce catalog load times by 40%."
    ],
    roadmap: [
      "Integrating a recommendation engine to provide personalized product suggestions based on user browsing behavior.",
      "Expanding the platform to support dynamic currency conversion and localized tax calculations for international markets."
    ],
    links: {
      live: "https://medinest-client-pearl.vercel.app",
      serverRepo: "https://github.com/RejwanulIslam/MediNest-Server",
      clientRepo: "https://github.com/RejwanulIslam/Medi-Nest-Client"
    },
    vsn: "v2.4.0"
  },
  {
    id: "restaurant-management",
    title: "Restaurant Management System",
    description: "Bistro Boss, a full-stack web application designed to streamline restaurant operations, including menu management, user authentication, and payment processing.",
    longDescription: "Bistro Boss - Restaurant Management System Welcome to Bistro Boss, a full-stack web application designed to streamline restaurant operations, including menu management, user authentication, and payment processing. This project showcases a modern, responsive, and feature-rich platform built with React, Firebase, and Stripe, offering both user and admin functionalities for an enhanced dining experience. 🚀 Features",
    image: "/bistro.png",
    detailsImage: "/bistro.png",
    tags: ["Java  Script", "Firebase", "Tailwind CSS", "React", "Stripe", "HTML", "CSS"],
    challenges: [
      "Implementing optimistic updates for real-time collaboration without race conditions.",
      "Scaling the backend to handle thousands of concurrent users with minimal latency."
    ],
    roadmap: [
      "Adding voice commands for task creation and movement.",
      "AI-powered time estimation based on historical data."
    ],
    links: {
      live: "https://bistro-boss-233c4.web.app",
      serverRepo: "https://github.com/RejwanulIslam/bistro-boss-server",
      clientRepo: "https://github.com/RejwanulIslam/bistro-boss-client"
    },
    vsn: "v1.2.0"
  },
  {
    id: "building-management-system",
    title: "Building Management System",
    description: "A full-featured Building Management System (BMS) for managing apartments, agreements, payments, and announcements in a single building.",
    longDescription: "Welcome to Skyline Residency, a premium building management system designed to streamline apartment living. This comprehensive platform allows landlords to manage tenants, agreements, and payments seamlessly, while providing residents with easy access to services, announcements, and maintenance requests.",
    image: "/skyline.png",
    detailsImage: "/skyline.png",
    tags: ["React", "JavaScript, React, Tailwind CSS, TanStack Query Node.js, Express.js, MongoDB"],
    challenges: [
      "Integrating disparate bank APIs with varying data formats into a unified schema.",
      "Developing a high-performance chart engine for visualizing decade-long financial trends."
    ],
    roadmap: [
      "Gamified savings goals with social sharing features.",
      "Tax filing assistance module for automated reports."
    ],
    links: {
      live: "https://skyline-residency.web.app",
      serverRepo: "https://github.com/RejwanulIslam/skyline-residency-server",
      clientRepo: "https://github.com/RejwanulIslam/skyline-residency-client"
    },
    vsn: "v3.0.1"
  }
];

export const SKILLS = [
  { name: "React.js", icon: "Zap", color: "blue" },
  { name: "TypeScript", icon: "Terminal", color: "blue" },
  { name: "Tailwind CSS", icon: "Palette", color: "blue" },
  { name: "Node.js", icon: "Database", color: "blue" },
  { name: "AWS", icon: "Cloud", color: "blue" },
  { name: "UI/UX Design", icon: "Architecture", color: "blue" }
];
