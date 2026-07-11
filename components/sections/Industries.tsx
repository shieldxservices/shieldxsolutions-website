const industries = [
  {
    number: "01",
    title: "Commercial Offices",
    description:
      "Secure, high-performance infrastructure for corporate offices, headquarters, and multi-tenant workspaces.",
  },
  {
    number: "02",
    title: "Fitness Centers",
    description:
      "Reliable networking, surveillance, access control, and audiovisual systems for high-traffic fitness environments.",
  },
  {
    number: "03",
    title: "Multifamily Properties",
    description:
      "Connected infrastructure for apartment buildings, residential communities, common areas, and property operations.",
  },
  {
    number: "04",
    title: "Commercial Real Estate",
    description:
      "Scalable technology systems for property managers, developers, mixed-use buildings, and commercial portfolios.",
  },
  {
    number: "05",
    title: "Hospitality",
    description:
      "Dependable wireless, security, surveillance, and operational systems built around the guest experience.",
  },
  {
    number: "06",
    title: "Retail & Multi-Site Business",
    description:
      "Standardized technology deployments that keep distributed locations secure, connected, and easy to manage.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-28 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
            Industries
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Built around the environments our clients operate.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Every property has different operational, security, and
            connectivity requirements. We design infrastructure around how the
            space is actually used.
          </p>
        </div>

        <div className="mt-16 grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.number}
              className="group min-h-[300px] border-b border-r border-white/10 p-8 transition duration-300 hover:bg-white/[0.035] sm:p-10"
            >
              <div className="flex h-full flex-col justify-between">
                <span className="text-sm font-medium text-zinc-600 transition-colors duration-300 group-hover:text-blue-400">
                  {industry.number}
                </span>

                <div className="mt-16">
                  <h3 className="text-2xl font-medium tracking-tight text-white">
                    {industry.title}
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-400">
                    {industry.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}