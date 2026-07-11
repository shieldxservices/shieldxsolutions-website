const reasons = [
  {
    title: "One Partner. Complete Infrastructure.",
    description:
      "Networking, security, access control, surveillance, cabling, wireless, and smart building systems handled through one accountable team.",
  },
  {
    title: "Designed for Real-World Operations.",
    description:
      "We build around how your property actually functions, including users, traffic, security requirements, future growth, and ongoing maintenance.",
  },
  {
    title: "Clean, Documented Installation.",
    description:
      "Professional cable management, clear labeling, organized racks, tested systems, and infrastructure your team can understand and support.",
  },
  {
    title: "Built for Long-Term Reliability.",
    description:
      "Every system is selected and installed for stability, serviceability, scalability, and dependable performance after project completion.",
  },
];

export default function WhyShieldX() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
              Why Shield X
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Serious infrastructure requires serious execution.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              We combine engineering discipline, field experience, and
              responsive support to deliver systems that look professional and
              perform reliably.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className="group min-h-[280px] bg-[#09090b] p-8 transition duration-300 hover:bg-white/[0.035] sm:p-10"
              >
                <span className="text-sm font-medium text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-14 text-2xl font-medium tracking-tight text-white">
                  {reason.title}
                </h3>

                <p className="mt-5 leading-7 text-zinc-400">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}