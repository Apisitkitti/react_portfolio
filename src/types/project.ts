export interface ProjectResponsibility {
  title: string;
  details?: string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  /** Short copy used on the project card. */
  summary: string;
  /** Longer copy shown on the project detail page. */
  overview: string;
  role: string;
  period?: string;
  stack: string[];
  tech: string[];
  responsibilities?: ProjectResponsibility[];
  github?: string;
  demo?: string;
  featured?: boolean;
}
