import { fireEvent, render, screen } from "@testing-library/react";
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

// checkbox to disable toggle
test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();
  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

// "Checkbox enables button on first click and disables on second click";
test("Checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});
