import UpdateVotes from './UpdateVotes';
import RemoveComment from "./RemoveComment";

const Comment = ({comment, confirmDelete, user}) => {
  const {votes, author, body, comment_id} = comment;
  return (
    <article className="comment-card">
      <h2 className="comment-card__author">{author}</h2>
      <p className="comment-card__body">{body}</p>
      <UpdateVotes votes={votes} comment_id={comment_id}/>
      {user === author &&
      <RemoveComment commentId={comment_id} confirmDelete={confirmDelete}/>
      }
    </article>
  );
};

export default Comment;
