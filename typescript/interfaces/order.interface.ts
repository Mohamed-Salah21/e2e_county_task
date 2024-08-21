import { CartItemI } from "./cartItem.interface";

export interface OrderI {
  id: string;
  user: {
    name: string;
    email: string;
    phone: string;
  };
  totalPrices: number;
  cartItems: CartItemI[];
  createdAt: number;
}
