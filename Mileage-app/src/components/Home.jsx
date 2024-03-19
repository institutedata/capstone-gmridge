import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

function Home() {
  return (
    <div>
      <h1>Welcome to the Journey App!</h1>
      <Link to="/JourneyList.jsx">View Journeys</Link>
    </div>
  );
}

export default Home;