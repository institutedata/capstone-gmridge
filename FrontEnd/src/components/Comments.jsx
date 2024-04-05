import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

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

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

