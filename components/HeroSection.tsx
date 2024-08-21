import { ReactNode } from "react";

type Props = { title: string };

export default function HeroSection({ title }: Props): ReactNode {
  return (
    <header className="h-52 flex items-center justify-center">
      <h1 className="font-[500] md:text-xl text-md">{title}</h1>
    </header>
  );
}
