import { handleSentence } from '../utils/handleSentence';
import { Link } from '@reach/router';

const ArticleCard = ({ article }) => {
  const {
    title,
    author,
    body,
    created_at,
    comment_count,
    article_id,
    votes
  } = article;

  const sentence = handleSentence(body);
  const date = new Date(created_at).toDateString();

  return (
    <article className="article-card" data-testid="article-card">
      <h3 className="article-card__title">{title}</h3>
      <p className="article-card__author" data-testid="article-card__author">
        <span className="accent">@{author}</span>{' '}
      </p>
      <p className="article-card__date">{date}</p>
      <p className="article-card__votes">
        <i className="fas fa-thumbs-up accent" /> {votes}
      </p>
      <p className="article-card__blurb">{sentence}&#8230;</p>
      <p className="article-card__comment-count">Comments {comment_count}</p>
      <button className="article-card__btn">
        <Link to={`/articles/${article_id}`}>Read the full article here</Link>
      </button>
    </article>
  );
};

export default ArticleCard;
