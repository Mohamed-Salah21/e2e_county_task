import { OrderI } from "@/typescript/interfaces/order.interface";
import OrderCard from "./orderCard/Index";
import { ReactNode } from "react";

type Props = {
  orders: OrderI[];
};

export default function OrdersContainer({ orders }: Props): ReactNode {
  return (
    <div className="md:w-3/4 w-full  mx-auto w-scren-md  md:px-0 px-4">
      {orders?.length ? (
        orders.map((order: OrderI) => (
          <OrderCard key={order.id} order={order} />
        ))
      ) : (
        <h2 className="text-dangerous text-center text-md">
          There are no orders created yet
        </h2>
      )}
    </div>
  );
}
