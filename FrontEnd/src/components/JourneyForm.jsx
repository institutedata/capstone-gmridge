import React from 'react';
import { TextField, Button } from '@mui/material';

export default function JourneyForm() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here

    // Access the file input element from the form
    const fileInput = e.target.elements.semanticLocationHistory;

    // Check if a file is selected
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
  
      // Read the contents of the file as text
      reader.onload = (e) => {
        const json = e.target.result;
        try {
          // Parse the JSON content
          const semanticLocationHistory = JSON.parse(json);
          console.log("the semantic location history is", semanticLocationHistory)
          // TODO - send it immediately to the server for further processing and render success to the user etc 

          // POST semanticLocationHistory to the server api

          // programming change routes on success of the above POST to go to a different page to display the results
          // useNavigate hook: https://reactrouter.com/en/main/hooks/use-navigate
        } catch (error) {
          console.log("error parsing semantic location history ", error)
        }
      }

      // Start reading the file as text
      reader.readAsText(file)
    }
  };

  const handleDownload = () => {
    // Create a Blob object with the content of the Word document
    const blob = new Blob(['Your Word Document Content Here'], { type: 'application/msword' });
    
    // Create a link element
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    
    // Set the file name
    link.download = 'YourGuide.docx';
    
    // Append the link to the document body
    document.body.appendChild(link);
    
    // Programmatically click the link to start the download
    link.click();
    
    // Remove the link from the document body
    document.body.removeChild(link);
  };

  return (
    <div>
      <h1>Add New Google Semantic Location History File</h1>
      <label>Upload a JSON file containing your Google Semantic Location History</label>
      {/* Form for uploading the file */}
      <form onSubmit={handleSubmit}>
        <TextField id="semanticLocationHistory" name="semanticLocationHistory" type="file" />
        <Button variant="contained" color="primary" type="submit">
          Upload
        </Button>
      </form>
      <br/><br/><br/>
      {/* Button for downloading guide */}
      <p>
        Click <button onClick={handleDownload}>here</button> for guide to download your Google Semantic Location History.
      </p>
    </div>
  );
}
