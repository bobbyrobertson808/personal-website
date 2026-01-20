import { Container } from "@/components/layout";

export function About() {
  return (
    <section className="border-t border-gray-100 py-20 md:py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              About Me
            </h2>
          </div>
          <div className="space-y-6 text-gray-600 md:col-span-2">
            <p>
              I&apos;m a product leader with over 7 years of experience building
              financial technology products. My passion lies at the intersection
              of technology and finance, where I help create products that make
              managing money simpler and more accessible for everyone.
            </p>
            <p>
              Throughout my career, I&apos;ve led cross-functional teams to
              deliver products that serve millions of users. I believe in
              data-driven decision making, user-centered design, and building
              products that earn trust through transparency and reliability.
            </p>
            <p>
              When I&apos;m not working on product strategy, you&apos;ll find me
              contributing to open source projects, writing about product
              management, or exploring the latest developments in the FinTech
              space.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
