import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Enterprise Infrastructure",
    category: "Networking, Security & Systems Integration",
    location: "New York Metropolitan Area",
    image: "/images/projects/shieldx-showcase.png",
  },
  {
    title: "Commercial Network Deployment",
    category: "Structured Cabling & Wireless Infrastructure",
    location: "New Jersey",
    image: "/images/projects/network-deployment.jpg",
  },
  {
    title: "Smart Property Security",
    category: "Surveillance & Access Control",
    location: "Northeast Region",
    image: "/images/projects/security-installation.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-28 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
              Selected Work
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Infrastructure designed for demanding environments.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-zinc-400">
            Real-world networking, security, cabling, and smart building
            deployments delivered across commercial properties.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]"
            >
              <div
                className={`grid ${
                  index === 0
                    ? "lg:grid-cols-[1.35fr_0.65fr]"
                    : "lg:grid-cols-[0.9fr_1.1fr]"
                }`}
              >
                <div
                  className={`relative min-h-[340px] overflow-hidden sm:min-h-[460px] ${
                    index > 0 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.025]"
                    sizes="(max-width: 1024px) 100vw, 70vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>

                <div className="flex min-h-[300px] flex-col justify-between p-8 sm:p-10 lg:p-12">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                      Project {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-6 text-3xl font-medium tracking-tight text-white sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-lg text-lg leading-8 text-zinc-400">
                      {project.category}
                    </p>
                  </div>

                  <div className="mt-12 flex items-end justify-between border-t border-white/10 pt-6">
                    <p className="text-sm text-zinc-500">{project.location}</p>

                    <Link
                      href="#contact"
                      className="text-sm font-medium text-white transition group-hover:text-blue-400"
                    >
                      Discuss a project&nbsp; ↗
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