import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export default function Button({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="
      inline-flex
      items-center
      justify-center
      rounded-xl
      bg-blue-600
      px-6
      py-3
      font-medium
      transition-all
      duration-300
      hover:bg-blue-500
      hover:-translate-y-0.5
      "
    >
      {children}
    </Link>
  );
}