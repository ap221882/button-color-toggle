import { render, screen } from "@testing-library/react";
import { logRoles } from "@testing-library/react";
import App from "./App";

test("button has correct initial color and text", () => {
  render(<App />);
  // text
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  // color
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button when clicked turns blue", () => {});
