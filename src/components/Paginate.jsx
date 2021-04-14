const Paginate = ({ changePage, page, limit, totalArticle }) => {
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
        {page}
        <button
          disabled={page === Math.floor(totalArticle / limit) + 1}
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

// TODO: this doesn't currently work for filtered list (by topic, etc), as totalArticle reflects the grand total
