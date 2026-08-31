export enum SectionId {
  HOME = "home",
  ABOUT = "about",
  PROJECTS = "projects",
}

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PROJECTS: "/projects",
  PROJECT_DETAIL: "/projects/:slug",
} as const;

export const projectPath = (slug: string) => `/projects/${slug}`;

export const SOCIAL_LINKS = {
  GITHUB: "https://github.com/Apisitkitti",
  LINKEDIN: "https://www.linkedin.com/in/apisit-kittiruangaram-938669206/",
} as const;

export const DOCUMENTS = [
  {
    label: "Download CV",
    file: "/files/Apisit-Kittiruangaram-CV.pdf",
    fileName: "Apisit-Kittiruangaram-CV.pdf",
  },
  {
    label: "Download Resume",
    file: "/files/Apisit-Kittiruangaram-Resume.pdf",
    fileName: "Apisit-Kittiruangaram-Resume.pdf",
  },
] as const;
