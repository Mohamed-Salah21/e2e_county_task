import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  cartItemsCount: number;
};

export default function NavLinks({ cartItemsCount }: Props): ReactNode {
  return (
    <nav className="sm:flex sm:gap-3 hidden">
      <Link
        href={`/`}
        className="rounded-md bg-gray-100 px-5 py-2.5 text-md font-medium text-main transition hover:text-teal-600/75 sm:block"
      >
        Home
      </Link>
      <Link
        href={`/cart`}
        className="relative rounded-md bg-gray-100 px-5 py-2.5 text-md font-medium text-main transition hover:text-teal-600/75 sm:block"
      >
        Cart
        {cartItemsCount > 0 ? (
          <span className="absolute -top-2 right-3 h-6 w-6 text-center bg-[#E61A23] rounded-full text-white">
            {cartItemsCount}
          </span>
        ) : null}
      </Link>
      <Link
        href={`/orders`}
        className="rounded-md bg-gray-100 px-5 py-2.5 text-md font-medium text-main transition hover:text-teal-600/75 sm:block"
      >
        Orders
      </Link>
    </nav>
  );
}
