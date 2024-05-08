
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AdminLogin from "../components/AdminLogin"; // Adjust the path as needed

// Mock useHistory hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('AdminLogin', () => {
  it('displays error message on invalid login', async () => {
    render(
      <BrowserRouter>
        <AdminLogin />
      </BrowserRouter>
    );

    // Fill in the username and password fields with invalid credentials
    fireEvent.change(screen.getByLabelText('Username:'), { target: { value: 'invalid_username' } });
    fireEvent.change(screen.getByLabelText('Password:'), { target: { value: 'invalid_password' } });

    // Click the login button
    fireEvent.click(screen.getByText('Login'));

    // Wait for the error message to be displayed
    await waitFor(() => {
      // Check if the error message is present in the document
      expect(screen.getByText('Invalid username or password')).toBeInTheDocument();
    });
  });

  
});
