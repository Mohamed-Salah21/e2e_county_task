import { ProductI } from "@/typescript/interfaces/product.interface";
import Image from "next/image";
import { FaCartArrowDown } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";

import { handleCartOperations } from "../../functions";
import { ReactNode } from "react";

type Props = {
  item: ProductI;
  productInCart: (arg: string) => string | undefined;
};

export default function ProductCard({ item, productInCart }: Props): ReactNode {
  const cartItemId = productInCart(item.id);
  return (
    <div className="border block rounded-lg p-4 shadow-sm shadow-indigo-100 relative !overflow-hidden [&:hover>button]:right-5">
      <Image
        alt={item.name}
        height={100}
        width={100}
        src={item?.images?.[0]}
        className="lg:h-56 md:h-48 h-32  w-full rounded-md object-cover "
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>
            <dd className="text-sm text-gray-500">${item.price}</dd>
          </div>
          <div>
            <h3 className="font-semibold md:text-md text-sm hoveR">
              {item.name}
            </h3>
            <h5
              className="font-light md:text-md text-xs line-clamp-3"
              title={item.description}
            >
              {item.description}
            </h5>
          </div>
        </dl>
      </div>
      <button
        onClick={() => handleCartOperations(item, cartItemId)}
        className={`p-2 z-10 absolute bottom-3  bg-main transition-all duration-500 rounded-2xl active:scale-75 ${
          cartItemId ? "right-5" : "-right-20"
        }`}
      >
        {!cartItemId ? (
          <FaCartArrowDown className="text-white" size={25} />
        ) : (
          <MdRemoveShoppingCart className="text-white" size={25} />
        )}
      </button>
    </div>
  );
}
