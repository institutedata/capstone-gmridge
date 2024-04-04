import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import JourneyList from './pages/JourneyList';
import JourneyForm from './pages/JourneyForm';
import JourneyDetails from './pages/JourneyDetails';

function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journeyList" element={<JourneyList />} />
        <Route path="/journeyForm" element={<JourneyForm />} />
        <Route path="/journeyDetails" element={<JourneyDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesConfig;
