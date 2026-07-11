import Link from "next/link";
import Container from "../ui/Container";
import { COMPANY } from "@/lib/constants";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

const capabilities = [
  "Enterprise Networking",
  "Structured Cabling",
  "Access Control",
  "Surveillance Systems",
  "Smart Buildings",
  "Managed IT Services",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.9fr] lg:gap-16">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-600/10">
                <span className="text-lg font-bold text-blue-400">X</span>
              </div>

              <div>
                <p className="text-lg font-semibold tracking-wide text-white">
                  {COMPANY.name}
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  {COMPANY.tagline}
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-zinc-400">
              Enterprise networking, security, structured cabling, access
              control, surveillance, and smart building infrastructure for
              modern commercial properties.
            </p>

            <div className="mt-8 space-y-2 text-sm text-zinc-400">
              <a
                href={`tel:${COMPANY.phone.replace(/\D/g, "")}`}
                className="block hover:text-white"
              >
                {COMPANY.phone}
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="block hover:text-white"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Navigation</p>

            <nav className="mt-5 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-zinc-400 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Capabilities</p>

            <div className="mt-5 space-y-3">
              {capabilities.map((item) => (
                <p key={item} className="text-sm text-zinc-400">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Shield X Solutions Inc. All rights
            reserved.
          </p>

          <p>Infrastructure. Security. Connectivity.</p>
        </div>
      </Container>
    </footer>
  );
}