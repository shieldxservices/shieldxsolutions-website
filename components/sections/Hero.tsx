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
<section className="relative min-h-[900px] overflow-hidden pb-28 pt-36">      {/* Background image */}
<div className="absolute inset-0 z-0">
  <Image
    src="/projects/background.png"
    alt=""
    fill
    priority
    className="object-cover object-[32%_center]"
    sizes="100vw"
  />
</div>

{/* Readability overlays */}
<div className="absolute inset-0 z-10 bg-gradient-to-r from-[#14171d]/90 via-[#14171d]/55 to-[#14171d]/10" />

<div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#14171d]" />
      

      <Container className="relative z-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.65fr_1.35fr] xl:gap-16">
          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full border border-blue-500/25 bg-blue-500/10 px-5 py-2 text-sm text-blue-300 backdrop-blur-md">
              Enterprise Networks • Security • Smart Buildings
            </div>

            <h1 className="mt-10">
              <span className="block text-5xl font-black leading-[0.95] tracking-[-0.045em] text-white md:text-7xl xl:text-[4.9rem]">
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

          <div className="relative z-10 w-full">
  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/50 shadow-[0_35px_90px_rgba(0,0,0,0.65)] backdrop-blur-xl">
    <Image
      src="/projects/hero1.png"
      alt="Shield X technology services"
      fill
      priority
      className="object-contain"
      sizes="(max-width: 1024px) 100vw, 65vw"
    />
  </div>
</div>
        </div>

        <div className="mt-20 grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-4">
  {STATS.map((item, index) => (
    <article
      key={item.label}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#05070b] shadow-2xl"
    >
      <Image
        src={statImages[index]}
        alt={item.label}
        fill
        className="object-contain transition duration-700 group-hover:scale-[1.03]"
        sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
      />
    </article>
  ))}
</div>
      </Container>
    </section>
  );
} 