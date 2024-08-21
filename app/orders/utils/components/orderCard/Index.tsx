import { CartItemI } from "@/typescript/interfaces/cartItem.interface";
import { OrderI } from "@/typescript/interfaces/order.interface";
import OrderCartItemCard from "./OrderCartItemCard";
import { ReactNode } from "react";

type Props = {
  order: OrderI;
};

export default function OrderCard({ order }: Props): ReactNode {
  return (
    <div
      className="shadow-sm border p-4 pt-6 mb-6 bg-slate-50 rounded-lg  relative"
      key={order.id}
    >
      <h3 className="absolute top-3 right-3 text-md">
        Total (${order.totalPrices})
      </h3>

      <div>
        <h1>Name: {order.user.name}</h1>
        <h1>Phone: {order.user.phone}</h1>
        <h1>Email: {order.user.email}</h1>
      </div>
      <div className="mt-4">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <h3 className="text-xl">Cart Items</h3>
        </div>
        <div className="mt-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {order.cartItems.map((cartItem: CartItemI) => (
            <OrderCartItemCard oCartItem={cartItem} key={cartItem.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
