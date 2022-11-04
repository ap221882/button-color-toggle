import { fireEvent, render, screen } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

test("button has correct initial color and text", () => {
  render(<App />);
  // text
  const colorButton = screen.getByRole("button", { name: "Change to pink" });
  // color
  expect(colorButton).toHaveStyle({ backgroundColor: "yellow" });
});

test("button when clicked turns pink and updates", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to pink" });
  //click button
  fireEvent.click(colorButton);
  //expect color blue
  expect(colorButton).toHaveStyle({ backgroundColor: "pink" });
  //expect text "Change to red"
  expect(colorButton).toHaveTextContent("Change to yellow");
});

// checkbox to disable toggle
test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to pink" });
  expect(colorButton).toBeEnabled();
  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

// "Checkbox enables button on first click and disables on second click";
test("Checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button");
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

// expect red to be gray and disabled
test("disabled button has gray background and reverts to yellow", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to pink" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  // check button is red and correct
  // expect(button).toHaveStyle({ backgroundColor: "red" });
  // expect(checkbox).toBeEnabled();
  // check button is gray and correct
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "yellow" });
});

// expect blue to be gray and disabled
test("disabled button has gray background and reverts to pink", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to pink" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(button);
  // check button is blue and correct
  // expect(button).toHaveStyle({ backgroundColor: "red" });
  // expect(checkbox).toBeEnabled();
  // check button is gray and correct
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "pink" });
});

// Describe statement is a way of grouping test
describe("spaces before camel-case capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("works for multiple inner capital letter", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
