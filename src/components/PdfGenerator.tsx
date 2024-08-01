import React from 'react';
import jsPDF from 'jspdf';

const PdfGenerator: React.FC = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Hi Namaste, Chalo kaam ki baat karte hai', 10, 10);
    doc.save('example.pdf');
  };

  return (
    <div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default PdfGenerator;
