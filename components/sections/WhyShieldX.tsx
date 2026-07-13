import {
  Award,
  BadgeDollarSign,
  Headphones,
  Network,
  ShieldCheck,
  Zap,
} from "lucide-react";

import Container from "@/components/ui/Container";

const reasons = [
  {
    title: "Trusted Professionals",
    description:
      "Experienced technicians with hands-on expertise in enterprise networking, surveillance, structured cabling, and complete IT infrastructure.",
    icon: ShieldCheck,
  },
  {
    title: "Fair & Transparent Pricing",
    description:
      "Professional, enterprise-quality solutions at reasonable prices, with clear estimates and no unnecessary services or hidden charges.",
    icon: BadgeDollarSign,
  },
  {
    title: "Remote Support",
    description:
      "Many technical issues can be diagnosed and resolved remotely, reducing downtime and eliminating unnecessary on-site service visits.",
    icon: Headphones,
  },
  {
    title: "Fast Response",
    description:
      "From emergency outages to troubleshooting and new installations, we respond quickly to keep your business connected and operational.",
    icon: Zap,
  },
  {
    title: "Complete Technology Solutions",
    description:
      "Networking, Wi-Fi, surveillance, access control, structured cabling, audio systems, and IT support managed through one trusted partner.",
    icon: Network,
  },
  {
    title: "Quality You Can Count On",
    description:
      "Every installation is completed with attention to detail, professional standards, and reliable equipment built for long-term performance.",
    icon: Award,
  },
];

export default function WhyShieldX() {
  return (
    <section
      id="why-shield-x"
      className="relative overflow-hidden border-y border-white/10 bg-[#080b12] py-20 sm:py-24"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Section heading */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
              <ShieldCheck className="h-4 w-4" />
              Why Shield X
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Why businesses choose{" "}
              <span className="text-blue-400">Shield X</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              A trusted technology partner delivering reliable, scalable, and
              cost-effective infrastructure for businesses of every size.
            </p>
          </div>

          {/* Reason cards */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.055]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300 transition duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/15 group-hover:text-blue-200">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {reason.description}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Coverage bar */}
          <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-sm font-semibold text-white">
                Supporting businesses across multiple markets
              </p>

              <p className="mt-1 text-sm text-zinc-400">
                Commercial, residential, fitness, hospitality, healthcare, and
                property management environments.
              </p>
            </div>

            <div className="shrink-0 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-blue-300">
              NY · NJ · PA · CT
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}