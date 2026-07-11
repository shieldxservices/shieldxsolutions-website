const regions = [
  "New Jersey",
  "New York",
  "Pennsylvania",
  "Connecticut",
];

export default function Coverage() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[-12rem] top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
                Service Coverage
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Regional execution with multi-site capability.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Shield X Solutions supports commercial properties, distributed
                businesses, and multi-location environments throughout the
                Northeast.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-4">
                {regions.map((region) => (
                  <div
                    key={region}
                    className="flex min-h-[120px] items-center justify-center bg-[#09090b] p-5 text-center text-sm font-medium text-zinc-300 transition hover:bg-white/[0.035] hover:text-white"
                  >
                    {region}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px] border-t border-white/10 bg-[#0d0d10] lg:border-l lg:border-t-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18),transparent_55%)]" />

              <div className="relative flex h-full min-h-[420px] items-center justify-center p-10">
                <div className="relative h-72 w-72 rounded-full border border-blue-500/20">
                  <div className="absolute inset-8 rounded-full border border-blue-500/15" />
                  <div className="absolute inset-20 rounded-full border border-blue-500/10" />

                  <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_35px_rgba(96,165,250,0.8)]" />

                  <div className="absolute left-[22%] top-[30%] h-2.5 w-2.5 rounded-full bg-white/80" />
                  <div className="absolute right-[20%] top-[38%] h-2.5 w-2.5 rounded-full bg-white/80" />
                  <div className="absolute bottom-[22%] left-[35%] h-2.5 w-2.5 rounded-full bg-white/80" />
                  <div className="absolute bottom-[28%] right-[28%] h-2.5 w-2.5 rounded-full bg-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}