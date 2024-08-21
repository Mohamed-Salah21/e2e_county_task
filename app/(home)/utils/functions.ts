import { ProductI } from "@/typescript/interfaces/product.interface";
import ServerHandler from "@/utils/ServerHandler";
import { CART_ITEMS_TAG } from "@/utils/validationTags";
import toast from "react-hot-toast";

export const handleCartOperations = async (
  product: ProductI,
  cartItemId: string | undefined
): Promise<void> => {
  let res;
  if (!cartItemId) {
    const cartItem = {
      qty: 1,
      product: (["id", "name", "price", "images"] as const).reduce(
        (acc, key) => ({ ...acc, [key]: product[key] }),
        {}
      ),
    };
    res = await ServerHandler(`/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItem),
      revalidation: {
        tag: CART_ITEMS_TAG,
      },
    });
  } else {
    res = await ServerHandler(`/cart/${cartItemId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      revalidation: {
        tag: CART_ITEMS_TAG,
      },
    });
  }
  if (res?.data) {
    !cartItemId
      ? toast.success(`Product added to cart successfully`)
      : toast.success(`Product removed from cart successfully`);
  } else {
    toast.error(`Something went wrong!`);
  }
};
