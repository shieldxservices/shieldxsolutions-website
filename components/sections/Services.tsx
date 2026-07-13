import Image from "next/image";

const services = [
  {
    title: "Enterprise Networking",
    description: "...",
    image: "/projects/network.png",
  },
  {
    title: "Surveillance Systems",
    description: "...",
    image: "/projects/cctv.png",
  },
  {
    title: "Access Control",
    description: "...",
    image: "/projects/eyfob1.png",
  },
  {
    title: "Wireless Solutions",
    description: "...",
    image: "/projects/wifi1.png",
  },
  {
    title: "Structured Cabling",
    description: "...",
    image: "/projects/cabling2.png",
  },
  {
    title: "Server & Data Solutions",
    description: "...",
    image: "/projects/racks.png",
  },
  {
    title: "Smart Building Systems",
    description: "...",
    image: "/projects/homesystem.png",
  },
  {
    title: "Managed IT Support",
    description: "...",
    image: "/projects/maintain.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
            Core Capabilities
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Infrastructure built for modern business.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Shield X Solutions designs, installs, and supports the systems that
            keep commercial properties connected, secure, and ready to scale.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-medium text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}