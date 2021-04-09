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
          <i className="fas fa-angle-double-left"></i>
        </button>
        {page}
        <button
          // TODO: this doesn't currently work for filtered lists
          // (by topic, etc), as totalArticle reflects the grand total

          disabled={page === Math.floor(totalArticle / limit) + 1}
          className="pagination__btn"
          onClick={() => {
            changePage(1);
          }}
        >
          <i className="fas fa-angle-double-right"></i>
        </button>
      </p>
    </div>
  );
};

export default Paginate;
