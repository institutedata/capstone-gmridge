import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import JourneyList from './pages/JourneyList';
import JourneyForm from './pages/JourneyForm';
import JourneyDetails from './pages/JourneyDetails';

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/journeys" element={<JourneyList />} />
      <Route path="/journeys/new" element={<JourneyForm />} />
      <Route path="/journeys/:id" element={<JourneyDetails />} />
    </Routes>
  );
}

export default RoutesConfig;