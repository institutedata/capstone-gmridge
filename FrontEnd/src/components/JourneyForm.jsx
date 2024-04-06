import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Navbar from './Navbar';

export default function JourneyForm({ onFileUpload }) {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      onFileUpload(file);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <Navbar /><br/><br/><br/><br/><br/><br/>
      <h1>Add New Google Semantic Location History File</h1>
      <label>Upload a JSON file containing your Google Semantic Location History</label>
      <form onSubmit={handleSubmit}>
        <TextField type="file" onChange={handleFileChange} />
        <Button variant="contained" color="primary" type="submit">
          Upload
        </Button>
      </form>
    </div>
  );
}
