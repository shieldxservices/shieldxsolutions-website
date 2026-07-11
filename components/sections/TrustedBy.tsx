import Section from "@/components/ui/Section";

const industries = [
  "Commercial Offices",
  "Fitness Centers",
  "Apartment Communities",
  "Retail",
  "Healthcare",
  "Hospitality",
];

export default function TrustedBy() {
  return (
    <Section className="py-14">
      <div className="border-y border-white/10 py-10">

        <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
          Trusted Across
        </p>

        <div className="mt-8 grid grid-cols-2 gap-y-6 text-center md:grid-cols-3 lg:grid-cols-6">

          {industries.map((industry) => (
            <div
              key={industry}
              className="text-sm font-medium text-zinc-400 transition duration-300 hover:text-white"
            >
              {industry}
            </div>
          ))}

        </div>
      </div>
    </Section>
  );
}