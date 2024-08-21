export interface CartItemI {
  id: string;
  qty: number;
  product: {
    id: string;
    name: string;
    images: string[];
    price: number;
  };
}
