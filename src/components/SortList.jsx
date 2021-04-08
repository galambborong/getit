const SortList = ({ sortListOrder, uri }) => {
  return (
    <div className="sorting">
      <button onClick={() => sortListOrder('votes')} className="sorting__btn">
        Votes
      </button>
      <button
        onClick={() => sortListOrder('created_at')}
        className="sorting__btn"
      >
        Date
      </button>
      <button onClick={() => sortListOrder('author')} className="sorting__btn">
        Author
      </button>
      {!uri && (
        <button
          onClick={() => sortListOrder('comment_count')}
          className="sorting__btn"
        >
          Number of Comments
        </button>
      )}
    </div>
  );
};
export default SortList;
