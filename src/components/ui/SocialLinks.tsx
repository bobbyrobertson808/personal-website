import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { socialLinks, email } from "@/data/social";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

interface SocialLinksProps {
  className?: string;
  showEmail?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export function SocialLinks({
  className,
  showEmail = false,
  size = "md",
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-gray-900"
            aria-label={link.name}
          >
            {Icon && <Icon className={sizes[size]} />}
          </a>
        );
      })}
      {showEmail && (
        <a
          href={`mailto:${email}`}
          className="text-gray-500 transition-colors hover:text-gray-900"
          aria-label="Email"
        >
          <Mail className={sizes[size]} />
        </a>
      )}
    </div>
  );
}
