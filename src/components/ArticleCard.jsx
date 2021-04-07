const ArticleCard = ({ article }) => {
  const { title, author, body, created_at, comment_count } = article;
  return (
    <article className="article-card">
      <h3 className="article-card__title">{title}</h3>
      <h4 className="article-card__author">{author}</h4>
      <h5 className="article-card__date">{created_at}</h5>
      <p className="article-card__blurb">{body}</p>
      <p className="article-card__comment-count">{comment_count}</p>
    </article>
  );
};

export default ArticleCard;
