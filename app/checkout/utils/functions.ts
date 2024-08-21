import { CartItemI } from "@/typescript/interfaces/cartItem.interface";
import { CheckoutDataType } from "@/typescript/types/checkoutDataType";
import ServerHandler from "@/utils/ServerHandler";
import { CART_ITEMS_TAG, ORDERS_TAG } from "@/utils/validationTags";
import toast from "react-hot-toast";

const resetFormCartItems = (listIds: string[]) => {
  listIds.forEach(async (id) => {
    await ServerHandler(`/cart/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      revalidation: {
        tag: CART_ITEMS_TAG,
      },
    });
  });
};

type resType = {
  data: CartItemI[] | null;
  error: string | null;
};

export const handleCreateOrder = async (
  formData: CheckoutDataType,
  resetForm: () => void
) => {
  const cartItemsData: resType = await ServerHandler(`/cart`);
  const cartItems = cartItemsData?.data || [];
  const totalPrices = cartItems.reduce(
    (acc, item) => acc + item.qty * item.product.price,
    0
  );
  if (!cartItems?.length) {
    return toast.error(`Can not create order, Cart is empty`);
  } else {
    await ServerHandler(`/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: formData,
        cartItems,
        totalPrices,
        createdAt: Date.now(),
      }),
      revalidation: {
        tag: ORDERS_TAG,
      },
    }).then((res) => {
      if (res?.data) {
        toast.success(`Order has been created successfully`);
        const ids = cartItems.map((item) => item.id);
        resetFormCartItems(ids);
        resetForm();
      } else {
        toast.error(`Something went wrong!`);
      }
    });
  }
};
