import React, { useState } from 'react';
import { Button } from '@mui/material';
import { saveAs } from 'file-saver';
import Navbar from './Navbar';

export default function JourneyList() {
  const [journeyData, setJourneyData] = useState(null);

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        setJourneyData(data);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };
    reader.readAsText(file);
  };

  // You can implement manipulation functions here

  return (
    <div>
      <Navbar /><br/><br/><br/><br/><br/><br/>
      <h1>Journey List</h1>
      <Button variant="contained" color="primary" onClick={() => handleExport(journeyData)}>
        Export
      </Button>
      {/* Render journey data */}
    </div>
  );
}
