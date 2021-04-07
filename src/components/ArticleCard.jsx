import { handleSentence } from '../utils/handleSentence';
import { Link } from '@reach/router';

const ArticleCard = ({ article }) => {
  const {
    title,
    author,
    body,
    created_at,
    comment_count,
    article_id
  } = article;

  const sentence = handleSentence(body);
  const date = new Date(created_at);

  return (
    <article className="article-card">
      <h3 className="article-card__title">{title}</h3>
      <h4 className="article-card__author">{author}</h4>
      <h5 className="article-card__date">{date.toDateString()}</h5>
      <p className="article-card__blurb">{sentence}&#8230;</p>
      <p className="article-card__comment-count">{comment_count}</p>
      <button className="article-card__btn">
        <Link to={`/articles/${article_id}`}>Read the full article here</Link>
      </button>
    </article>
  );
};

export default ArticleCard;
