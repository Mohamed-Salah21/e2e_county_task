import { ReactNode } from "react";
import CheckoutForm from "./utils/components/CheckoutForm";

export default function CheckoutPage(): ReactNode {
  return (
    <main className="h-lvh flex items-center justify-center">
      <CheckoutForm />
    </main>
  );
}
