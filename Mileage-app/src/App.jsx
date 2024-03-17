import { Route, Routes } from "react-router-dom";
import JourneyList from "./components/JourneyList";
import JourneyForm from "./components/JourneyForm";
import JourneyDetails from "./components/JourneyDetails";
import "./App.css";

function App() {
  useEffect(() => {
    initMap();
  }, []);

  return (
    <div className="App">
      {/* Your other components and routes */}
      <Routes>
        <Route path="/" element={<JourneyList />} />
        <Route path="/journey/new" element={<JourneyForm />} />
        <Route path="/journey/:id" element={<JourneyDetails />} />
      </Routes>
    </div>
  );
}

import { useEffect } from "react";

async function initMap() {
  const { Map } = await window.google.maps.importLibrary("maps");

  const map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}



export default App;