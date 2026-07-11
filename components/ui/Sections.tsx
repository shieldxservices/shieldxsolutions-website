import { ReactNode } from "react";
import Container from "./Container";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  children,
  className = "",
}: Props) {
  return (
    <section id={id} className={`py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}