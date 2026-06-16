export type ProjectStatus = "live" | "in-development" | "coming-soon";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  statusLabel: string;
  tier: "featured" | "secondary";
  url: string;
}

export const projects: Project[] = [
  {
    slug: "sincere",
    name: "Sincere",
    tagline: "A messaging app where nothing arrives now. You write it today. You later open when it matters.",
    description:
      "A messaging app where nothing arrives now. You write it today. You later open when it matters.",
    status: "in-development",
    statusLabel: "In development",
    tier: "featured",
    url: "#",
  },
  {
    slug: "apparel",
    name: "Apparel",
    tagline: "Clothing for people who reject the script. Photography coming.",
    description:
      "Clothing for people who reject the script. Photography coming.",
    status: "coming-soon",
    statusLabel: "Coming soon",
    tier: "secondary",
    url: "#",
  },
];
