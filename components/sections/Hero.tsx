import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { STATS } from "@/lib/constants";

const statImages = [
  "/projects/buildings.png",
  "/projects/projectsdone.png",
  "/projects/clients.png",
  "/projects/experience.png",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-28 pt-36">
      {/* Manhattan background */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/projects/manhattan-security.png"
          alt=""
          fill
          priority
          className="object-cover object-[90%_center] opacity-100"
          sizes="100vw"
        />
      </div>

      {/* Background overlays */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#09090b] via-[#09090b]/85 to-[#09090b]/45" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/25 via-transparent to-[#09090b]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_65%_35%,rgba(37,99,235,0.18),transparent_38%)]" />

      <Container>
        {/* Main hero content */}
        <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] xl:gap-20">
          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full border border-blue-500/25 bg-blue-500/10 px-5 py-2 text-sm text-blue-300 backdrop-blur-md">
              Enterprise Networks • Security • Smart Buildings
            </div>

            <h1 className="mt-10">
              <span className="block text-5xl font-black leading-[0.95] tracking-[-0.045em] text-white md:text-7xl xl:text-[5.5rem]">
                Enterprise
                <br />
                Technology
              </span>

              <span className="mt-5 block text-2xl font-semibold tracking-[0.06em] text-blue-300 md:text-4xl">
                Built For Every Business
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">
              Shield X Solutions designs, installs, and supports enterprise
              networking, structured cabling, surveillance, access control,
              wireless systems, and smart building technology.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact">Request Consultation</Button>

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-black/20 px-6 py-3 font-medium text-white backdrop-blur-md transition hover:border-blue-500/60 hover:bg-white/5"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Services infographic */}
          <div className="relative z-10 w-full">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-600/15 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/55 p-3 shadow-2xl backdrop-blur-md">
              <Image
                src="/projects/hero1.png"
                alt="Shield X technology services"
                width={1600}
                height={1100}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {STATS.map((item, index) => (
            <article
              key={item.label}
              className="group relative min-h-[270px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-2xl"
            >
              <Image
                src={statImages[index]}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
              <div className="absolute inset-0 bg-blue-950/10 transition duration-500 group-hover:bg-transparent" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent transition duration-500 group-hover:from-black/10" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}