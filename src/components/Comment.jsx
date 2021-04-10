import UpdateVotes from './UpdateVotes';

const Comment = ({ comment }) => {
  const { votes, author, body, comment_id } = comment;
  return (
    <article className="comment-card">
      <h2 className="comment-card__author">{author}</h2>
      <p className="comment-card__body">{body}</p>
      <UpdateVotes votes={votes} comment_id={comment_id} />
    </article>
  );
};

export default Comment;
