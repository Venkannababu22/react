import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mockdata/resCardMock.json";
import "@testing-library/jest-dom"

it("Should render RestaurantCard component with data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("McDonald's");
  expect(name).toBeInTheDocument();
});
