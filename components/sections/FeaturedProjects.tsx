import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Impact Fitness",
    location: "Hoboken, Brooklyn & Philadelphia",
    image: "/projects/impact-fitness.png",
    services: [
      "Surveillance systems",
      "Structured cabling",
      "Enterprise Wi-Fi",
      "Sound systems and speakers",
      "Network rack installation",
      "Device mounting and switching",
      "Access-control infrastructure",
    ],
    summary:
      "Shield X Solutions delivered standardized technology infrastructure across multiple fitness locations. The work included organized network racks, cable pathways, wireless coverage, surveillance, audio, and centralized equipment installation designed for dependable daily operation.",
    outcome:
      "A cleaner, more consistent infrastructure platform supporting staff operations, member connectivity, facility security, and future expansion.",
  },
  {
    title: "Zoi",
    location: "NoMad & Upper East Side, New York City",
    image: "/projects/zoi.png",
    services: [
      "Network cabling",
      "Business Wi-Fi",
      "Surveillance cameras",
      "Rack installation",
      "Mounted network equipment",
      "Speakers and sound systems",
      "Access-control components",
    ],
    summary:
      "Shield X Solutions installed and organized the core technology systems supporting two high-traffic customer-facing environments. The deployment focused on stable connectivity, discreet equipment placement, reliable surveillance, and professionally integrated audio.",
    outcome:
      "A polished, serviceable installation built to support daily operations while keeping critical systems secure, organized, and easy to manage.",
  },
  {
    title: "Property Management & Residential Portfolio",
    location: "New York City & New Jersey",
    image: "/projects/property-management.png",
    services: [
      "Surveillance systems",
      "UniFi access control",
      "Key-fob systems",
      "Intercom systems",
      "Wi-Fi infrastructure",
      "Structured cabling",
      "Network racks and switches",
    ],
    summary:
      "Shield X Solutions supports property managers and residential buildings with integrated infrastructure for security, connectivity, resident access, and building operations. Each deployment is planned around the property layout, traffic, equipment requirements, and long-term maintenance needs.",
    outcome:
      "Improved building visibility, controlled access, organized communications infrastructure, and a scalable foundation for ongoing property management.",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
              Selected Work
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Real infrastructure. Real operating environments.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-zinc-400">
            Multi-location deployments, commercial environments, and managed
            residential properties supported with networking, security,
            cabling, audio, and access-control systems.
          </p>
        </div>

        <div className="mt-12 space-y-7">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]"
            >
              <div
                className={`grid min-h-[340px] lg:grid-cols-[0.95fr_1.05fr] ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
               <div className="relative flex h-[220px] items-center justify-center overflow-hidden rounded-l-3xl bg-[#0f1218]">
                  <Image
  src={project.image}
  alt={project.title}
  width={900}
  height={700}
  className="max-h-[300px] w-auto max-w-[92%] object-contain transition duration-500 group-hover:scale-105"
/>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>

                <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                      Project {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-5 text-3xl font-medium tracking-tight text-white sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm uppercase tracking-[0.16em] text-zinc-500">
                      {project.location}
                    </p>

                    <p className="mt-7 leading-7 text-zinc-400">
                      {project.summary}
                    </p>

                    <div className="mt-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                        Services Delivered
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.services.map((service) => (
                          <span
                            key={service}
                            className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-zinc-300"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-white/10 pt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
                      Project Outcome
                    </p>

                    <p className="mt-4 leading-7 text-zinc-300">
                      {project.outcome}
                    </p>

                    <Link
                      href="#contact"
                      className="mt-7 inline-flex text-sm font-medium text-white transition hover:text-blue-400"
                    >
                      Discuss a similar project&nbsp; ↗
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}