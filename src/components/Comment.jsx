import UpdateVotes from './UpdateVotes';
import RemoveComment from "./RemoveComment";

const Comment = ({ comment, confirmDelete }) => {
  const { votes, author, body, comment_id } = comment;
  return (
    <article className="comment-card">
      <h2 className="comment-card__author">{author}</h2>
      <p className="comment-card__body">{body}</p>
      <UpdateVotes votes={votes} comment_id={comment_id} />
      <RemoveComment commentId={comment_id} author={author} confirmDelete={confirmDelete}/>
    </article>
  );
};

export default Comment;
