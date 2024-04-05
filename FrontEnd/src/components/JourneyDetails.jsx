import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentList from "./Comments";
import axios from "axios";
import { saveAs } from "file-saver";
import { parse } from "json2csv"; // JSON to CSV
import { jsPDF } from "jspdf"; // JSON to PDF
import XLSX from "xlsx"; // JSON to XLSX

export default function JourneyDetails() {
  const { id } = useParams();
  const [journey, setJourney] = useState(null);

  useEffect(() => {
    // Fetch journey data based on the id
    const fetchData = async () => {
      try {
        const result = await axios(`/api/journeys/${id}`);
        setJourney(result.data);
      } catch (error) {
        console.error("Error fetching journey data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleExport = async (format) => {
    try {
      // Fetch journey data based on the id
      const result = await axios(`/api/journeys/${id}`);

      // Convert journey data to the selected format
      let exportedData;
      switch (format) {
        case "csv":
          exportedData = jsonToCsv(result.data);
          break;
        case "pdf":
          exportedData = jsonToPdf(result.data);
          break;
        case "xlsx":
          exportedData = jsonToXlsx(result.data);
          break;
        default:
          console.error("Invalid export format");
          return;
      }

      // Save the exported data as a file
      const blob = new Blob([exportedData], { type: "application/octet-stream" });
      saveAs(blob, `journey_data.${format}`);
    } catch (error) {
      console.error("Error exporting data:", error);
    }
  };

  // Function to convert JSON data to CSV format
  const jsonToCsv = (data) => {
    const fields = Object.keys(data[0]); // Assuming the structure is consistent across objects
    const opts = { fields };
    return parse(data, opts);
  };

  // Function to convert JSON data to PDF format
  const jsonToPdf = (data) => {
    const doc = new jsPDF();
    doc.text(JSON.stringify(data), 10, 10);
    return doc.output("datauristring");
  };

  // Function to convert JSON data to XLSX format
  const jsonToXlsx = (data) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    return XLSX.write(wb, { type: "binary", bookType: "xlsx" });
  };

  return (
    <div>
      {journey ? (
        <>
          <h1>{journey.name}</h1>
          <p>{journey.description}</p>
          <p>
            From: {journey.startPoint} to {journey.endPoint}
          </p>
          <CommentList comments={journey.comments} />
          <div>
            <button onClick={() => handleExport("csv")}>Export as CSV</button>
            <button onClick={() => handleExport("pdf")}>Export as PDF</button>
            <button onClick={() => handleExport("xlsx")}>Export as XLSX</button>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
