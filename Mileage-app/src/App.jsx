import { Route, Routes } from "react-router-dom";
import JourneyList from "./components/JourneyList";
import JourneyForm from "./components/JourneyForm";
import JourneyDetails from "./components/JourneyDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<JourneyList />} />
        <Route path="/journey/new" element={<JourneyForm />} />
        <Route path="/journey/:id" element={<JourneyDetails />} />
      </Routes>
    </div>
  );
}

export default App;