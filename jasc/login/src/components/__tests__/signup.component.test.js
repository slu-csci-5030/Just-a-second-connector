// signup.component.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignUp from '../signup.component.js';

test('appends object to local storage when user is registered', () => {
  render(<SignUp />);
  
  // Fill in the registration form
  const firstNameInput = screen.getByPlaceholderText(/First name/i);
  const lastNameInput = screen.getByPlaceholderText(/Last name/i);
  const emailInput = screen.getByPlaceholderText(/Enter email/i);
  const passwordInput = screen.getByPlaceholderText(/Enter password/i);
  const submitButton = screen.getByRole('button', { name: /Sign Up/i });

  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(submitButton);

  // Check if the user data is appended to local storage
  const storedData = JSON.parse(localStorage.getItem('userData'));
  expect(storedData).toContainEqual({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: 'password123'
  });
});