import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-32 min-h-screen">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[750px] w-[750px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
      </div>

      <Container>
       <div className="grid items-center gap-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
              Enterprise Networks • Security • Smart Buildings
            </div>

            <h1 className="mt-10">
  <span
    className="
      block
      text-5xl
      md:text-7xl
      xl:text-8xl
      font-black
      tracking-tight
      leading-none
      text-white
    "
  >
    Enterprise Technology
  </span>

  <span
    className="
      mt-3
      block
      text-2xl
      md:text-4xl
      font-medium
      tracking-[0.08em]
      text-blue-300
    "
  >
    Built For Every Business
  </span>
</h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
              Shield X Solutions designs, installs, and supports enterprise
              networking, structured cabling, surveillance, access control,
              wireless systems, and smart building technology.
            </p>
    
            <div className="mt-10 flex flex-col gap-5 sm:flex-row">
              <Button href="#contact">Request Consultation</Button>

              <a
                href="#projects"
                className="rounded-xl border border-white/10 px-6 py-3 font-medium text-white transition hover:border-blue-500 hover:bg-white/5"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-[1000px] mx-auto">
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-600/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
              <Image
  src="/projects/hero1.png"
  alt="Shield X Technology Services"
  width={900}
  height={900}
  priority
  className="w-full h-auto object-contain"
/>

              
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          {STATS.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
            >
              <h2 className="text-4xl font-bold text-blue-400">
                {item.value}
              </h2>
              <p className="mt-2 text-sm text-zinc-400">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}