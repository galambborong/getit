const SortList = ({ sortListOrder }) => {
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
    </div>
  );
};
export default SortList;
