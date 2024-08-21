import NavLinks from "./NavLinks";
import NavSidebar from "./NavSidebar";
import ApiOperations from "@/utils/ApiOperations";
import { CART_ITEMS_TAG } from "@/utils/validationTags";
import { CartItemI } from "@/typescript/interfaces/cartItem.interface";
import MainNavLink from "./NavLogo";

export default async function Navbar(): Promise<JSX.Element> {
  const cartItems = await ApiOperations(`/cart`, {
    next: {
      tags: [CART_ITEMS_TAG],
      revalidate: 1,
    },
  });
  const cartItemsCount = cartItems?.data?.reduce(
    (acc: any, item: CartItemI) => acc + item.qty,
    0
  );
  return (
    <header className="sticky top-0 left-0 bg-slate-100 z-20">
      <div className="mx-auto flex justify-between h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <MainNavLink />
        <NavLinks cartItemsCount={cartItemsCount} />
        <NavSidebar />
      </div>
    </header>
  );
}
