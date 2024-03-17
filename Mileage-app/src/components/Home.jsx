import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Journey App!</h1>
      <Link to="/journeys">View Journeys</Link>
    </div>
  );
}

export default Home;