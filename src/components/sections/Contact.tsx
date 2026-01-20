import { Mail } from "lucide-react";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { email } from "@/data/social";

export function Contact() {
  return (
    <section id="contact" className="border-t border-gray-100 bg-gray-50 py-20 md:py-24">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 max-w-md text-gray-600">
            I&apos;m always interested in hearing about new opportunities,
            interesting projects, or just having a chat about FinTech and
            product management.
          </p>
          <div className="mt-8 flex flex-col items-center gap-6">
            <Button href={`mailto:${email}`} size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Send me an email
            </Button>
            <SocialLinks size="lg" />
          </div>
        </div>
      </Container>
    </section>
  );
}
