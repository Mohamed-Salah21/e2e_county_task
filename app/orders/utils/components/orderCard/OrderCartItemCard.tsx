import { CartItemI } from "@/typescript/interfaces/cartItem.interface";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  oCartItem: CartItemI;
};

export default function OrderCartItemCard({ oCartItem }: Props): ReactNode {
  return (
    <div
      className="bg-slate-100 p-3 flex lg:flex-row flex-col items-center rounded-xl gap-2 border"
      key={oCartItem.id}
    >
      <Image
        src={oCartItem.product.images[0]}
        alt={oCartItem.product.name}
        height={40}
        width={40}
        className="h-16 w-16"
      />
      <div className="lg:text-start text-center">
        <h3 className="lg:text-lg text-md">{oCartItem.product.name}</h3>
        <h1>${oCartItem.product.price * oCartItem.qty}</h1>
      </div>
    </div>
  );
}
