

import { Document, Page,pdfjs } from 'react-pdf';
import myPdf from '../assets/Factory.pdf'; // Đảm bảo tệp PDF nằm cùng cấp với file App.js
import { useState } from 'react';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.worker.min.js`;

const PDFViewer = () => {
  const [numPages , setNumPages] = useState()
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages)
  }

  return (
    <div style={{ height: '750px' }}>
      <Document file={myPdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page  pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false}/>
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};
export default PDFViewer;
