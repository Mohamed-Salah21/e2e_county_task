"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { ReactNode, useEffect, useState } from "react";
export default function NavSidebar(): ReactNode {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (open) {
        const element = document.querySelector(".navbar-sidebar");
        !element?.contains(e.target as Node) ? setOpen(false) : null;
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="sm:hidden sm:gap-4 rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`h-full w-full top-0 left-0 bg-[#0000007c] flex justify-end
        ${open ? "block fixed" : "hidden relative"}
        `}
      >
        <div
          className={`navbar-sidebar z-10 w-[40%] bg-white h-full p-4 flex flex-col items-center gap-5 transition-all `}
        >
          <div className="flex justify-start w-full">
            <button onClick={() => setOpen(false)}>
              <FaArrowRight />
            </button>
          </div>
          {["home", "cart", "orders"].map((key) => (
            <Link
              key={key}
              className="border py-2 w-full text-center"
              href={key === "home" ? "/" : `/${key}`}
              onClick={() => setOpen(false)}
            >
              {key}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
