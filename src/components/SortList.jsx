const SortList = ({ sortListOrder, uri }) => {
  let mainClassName = '';
  !uri
    ? (mainClassName = 'sorting')
    : (mainClassName = 'sorting sorting--comment');

  return (
    <div className={mainClassName}>
      <i className="fas fa-sort-amount-down sorting__sorter"></i>
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
