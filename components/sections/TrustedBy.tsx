import Image from "next/image";
import Section from "@/components/ui/Section";

const industries = [
  {
    title: "Commercial Offices",
    image: "/projects/commercial-offices.png",
  },
  {
    title: "Fitness Centers",
    image: "/projects/fitness-centers.png",
  },
  {
    title: "Apartment Communities",
    image: "/projects/apartments.png",
  },
  {
    title: "Retail",
    image: "/projects/retail.png",
  },
  {
    title: "Healthcare",
    image: "/projects/healthcare.png",
  },
  {
    title: "Hospitality",
    image: "/projects/hospitality.png",
  },
];

export default function TrustedBy() {
  return (
    <Section className="py-16">
      <div className="border-y border-white/10 py-12">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
          Trusted Across
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="group relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"
            >
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-medium tracking-tight text-white">
                  {industry.title}
                </h3>

                <div className="mt-3 h-px w-10 bg-blue-400 transition-all duration-300 group-hover:w-20" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}