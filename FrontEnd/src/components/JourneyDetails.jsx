import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentList from "./Comments";

export default function JourneyDetails() {
  const { id } = useParams();
  const [journey, setJourney] = useState(null);

  useEffect(() => {
    // Fetch journey data based on the id
    // For example, using axios:
    const fetchData = async () => {
      const result = await axios(`/api/journeys/${id}`);
      setJourney(result.data);
    };

    fetchData();
  }, [id]);

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
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}