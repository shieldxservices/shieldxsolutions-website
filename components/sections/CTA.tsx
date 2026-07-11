import Button from "../ui/Button";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-16 text-center sm:px-12 sm:py-20 lg:px-20">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
            Start a Project
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build infrastructure that performs from day one.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Tell us what you are planning, upgrading, or troubleshooting. We
            will help you define the right scope and move the project forward.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="mailto:support@shieldxservices.com">
              Request Consultation
            </Button>

            <a
              href="tel:+18622710789"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 px-6 py-3 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-blue-500/50 hover:bg-white/5"
            >
              Call Shield X
            </a>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-zinc-500 sm:flex-row sm:gap-6">
            <span>New Jersey</span>
            <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
            <span>New York</span>
            <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
            <span>Pennsylvania</span>
            <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
            <span>Connecticut</span>
          </div>
        </div>
      </div>
    </section>
  );
}