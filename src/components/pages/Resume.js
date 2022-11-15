import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

import pdf from "../../assets/pdf/resume.pdf";

const styles = {
  section: {
    marginTop: 20,
    // backgroundColor: "#000000",
  },
  spaceSide: {
    marginLeft: 310,
    marginRight: 350,
    width: "100px",

  },
  spaceTop: {
    marginTop: 20,
  },
};

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Grid id="resume-section"
      container
      direction="column"
      alignItems="center"
      style={styles.section}
    >
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      {numPages > 1 && (
        <Grid container justifyContent="center" style={styles.spaceTop}>
          <Button
            variant="contained"
            onClick={() => {
              if (pageNumber > 1) {
                setPageNumber(pageNumber - 1);
              }
            }}
          >
            Previous
          </Button>
          <p id="page-num" style={styles.spaceSide}>
            Page {pageNumber} of {numPages}
          </p>
          <Button
            variant="contained"
            onClick={() => {
              if (pageNumber < numPages) {
                setPageNumber(pageNumber + 1);
              }
            }}
          >
            Next
          </Button>
        </Grid>
      )}
      <Button id="download-btn" variant="outlined" href={pdf} download>
        Download
      </Button>
    </Grid>
  );
}
