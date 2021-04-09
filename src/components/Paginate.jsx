const Paginate = ({ changePage, page, limit, totalArticle }) => {
  return (
    <div className="pagination">
      <button
        disabled={page === 1}
        onClick={() => {
          changePage(-1);
        }}
      >
        prev
      </button>
      <p>{page}</p>
      <button
        // TODO: this doesn't currently work for filtered lists
        // (by topic, etc), as totalArticle reflects the grand total

        disabled={page === Math.floor(totalArticle / limit) + 1}
        onClick={() => {
          changePage(1);
        }}
      >
        next
      </button>
    </div>
  );
};

export default Paginate;
