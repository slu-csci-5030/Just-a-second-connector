import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "../login.component.js";

test("displays alert for invalid credentials", () => {
  render(<Login />);

  // Fill in the login form with invalid details
  const emailInput = screen.getByPlaceholderText("Enter email");
  const passwordInput = screen.getByPlaceholderText("Enter password");
  const submitButton = screen.getByRole("button", { name: "Submit" });

  fireEvent.change(emailInput, { target: { value: "invalid@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "invalidpassword" } });
  fireEvent.click(submitButton);

  // Check if the alert for invalid credentials is displayed
  const alertElement = screen.queryByText(/Invalid email or password/i);
  expect(alertElement).toBeInTheDocument();
});

test("displays alert for successful login", async () => {
  // Mock local storage to contain a user for successful login
  const mockUser = { email: "john.doe@example.com", password: "password123" };
  localStorage.setItem("userData", JSON.stringify([mockUser]));

  render(<Login />);

  // Fill in the login form with valid details
  const emailInput = screen.getByPlaceholderText("Enter email");
  const passwordInput = screen.getByPlaceholderText("Enter password");
  const submitButton = screen.getByRole("button", { name: "Submit" });

  fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });
  fireEvent.click(submitButton);

  // Wait for the alert message to appear
  await waitFor(() => {
    const alertElement = screen.queryByText(/Logged in successfully/i);
    expect(alertElement).toBeInTheDocument();
  });
});