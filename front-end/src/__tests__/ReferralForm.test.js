import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ReferralForm from '../components/ReferralForm';

describe('ReferralForm', () => {
  it('should render all the input fields and options', () => {
    render(<ReferralForm />);
    
    // Assert that all input fields are rendered
    expect(screen.getByLabelText('Jobseeker First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Jobseeker Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Jobseeker Phone Number')).toBeInTheDocument();
    expect(screen.getByLabelText('Jobseeker Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Referrer Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Referrer Email')).toBeInTheDocument();

    // can add more assestions... as required...
  });

  it('should display error messages for mandatory fields when submitted with empty values', () => {
    render(<ReferralForm />);

    fireEvent.click(screen.getByText('Submit')); // Trigger form submission without filling any fields

    // Assert that error messages are displayed for all mandatory fields
    expect(screen.getAllByText('This field is required')).toHaveLength(15);
  });

  // Add more test cases as needed to validate specific behaviors
});
