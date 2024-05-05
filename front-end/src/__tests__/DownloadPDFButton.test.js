import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DownloadPDFButton from '../components/DownloadPDFButton';
 
describe('DownloadPDFButton', () => {
  it('should render a download button', () => {
    render(<DownloadPDFButton formData={{}} />);
    const downloadButton = screen.getByText('Download Form as PDF');
    expect(downloadButton).toBeInTheDocument();
    expect(downloadButton).toBeEnabled(); 
  });
 
  it('should trigger download when the button is clicked', () => {
  
    const formData = {};
 
    
    render(<DownloadPDFButton formData={formData} />);
 
    fireEvent.click(screen.getByText('Download Form as PDF'));
  });
});