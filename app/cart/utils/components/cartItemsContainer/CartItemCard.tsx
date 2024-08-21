"use client";
import { CartItemI } from "@/typescript/interfaces/cartItem.interface";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { handleRemoveCartItem, handleUpdateQuantity } from "../../functions";
import { ReactNode } from "react";

type Props = {
  item: CartItemI;
};

export default function CartItemCard({ item }: Props): ReactNode {
  return (
    <div className="grid border grid-cols-8 gap-3 mb-4 px-5">
      <div className="col-span-1">
        <Image
          src={item.product.images[0]}
          alt={item.product.name}
          height={50}
          width={50}
          className="h-20 w-20"
        />
      </div>
      <div className="col-span-6 flex flex-col h-full  justify-center">
        <p className="font-medium text-lg">{item.product.name}</p>
        <p className="text-md">${item.product.price * item.qty}</p>
      </div>
      <div className="cols-span-4 items-center gap-3 flex justify-end">
        <div className="flex gap-3 flex-col items-center justify-center  w-32">
          <button
            data-testid="incBtn"
            className="active:scale-[0.95] transition-all"
            onClick={() => handleUpdateQuantity(item.id, item.qty + 1)}
          >
            <IoIosArrowUp size={20} />
          </button>
          <p role="quantity">{item.qty}</p>
          <button
            data-testid="decBtn"
            className="active:scale-[0.95] transition-all"
            onClick={() => handleUpdateQuantity(item.id, item.qty - 1)}
          >
            <IoIosArrowDown size={20} />
          </button>
        </div>
        <button onClick={() => handleRemoveCartItem(item.id)}>
          <MdDelete size={25} className="fill-dangerous" />
        </button>
      </div>
    </div>
  );
}
