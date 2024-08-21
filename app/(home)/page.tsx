import { ReactNode } from "react";
import HeroSection from "../../components/HeroSection";
import ApiOperations from "@/utils/ApiOperations";
import CardsContainer from "./utils/components/cardsContainer/Index";
import { CART_ITEMS_TAG } from "@/utils/validationTags";
export default async function Home(): Promise<ReactNode> {
  const products = await ApiOperations(`/products`, {
    cache: "no-store",
  });
  const cartItems = await ApiOperations(`/cart`, {
    next: {
      tags: [CART_ITEMS_TAG],
      revalidate: 1,
    },
  });
  return (
    <main>
      <HeroSection title={"Welcome in E2E County test task"} />
      <CardsContainer
        products={products?.data || []}
        cartItems={cartItems?.data || []}
      />
    </main>
  );
}
