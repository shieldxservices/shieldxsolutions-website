const partners = [
  "Ubiquiti",
  "Cisco",
  "Verkada",
  "Dahua",
  "Hikvision",
  "Aruba",
  "Meraki",
  "Axis",
];

export default function Technology() {
  return (
    <section className="relative py-28 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
              Technology Partners
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Proven platforms. Professional deployment.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-zinc-400">
            We work with established networking, security, surveillance, and
            infrastructure platforms selected around the operational needs of
            each property.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner}
              className="group flex min-h-[150px] items-center justify-center border-b border-r border-white/10 px-6 text-center transition duration-300 hover:bg-white/[0.035]"
            >
              <span className="text-lg font-medium tracking-wide text-zinc-500 transition-colors duration-300 group-hover:text-white">
                {partner}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-6 text-zinc-500">
          Platform selection is based on project requirements, client standards,
          compatibility, availability, and long-term support needs.
        </p>
      </div>
    </section>
  );
}