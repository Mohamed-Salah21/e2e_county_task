import HeroSection from "@/components/HeroSection";
import ApiOperations from "@/utils/ApiOperations";
import { ORDERS_TAG } from "@/utils/validationTags";
import { ReactNode } from "react";
import OrdersContainer from "./utils/components/OrdersContainer";

export default async function OrdersPage(): Promise<ReactNode> {
  const ordersData = await ApiOperations(`/orders`, {
    next: {
      tags: [ORDERS_TAG],
      revalidate: 1,
    },
  });
  const orders = ordersData?.data || [];
  return (
    <main>
      <HeroSection title={"My Orders"} />
      <OrdersContainer orders={orders} />
    </main>
  );
}
