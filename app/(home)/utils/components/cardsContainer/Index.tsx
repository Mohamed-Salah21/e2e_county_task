"use client";

import { ProductI } from "@/typescript/interfaces/product.interface";
import ProductCard from "./ProductCard";
import FilterProducts from "../filterProducts/Index";
import { memo, ReactNode, useMemo, useState } from "react";
import { CartItemI } from "@/typescript/interfaces/cartItem.interface";

type Props = {
  products: ProductI[];
  cartItems: CartItemI[];
};

export default memo(function CardsContainer({
  products,
  cartItems,
}: Props): ReactNode {
  const pricesRange = useMemo(() => {
    const allPrices = products.map(({ price }) => price);
    return {
      max: allPrices?.length ? Math.max(...allPrices) : 0,
      min: allPrices?.length ? Math.min(...allPrices) : 0,
    };
  }, [products]);
  const [filter, setFilter] = useState<any>({
    name: "",
    range: pricesRange.max,
    sort: "",
  });
  const [items, setItems] = useState(products);
  const productInCart = (productId: string) =>
    cartItems?.find((item) => item.product.id === productId)?.id;
  return (
    <div className="max-w-screen-xl mx-auto">
      <FilterProducts
        filter={filter}
        setFilter={setFilter}
        products={products}
        setItems={setItems}
        pricesRange={pricesRange}
      />

      <section className="mt-5 gap-7 grid 2xl:grid-cols-4 lg:grid-cols-3 grid-cols-2  md:px-0 px-4">
        {items.map((item) => (
          <ProductCard
            item={item}
            key={item.id}
            productInCart={productInCart}
          />
        ))}
      </section>
    </div>
  );
});
