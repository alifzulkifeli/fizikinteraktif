import React, { useState } from "react";
import { Document, Page ,pdfjs} from "react-pdf";
import { SizeMe } from 'react-sizeme'
export default function SinglePage(props) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (

    <div className=" w-screen ">

<SizeMe>
  {({ size }) => (
    <Document file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}>

    
      <Page pageNumber={pageNumber} width={size.width ? size.width : 1} />
    </Document>
  )}
</SizeMe>
      {/* <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
        className="w-screen"
      >
        <Page pageNumber={pageNumber} />
      </Document> */}
      <div>
        <p className="text-center m-3">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <div className="flex justify-center m-3">
 <button
        
        className="bg-likepurple hover:bg-likeblue text-white font-bold py-2 px-4 border border-likeblue rounded mr-4"
        
        type="button" disabled={pageNumber <= 1} onClick={previousPage}>


          Kembali
        </button>
        <button

        className="bg-likepurple hover:bg-likeblue text-white font-bold py-2 px-4 border border-likeblue rounded disabled:opacity-50"
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Seterusnya
        </button>

        </div>
       


 
      </div>
    </div>
  );
}