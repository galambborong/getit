const Paginate = ({ changePage, page, limit, totalArticle }) => {
  const max = Math.floor(totalArticle / limit) + 1;
  return (
    <div className="pagination">
      <p>
        <button
          disabled={page === 1}
          className="pagination__btn"
          onClick={() => {
            changePage(-1);
          }}
        >
          <i className="fas fa-angle-double-left" />
        </button>
        {page} / {max}
        <button
          disabled={page === max}
          className="pagination__btn"
          onClick={() => {
            changePage(1);
          }}
        >
          <i className="fas fa-angle-double-right" />
        </button>
      </p>
    </div>
  );
};

export default Paginate;
