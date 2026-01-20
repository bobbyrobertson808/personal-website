import { ExternalLink, Github } from "lucide-react";
import { Container } from "@/components/layout";
import { Badge } from "@/components/ui";
import { projects } from "@/data/projects";

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section className="border-t border-gray-100 py-20 md:py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Projects
            </h2>
            <p className="mt-2 text-gray-600">
              A selection of products and initiatives I&apos;ve led.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="grid gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-gray-100 p-6 transition-all hover:border-gray-200 hover:shadow-sm"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-600"
                            aria-label="View on GitHub"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-600"
                            aria-label="View live site"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
