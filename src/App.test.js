import { fireEvent, render, screen } from "@testing-library/react";
import { logRoles } from "@testing-library/react";
import App from "./App";

test("button has correct initial color and text", () => {
  render(<App />);
  // text
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  // color
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button when clicked turns blue and updates", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  //click button
  fireEvent.click(colorButton);
  //expect color blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  //expect text "Change to red"
  expect(colorButton).toHaveTextContent("Change to red");
});
