import { CartItemI } from "@/typescript/interfaces/cartItem.interface";
import CartItemCard from "./CartItemCard";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  cartItems: CartItemI[];
};

export default function CartItemsContainer({ cartItems }: Props): ReactNode {
  return (
    <div className="max-w-screen-lg  mx-auto bg-[#F3F4F6] border py-5 px-10">
      {!cartItems.length ? (
        <>
          <h1 className="text-2xl text-dangerous text-center">
            Your cart is empty
          </h1>
          <div className="flex items-center justify-center gap-2">
            <span>Go Back to</span>
            <Link className="hover:text-blue-600" href={`/`}>
              Home Page
            </Link>
          </div>
        </>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItemCard item={item} key={item.id} />
          ))}

          <Link
            href={`/checkout`}
            role = 'checkout-link'
            className="w-full bg-[#4B5563] rounded-sm text-white py-3 block text-center"
          >
            CHECKOUT
          </Link>
          <div className="flex justify-center">
            <Link
              href={`/`}
              className=" bg-transparent text-[#4b5563] rounded-sm py-3 block mt-4 hover:underline"
            >
              Complete Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
