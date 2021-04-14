const RemoveComment = ({ commentId, confirmDelete }) => {
  return (
    <div className="remove-comment">
      <button
        className="remove-comment__btn"
        onClick={() => confirmDelete(commentId)}
      >
        Delete comment
      </button>
    </div>
  );
};

export default RemoveComment;
