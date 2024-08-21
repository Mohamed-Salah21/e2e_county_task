import { CartItemI } from "@/typescript/interfaces/cartItem.interface";

export const mockCartItems = [
  {
    id: "123",
    qty: 1,
    product: {
      id: "2",
      name: "Eyeshadow Palette with Mirror",
      price: 19.99,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
      ],
    },
  },
] as [CartItemI];
