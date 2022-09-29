import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("render github link", () => {
  render(<App />);
  const link = screen.getByText(/github/i);
  expect(link).toBeInTheDocument();
});
