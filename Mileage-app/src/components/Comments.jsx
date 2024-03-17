import { Link } from "react-router-dom";

export default function CommentList({ comments }) {
  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            <Link to={`/comments/${comment._id}`}>{comment.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

