import ApiOperations from "@/utils/ApiOperations";
import { CART_ITEMS_TAG } from "@/utils/validationTags";
import { ReactNode } from "react";
import HeroSection from "../../components/HeroSection";
import CartItemsContainer from "./utils/components/cartItemsContainer/Index";

export default async function CartPage(): Promise<ReactNode> {
  const cartItems = await ApiOperations(`/cart`, {
    next: {
      tags: [CART_ITEMS_TAG],
      revalidate: 1,
    },
  });
  return (
    <main>
      <HeroSection title={"Cart Page"} />
      <CartItemsContainer cartItems={cartItems?.data || []} />
    </main>
  );
}
