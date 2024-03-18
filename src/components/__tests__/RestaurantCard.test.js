import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard, { withOpenLabel } from "../RestaurantCard";
import MOCK_DATA from "../../mocks/restaurantMock.json";

it("should render restaurant component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const nameOfRestaurant = screen.getByText("NOTO - Ice Creams & Desserts");

  expect(nameOfRestaurant).toBeInTheDocument();
});

it("should render restaurant component with open label", () => {
  const RestaurantCardOpen = withOpenLabel(RestaurantCard);
  render(<RestaurantCardOpen resData={MOCK_DATA} />);

  const nameOfRestaurant = screen.getByText("Open");

  expect(nameOfRestaurant).toBeInTheDocument();
});
