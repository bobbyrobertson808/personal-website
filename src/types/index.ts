export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  logo?: string;
  url?: string;
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
  readingTime: string;
  content: string;
}
