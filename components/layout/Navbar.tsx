import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { FaInstagram } from "react-icons/fa";

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
  <Image
  src="/projects/Logo.png"
  alt="Shield X Solutions"
  width={220}
  height={220}
  priority
  className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
/>

  <div className="hidden sm:block">
    <p className="text-lg font-semibold tracking-wide text-white">
      Shield X Solutions
    </p>

    <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
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

        <div className="flex items-center gap-3">

  <a
  href="https://www.instagram.com/shieldxservices"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/30 hover:bg-white/10"
>
  <FaInstagram
    className="h-6 w-6 transition-all duration-300 ease-out group-hover:scale-125 group-hover:rotate-3 group-hover:brightness-125 group-hover:drop-shadow-[0_0_12px_rgba(255,120,50,0.8)]"
    color="#E4405F"
  />
</a>

  <Button href="#contact">
    Request Consultation
  </Button>

</div>
      </Container>
    </header>
  );
}