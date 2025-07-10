import { act } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mockdata/mockRestaurantMenu.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should render Restaurant Menu Component with data", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
            <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordianHeader = screen.getByText("Mexican Range & New Offerings (32)");
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(32);
  expect(screen.getByText("Cart (0)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", {name: "Add"});
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart (1)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart (2)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(34);

  fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));
  expect(screen.getAllByTestId("foodItems").length).toBe(32);

  expect(screen.getByText("Cart is empty. Please add Ttems to the cart")).toBeInTheDocument();
  
});
