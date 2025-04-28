import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import jest-dom matchers
import Button from "./Button";

test("renders the button with correct text", () => {
  render(<Button text="Click Me" />);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});

test("triggers function on button click", () => {
  const handleClick = jest.fn(); // Mock function
  render(<Button text="Click Me" onClick={handleClick} />);

  const buttonElement = screen.getByText(/Click Me/i);
  fireEvent.click(buttonElement);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
