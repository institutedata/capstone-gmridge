import React from 'react';
import { Button } from '@mui/material';
import { saveAs } from 'file-saver';
import Navbar from './Navbar';
// import { jsonToCsv, jsonToPdf, jsonToXlsx } from './exportUtils';

export default function JourneyDetails({ journeyData }) {
  const handleExport = (format) => {
    if (!journeyData) {
      console.error("No data to export");
      return;
    }

    let exportedData;

    switch (format) {
      case "csv":
        exportedData = jsonToCsv(journeyData);
        break;
      case "pdf":
        exportedData = jsonToPdf(journeyData);
        break;
      case "xlsx":
        exportedData = jsonToXlsx(journeyData);
        break;
      default:
        console.error("Invalid export format");
        return;
    }

    const blob = new Blob([exportedData], { type: "application/octet-stream" });
    saveAs(blob, `journey_data.${format}`);
  };

  return (
    <div>
      <Navbar /><br/><br/><br/><br/><br/><br/>
      <h1>Journey Details</h1>
      <Button variant="contained" onClick={() => handleExport("csv")}>
        Export as CSV
      </Button>
      <Button variant="contained" onClick={() => handleExport("pdf")}>
        Export as PDF
      </Button>
      <Button variant="contained" onClick={() => handleExport("xlsx")}>
        Export as XLSX
      </Button>
      {/* Render journey details */}
      <br/><br/><br/><br/><br/><br/>
      <a href="../../Documents/Word-PDF/GUIDEGoogleSemanticLocationHistory.pdf" download>Download the guide</a> to learn how to extract your Google Location History data.
    </div>
  );
}
