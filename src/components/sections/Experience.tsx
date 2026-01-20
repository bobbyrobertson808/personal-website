import { Container } from "@/components/layout";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section className="border-t border-gray-100 py-20 md:py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Experience
            </h2>
          </div>
          <div className="md:col-span-2">
            <div className="relative space-y-12">
              {/* Timeline line */}
              <div className="absolute left-0 top-2 hidden h-full w-px bg-gray-200 md:block" />

              {experience.map((item, index) => (
                <div key={index} className="relative md:pl-8">
                  {/* Timeline dot */}
                  <div className="absolute -left-1 top-2 hidden h-2 w-2 rounded-full bg-gray-400 md:block" />

                  <div className="space-y-3">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="font-semibold text-gray-900">
                        {item.role}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {item.startDate} — {item.endDate}
                      </span>
                    </div>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        {item.company}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.company}</p>
                    )}
                    <ul className="space-y-2 text-gray-600">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
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
