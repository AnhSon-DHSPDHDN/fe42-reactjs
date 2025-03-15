import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders game Play", () => {
  render(<App />);
  const linkElement = screen.getByText(/Tôm Cua Bầu/i);
  expect(linkElement).toBeInTheDocument();
});
