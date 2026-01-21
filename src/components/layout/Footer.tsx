import { Github, Linkedin } from "lucide-react";
import { Container } from "./Container";
import { socialLinks } from "@/data/social";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
};

export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-12">
      <Container>
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600"
                  aria-label={link.name}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </a>
              );
            })}
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Bobby Robertson. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
