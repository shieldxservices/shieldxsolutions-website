import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";

const links = [
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Industries", href: "#industries" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-600/10">
            <span className="text-lg font-bold text-blue-400">X</span>
          </div>

          <div>
            <p className="text-lg font-semibold tracking-wide">
              Shield X Solutions
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              Engineering Connected Environments
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact">Request Consultation</Button>
        </div>
      </Container>
    </header>
  );
}