import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "tnr-erp",
    title: "ERP System — TNR Factory",
    subtitle: "Fullstack ERP for factory operations",
    summary:
      "Fullstack ERP covering packing, warehouse and QA modules for a live factory, built under evolving requirements and shipped to production.",
    overview:
      "An in-house ERP replacing manual factory operations at TNR. Built as a client-side rendered Next.js app on top of a NestJS API and PostgreSQL, covering both desktop and mobile flows used on the production floor. I worked across the whole stack — from design review and database modelling through frontend, backend and deployment.",
    role: "Fullstack Developer",
    stack: ["Next.js (CSR)", "NestJS", "PostgreSQL", "TypeScript"],
    tech: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    featured: true,
    responsibilities: [
      {
        title: "Design review & requirement clarification",
        details: [
          "Reviewed incoming designs and compiled question lists for the PM and the factory team.",
          "Raised concerns and edge cases early so problems in the design surfaced before development.",
        ],
      },
      {
        title: "Database design",
        details: [
          "Designed the DB diagram together with the team for the Packing, Warehouse and QA modules.",
        ],
      },
      {
        title: "Phase 2 module maintenance",
        details: [
          "Maintained additional modules such as Foil, Lubricant and Plan Order.",
        ],
      },
      {
        title: "Operational tooling",
        details: [
          "Wrote utility scripts used as an emergency fallback to start factory services when the normal start-up script failed.",
        ],
      },
      {
        title: "Fullstack delivery",
        details: [
          "Owned features end to end — frontend, backend, mobile and web paths, and the deployment process.",
        ],
      },
    ],
  },
  {
    slug: "cp-member-brandsite",
    title: "CP Member Brandsite",
    subtitle: "Membership platform with points and email automation",
    summary:
      "Large-scale membership platform: responsive frontend plus a Cloud Functions + Mailgun pipeline powering every transactional email.",
    overview:
      "A production membership platform for CP Brandsite, built with server-rendered Next.js on PostgreSQL and Firebase. Beyond frontend feature work I owned the transactional email system: Firebase Cloud Functions triggered on member events, delivering through Mailgun.",
    role: "Fullstack Developer (frontend-focused)",
    stack: ["Next.js (SSR)", "PostgreSQL", "Firebase", "Mailgun", "TypeScript"],
    tech: ["Next.js", "Firebase", "PostgreSQL", "TypeScript"],
    demo: "https://member.cpbrandsite.com/",
    featured: true,
    responsibilities: [
      {
        title: "Cloud Functions + Mailgun email system",
        details: [
          "Burning Point",
          "Earning Point",
          "Email verification",
          "Forgot password",
          "Welcome message",
          "Create product review transaction (reviews require admin approval before publishing)",
        ],
      },
      {
        title: "Frontend & backend implementation",
        details: [
          "Implemented features across frontend and backend with a frontend focus, building responsive UI directly from the provided designs.",
        ],
      },
    ],
  },
  {
    slug: "cp-lose-weight-event",
    title: "Lose Weight Internal Event — CP Brandsite",
    subtitle: "Internal campaign site",
    summary:
      "Internal event website for a company-wide weight-loss challenge, built from design with a Directus-backed CMS.",
    overview:
      "A server-rendered Next.js campaign site for an internal CP Brandsite event, with content managed through Directus. I handled the frontend, developing responsive screens directly from the supplied designs.",
    role: "Frontend Developer",
    stack: ["Next.js (SSR)", "Directus", "TypeScript"],
    tech: ["Next.js", "Directus", "TypeScript"],
    responsibilities: [
      {
        title: "Frontend ownership",
        details: [
          "Primary owner of the frontend, developing the site to match the design.",
        ],
      },
    ],
  },
  {
    slug: "uxui-portfolio",
    title: "UX/UI Portfolio Website",
    subtitle: "Designer portfolio built from Figma",
    summary:
      "Static portfolio site built from a UX/UI design, extended with custom animations and full responsive support.",
    overview:
      "A portfolio website for a UX/UI designer, built with Astro and Tailwind CSS. Developed from the given design and improved with additional animation work, with responsive layouts across breakpoints.",
    role: "Frontend Developer",
    stack: ["Astro", "Tailwind CSS", "TypeScript"],
    tech: ["Astro", "TailwindCSS", "TypeScript"],
    github: "https://github.com/Apisitkitti/tripop_portfolio",
    demo: "https://tripop-portfolio.netlify.app/",
    responsibilities: [
      {
        title: "Development from design",
        details: [
          "Developed the site to match the design and added extra animation on top of it.",
          "Supported responsive layouts across mobile, tablet and desktop.",
        ],
      },
    ],
  },
  {
    slug: "wongnai-ui-clone",
    title: "Wongnai UI Clone",
    subtitle: "Practice project",
    summary:
      "Recreated the Wongnai frontend to study real-world UI structure, layout systems and interaction patterns.",
    overview:
      "A self-driven practice project recreating Wongnai's frontend architecture and interaction patterns, used to study production-grade layout systems and user experience design.",
    role: "Personal project",
    stack: ["React", "CSS"],
    tech: ["React", "CSS"],
    github: "https://github.com/Apisitkitti/PracticeWebWong",
    demo: "https://clonereactforpractice.netlify.app/",
  },
];

export const getProjectBySlug = (slug?: string) =>
  projects.find((project) => project.slug === slug);

export const featuredProjects = projects.filter((project) => project.featured);
