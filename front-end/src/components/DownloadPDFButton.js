import React from 'react';
import { jsPDF } from 'jspdf';

const DownloadPDFButton = ({ formData }) => {
    const handleDownloadPDF = () => {
        const doc = new jsPDF();

        doc.text('Employer Registration Form', 20, 20);
        doc.text(`Name: ${formData.name}`, 20, 30);
        doc.text(`Email: ${formData.email}`, 20, 40);
        doc.text(`Company Name: ${formData.companyName}`, 20, 50);
        doc.text(`Company Location: ${formData.companyLocation}`, 20, 60);
        doc.text(`Hiring Manager Question: ${formData.hiringManagerQuestion}`, 20, 70);
        doc.text(`Specific Positions: ${formData.specificPositions}`, 20, 80);
        doc.text(`Pay Rate: ${formData.payRate}`, 20, 90);
        doc.text(`Eligible Benefits: ${formData.eligibleBenefits}`, 20, 100);
        doc.text(`Hiring Type: ${formData.hiringType}`, 20, 110);
        // Add more fields as necessary

        doc.save('employer_registration_form.pdf');
    };

    return (
        <button onClick={handleDownloadPDF}>Download Form as PDF</button>
    );
};

export default DownloadPDFButton;
