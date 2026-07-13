import {
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";

const phoneDisplay = "(201) 702-2606";
const phoneLink = "+12017022606";

const email = "admin@shieldxservices.com";
const instagramHandle = "@shieldxservices";
const instagramUrl = "https://www.instagram.com/shieldxservices";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#060910] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container>
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              <ShieldCheck className="h-4 w-4" />
              Contact Shield X
            </div>

            <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let’s discuss your
              <span className="block text-blue-400">
                next technology project.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Contact Shield X for networking, Wi-Fi, security cameras, access
              control, structured cabling, audio systems, and ongoing technology
              support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-300">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                Fast response
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                Clear pricing
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                Professional installation
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-blue-950/30 sm:p-7">
            <div className="space-y-4">
              <a
                href={`tel:${phoneLink}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <Phone className="h-5 w-5" />
                </span>

                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Call Shield X
                  </span>

                  <span className="mt-1 block text-lg font-semibold text-white">
                    {phoneDisplay}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <Mail className="h-5 w-5" />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Email Us
                  </span>

                  <span className="mt-1 block truncate text-lg font-semibold text-white">
                    {email}
                  </span>
                </span>
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <svg
  viewBox="0 0 24 24"
  fill="none"
  aria-hidden="true"
  className="h-5 w-5"
>
  <rect
    x="3"
    y="3"
    width="18"
    height="18"
    rx="5"
    stroke="currentColor"
    strokeWidth="1.8"
  />
  <circle
    cx="12"
    cy="12"
    r="4"
    stroke="currentColor"
    strokeWidth="1.8"
  />
  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
</svg>
                </span>

                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Follow Our Work
                  </span>

                  <span className="mt-1 block text-lg font-semibold text-white">
                    {instagramHandle}
                  </span>
                </span>
              </a>
            </div>

            <a
              href="#start-project"
              className="mt-5 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Get Your Project Estimate
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}