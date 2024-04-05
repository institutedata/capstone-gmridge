import { useState } from "react";
import { TextField, Button } from '@mui/material';

export default function JourneyForm() {


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here

    const fileInput = e.target.elements.semanticLocationHistory;

    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const json = e.target.result;
        try {
          const semanticLocationHistory = JSON.parse(json);
          console.log("the semantic location history is", semanticLocationHistory)
          // TODO - send it immediately to the server for further processing and render success to the user etc 

          // POST semanticLocationHistory to the server api

          // programming change routes on success of the above POST to go to a diferent page to display the results
          // useNavigate hook: https://reactrouter.com/en/main/hooks/use-navigate
        } catch (error) {
          console.log("error parsing semantic location history ", error)
        }
      }

      reader.readAsText(file)
    }
  };

  return (
    <div>
      <h1>Add New Google Semantic Location History File</h1>
      <form onSubmit={handleSubmit}>
        <TextField id="semanticLocationHistory" name="semanticLocationHistory" type="file" />
        <Button variant="contained" color="primary" type="submit">
          Upload
        </Button>
      </form>
    </div>
  )
}
