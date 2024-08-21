import ServerHandler from "@/utils/ServerHandler";
import { CART_ITEMS_TAG } from "@/utils/validationTags";
import toast from "react-hot-toast";

export const handleUpdateQuantity = async (
  itemId: string,
  quantity: number
) => {
  if (quantity === 0 || quantity === 11) {
    return toast.error(`Unavilable quantity`);
  }
  await ServerHandler(`/cart/${itemId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      qty: quantity,
    }),
    revalidation: {
      tag: CART_ITEMS_TAG,
    },
  }).then((res) => {
    if (res?.data) {
      toast.success(`Quantity updated`);
    } else {
      toast.error(`Something went wrong!`);
    }
  });
};

export const handleRemoveCartItem = async (id: string): Promise<void> => {
  await ServerHandler(`/cart/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    revalidation: {
      tag: CART_ITEMS_TAG,
    },
  }).then((res) => {
    if (res?.data) {
      toast.success(`Cart item removed successfully`);
    } else {
      toast.error(`Something went wrong!`);
    }
  });
};


