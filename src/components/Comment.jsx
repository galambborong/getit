import UpdateVotes from './UpdateVotes';

const Comments = ({ comment }) => {
  const { votes, author, body, comment_id } = comment;
  return (
    <article>
      <h2>{author}</h2>
      <p>{body}</p>
      <UpdateVotes votes={votes} comment_id={comment_id} />
    </article>
  );
};

export default Comments;
