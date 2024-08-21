import { ReactNode, SetStateAction, useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

type Props = {
  value: string;
  setFilter: (...args: any[]) => SetStateAction<any>;
};

export default function SortMenu({ value, setFilter }: Props): ReactNode {
  const [open, setOpen] = useState(false);
  const selectSortField = (field: string) => {
    setFilter((prev: any) => ({
      ...prev,
      sort: field,
    }));
    setOpen(false);
  };
  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "auto";
    const handleClickOutside = (e: MouseEvent) => {
      if (open) {
        const element = document.querySelector(".sort-menu");
        !element?.contains(e?.target as Node) ? setOpen(false) : null;
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative">
      <button
        data-testid="sortMenu-btn"
        className="relative border bg-main text-white p-2 text-sm rounded-lg transition-all active:scale-[0.96]"
        onClick={() => setOpen(!open)}
      >
        Sort by
      </button>
      {open ? (
        <div className="sort-menu absolute z-10 top-full mt-2 !bg-gray-100 w-[200px] rounded-2xl shadow-lg right-0 menu border gap-3 p-3">
          {["name", "price"].map((key) => (
            <button
              key={key}
              onClick={() => selectSortField(key)}
              className="border rounded-lg flex items-center justify-center w-full py-1 mb-2 relative"
            >
              {value === key ? (
                <IoMdCheckmark
                  size={25}
                  className="absolute top-1/2 -translate-y-1/2 left-3"
                />
              ) : null}
              <span className="capitalize text-md">{key}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
