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
    <article className="article">
      <h3 className="article__title">{title}</h3>
      <p className="article__author">
        <span className="accent">{author}</span>{' '}
      </p>
      <p className="article__date">{date}</p>
      <p className="article__votes">+/- {votes}</p>
      <p className="article__blurb">{sentence}&#8230;</p>
      <p className="article__comment-count">Comments {comment_count}</p>
      <button className="article__btn">
        <Link to={`/articles/${article_id}`}>Read the full article here</Link>
      </button>
    </article>
  );
};

export default ArticleCard;
