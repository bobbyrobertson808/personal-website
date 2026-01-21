import { Download, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Hi, I&apos;m Bobby Robertson
            </h1>
            <p className="max-w-2xl text-lg text-gray-600 md:text-xl">
              I build products that help people manage their money. Currently
              leading product at a FinTech company, focused on creating
              intuitive, trustworthy financial experiences.
            </p>
          </div>

          <SocialLinks size="lg" showEmail />

          <div className="flex flex-wrap gap-4">
            <Button href="/resume.pdf" download size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
