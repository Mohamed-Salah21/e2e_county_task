import { ProductI } from "@/typescript/interfaces/product.interface";
import { ChangeEvent, memo, ReactNode, SetStateAction, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import SortMenu from "../cardsContainer/SortMenu";

type Props = {
  products: ProductI[];
  filter: any;
  setFilter: (...args: any[]) => SetStateAction<any>;
  setItems: any;
  pricesRange: {
    max: number;
    min: number;
  };
};

export default memo(function FilterProducts({
  products,
  filter,
  setFilter,
  setItems,
  pricesRange,
}: Props): ReactNode {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilter({
      ...filter,
      [name]: name === "price" ? Number(value) : value,
    });
  };
  useEffect(() => {
    if (filter.sort) {
      setItems(() => {
        const sortedField: "name" | "price" = filter.sort;
        return products.sort((a: ProductI, b: ProductI) =>
          sortedField === "name"
            ? a.name.localeCompare(b.name, "en", {
                sensitivity: "accent",
              })
            : a.price - b.price
        );
      });
    }
    const handler = setTimeout(() => {
      if (filter.range > 0) {
        setItems(() =>
          products.filter(
            (item: any) =>
              item.price >= pricesRange.min && item.price <= filter.range
          )
        );
      }
      if (filter.name) {
        setItems(() =>
          products.filter((item) => item?.name?.includes(filter?.name))
        );
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [
    filter.range,
    filter.name,
    filter.sort,
    products,
    setItems,
    pricesRange.min,
  ]);

  return (
    <div id="filter-products-container">
      <div className="flex md:flex-row flex-col  justify-end items-center gap-4 md:px-0 px-4">
        <div className="flex py-2 md:w-[350px] w-full items-center gap-3 border rounded-full overflow-hidden px-3 ">
          <CiSearch size={25} />
          <input
            name="name"
            placeholder="Search for Names"
            value={filter.name}
            onChange={handleChange}
            className="mt-1 md:w-[400px] w-full text-md py-1 outline-none"
            data-testid="products-search-input"
          />
        </div>
        <div className="py-2 px-6 md:w-[300px]  w-full ">
          <label
            htmlFor="UserEmail"
            className="block text-lg font-medium text-gray-700"
          >
            Range of price
          </label>

          <input
            type="range"
            name="range"
            min={pricesRange.min}
            max={pricesRange.max}
            value={filter.range}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            data-testid="products-price-range"
          />
        </div>
      </div>
      <div className="flex justify-end my-6">
        <SortMenu value={filter.sort} setFilter={setFilter} />
      </div>
    </div>
  );
});
