import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import MOCK_DATA from "../../mocks/mockResMenu.json";
import appStore from "../../utils/redux/appStore";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Iced Teas & Lemonades (3)");
  fireEvent.click(accordianHeader);

  const listItems = screen.getAllByTestId("list-item");

  expect(listItems.length).toBe(3);

  const addBtns = screen.getAllByText("Add");

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[0]);

  const cartItems = screen.getByText("Cart - (1 items)");
  expect(cartItems).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("list-item").length).toBe(5);

  const clearCart = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(clearCart);

  expect(screen.getAllByTestId("list-item").length).toBe(3);
});
