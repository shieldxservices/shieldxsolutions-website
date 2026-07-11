const services = [
  {
    number: "01",
    title: "Enterprise Networking",
    description:
      "High-performance wired and wireless networks engineered for reliability, security, and growth across modern commercial environments.",
  },
  {
    number: "02",
    title: "Structured Cabling",
    description:
      "Clean, scalable copper and fiber infrastructure designed for long-term performance, organized expansion, and easier maintenance.",
  },
  {
    number: "03",
    title: "Access Control",
    description:
      "Secure credential and entry systems that give businesses flexible control over employees, residents, visitors, and restricted areas.",
  },
  {
    number: "04",
    title: "Surveillance Systems",
    description:
      "Modern IP camera systems with clear visibility, dependable recording, remote access, and professional installation.",
  },
  {
    number: "05",
    title: "Smart Building Technology",
    description:
      "Integrated infrastructure connecting networking, security, automation, and operational systems throughout the property.",
  },
  {
    number: "06",
    title: "Managed IT Services",
    description:
      "Ongoing monitoring, maintenance, support, and infrastructure management that keeps critical business systems running.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
              Core Capabilities
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Infrastructure built for modern business.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Shield X Solutions designs, installs, and supports the systems
              that keep commercial properties connected, secure, and ready to
              scale.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {services.map((service) => (
              <article
                key={service.number}
                className="group grid gap-5 py-9 sm:grid-cols-[72px_1fr_auto] sm:items-start sm:gap-8"
              >
                <span className="text-sm font-medium text-zinc-600 transition-colors duration-300 group-hover:text-blue-400">
                  {service.number}
                </span>

                <div>
                  <h3 className="text-2xl font-medium text-white transition-transform duration-300 group-hover:translate-x-1">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                    {service.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="hidden pt-1 text-2xl text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400 sm:block"
                >
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}