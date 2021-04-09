const SortList = ({ sortListOrder, uri }) => {
  return (
    <div className="sorting">
      <i className="fas fa-sort-amount-down sorting__sorter"></i>
      {/* <h3 className="sorting__sub-head">Sort by</h3> */}
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
