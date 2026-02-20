import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App Component Tests", () => {

  test("renders main heading", () => {
    render(<App />);
    const heading = screen.getByText(/GitHub Actions Demo/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders description text", () => {
    render(<App />);
    const description = screen.getByText(/Simple React Frontend Application/i);
    expect(description).toBeInTheDocument();
  });

  test("initial counter value should be 0", () => {
    render(<App />);
    const counter = screen.getByText(/Counter is: 0/i);
    expect(counter).toBeInTheDocument();
  });

  test("counter increments when button is clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /Increase/i });

    fireEvent.click(button);
    fireEvent.click(button);

    const updatedCounter = screen.getByText(/Counter is: 2/i);
    expect(updatedCounter).toBeInTheDocument();
  });

});

