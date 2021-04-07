const Comments = ({ comment }) => {
  return (
    <article>
      <h2>{comment.author}</h2>
      <p>{comment.body}</p>
    </article>
  );
};

export default Comments;
