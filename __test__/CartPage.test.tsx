import { mockCartItems } from "@/__mock__/index.mocks";
import CartItemsContainer from "@/app/cart/utils/components/cartItemsContainer/Index";
import {  render, screen } from "@testing-library/react";

describe("Cart Page", () => {
  it("Verify specific fields on cart items data", () => {
    render(<CartItemsContainer cartItems={mockCartItems} />);
    expect(mockCartItems).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          qty: expect.any(Number),
          product: expect.objectContaining({
            id: expect.any(String),
            name: expect.any(String),
            price: expect.any(Number),
            images: expect.arrayContaining([expect.any(String)]),
          }),
        }),
      ])
    );
  });
  it("Navigation to checkout and create order", () => {
    render(<CartItemsContainer cartItems={mockCartItems} />);
    const checkoutLink = screen.getByRole("checkout-link");
    expect(checkoutLink).toBeVisible();
  });
});
