import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// This is a test file for the Contact component
// It tests if the Contact component renders correctly and contains the expected elements

describe("Contact Component Tests", () => {
  it("Should load Contact page", () => {
    render(<Contact />);
    // const heading = screen.getByRole("heading");
    //or
    //quering
    const heading = screen.getByText("Contact Us");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load a button inside the contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    //or
    //quering
    // const button = screen.getByText("Submit"); it will throw error
    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load a input name inside the contact component", () => {
    render(<Contact />);
    //quering
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input name inside the contact component", () => {
    render(<Contact />);
    //quering
    const inputBoxes = screen.getAllByRole("textbox");
    //   inputBoxes.forEach((input) => {
    //     expect(input).toBeInTheDocument();
    //   });
    //or
    expect(inputBoxes.length).toBe(2);
  });
});
