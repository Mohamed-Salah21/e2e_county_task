import Link from "next/link";
import { ReactNode } from "react";

export default function MainNavLink(): ReactNode {
  return <Link href={`/`} className="font-bold text-lg" >E2E TASK</Link>;
}
