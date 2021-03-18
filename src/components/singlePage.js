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

  const handleLink = () => {
    if (pageNumber === props.num) {
      const newWindow = window.open( props.link , '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }

    if (pageNumber === props.num2) {
      const newWindow = window.open( props.file , '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
    
  }

  const { pdf } = props;

  return (
    <>
    <div >
        <div className="flex justify-center m-3">
 <button
        className="bg-likepurple hover:bg-likeblue text-white font-bold py-2 px-1 border border-likeblue rounded mr-4"
        type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Kembali
        </button>
        <button
        className="bg-likepurple hover:bg-likeblue text-white font-bold py-2 px-1 border border-likeblue rounded disabled:opacity-50"
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Seterusnya
        </button>
        </div>
 <p className="text-center m-3">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
      </div>


    <div className=" w-screen  p-2 md:p-20 md:pt-2 xl:p-40 xl:pt-2">
<SizeMe>
  {({ size }) => (
    <Document file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
        onClick={handleLink}
        >
      <Page pageNumber={pageNumber} width={size.width ? size.width : 1} />
    </Document>
  )}
</SizeMe>
    </div>
    </>
  );
}