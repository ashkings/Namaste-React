import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should Search list for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  let resCards = screen.getAllByTestId("resCard");

  expect(resCards.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  resCards = screen.getAllByTestId("resCard");

  expect(resCards.length).toBe(2);
});

it("should filter top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const topRatedBtn = screen.getByRole("button", {
    name: "Top rated restaurants",
  });

  fireEvent.click(topRatedBtn);

  const resCards = screen.getAllByTestId("resCard");
  expect(resCards.length).toBe(8);
});
