import { Link } from "react-router-dom";

export default function JourneyList() {
  return (
    <div>
      <h1>Journey List</h1>
      <ul>
        {/* Render journey list items here */}
        <li>
          <Link to="/journey/1">Journey 1</Link>
        </li>
      </ul>
    </div>
  );
}