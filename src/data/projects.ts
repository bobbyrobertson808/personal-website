import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Payment Processing Platform",
    description:
      "Led development of a real-time payment processing system handling millions of transactions daily. Focused on reliability, security, and seamless user experience.",
    technologies: ["Product Strategy", "API Design", "User Research", "Agile"],
    featured: true,
  },
  {
    title: "Mobile Banking App",
    description:
      "Redesigned mobile banking experience resulting in 50% increase in daily active users. Implemented personalized financial insights and streamlined onboarding.",
    technologies: ["Mobile", "UX Design", "Analytics", "A/B Testing"],
    featured: true,
  },
  {
    title: "B2B Lending Platform",
    description:
      "Built end-to-end lending platform for small businesses. Reduced loan approval time from days to minutes through automated underwriting.",
    technologies: ["FinTech", "Risk Assessment", "Automation", "Compliance"],
    featured: true,
  },
  {
    title: "Open Source Contribution",
    description:
      "Active contributor to open source projects in the FinTech space. Building tools to help developers create better financial products.",
    technologies: ["TypeScript", "React", "Node.js"],
    githubUrl: "https://github.com",
    featured: false,
  },
];
