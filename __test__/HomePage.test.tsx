import { cleanup, render, screen } from "@testing-library/react";
import HeroSection from "../components/HeroSection";
import CardsContainer from "../app/(home)/utils/components/cardsContainer/Index";
import "@testing-library/jest-dom";
import { mockCartItems, mockProducts } from "@/__mock__/index.mocks";

afterEach(() => {
  cleanup();
});

describe("Home Page", () => {
  it("Render hero section", () => {
    render(<HeroSection title="Welcome Message" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Welcome Message");
  });

  it("Check Search input and range input are existed", () => {
    render(
      <CardsContainer products={mockProducts} cartItems={mockCartItems} />
    );
    const searchInput = screen.getByPlaceholderText(/Search for Names/);
    const rangeInput = screen.getByTestId("products-price-range");
    const sortMentBtn = screen.getByTestId("sortMenu-btn");
    [searchInput, rangeInput, sortMentBtn].forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });

  test("Verify specific fields in products data", () => {
    expect(mockProducts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          description: expect.any(String),
          price: expect.any(Number),
          images: expect.arrayContaining([expect.any(String)]),
        }),
      ])
    );
  });
});
