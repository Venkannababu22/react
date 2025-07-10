import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button", { name: "Login" });
  // If you want to get a specific button out of multiple buttons,
  // you can use getByRole with the name option to specify the button text

  // but it's better to use getByRole for accessibility reasons
  // const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});

it("Should render header component with a cart items with 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart (0)");
  expect(cartItems).toBeInTheDocument();
});

it("Should render header component with a Cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);
  // This will match any text that contains "Cart", regardless of the number of items
  // This is useful if you want to test the cart items count dynamically (Regex)
  expect(cartItems).toBeInTheDocument();
});

it("Should change Login button to Logout on Click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });
  // After clicking the login button, it should change to logout

  expect(logoutButton).toBeInTheDocument();
});
