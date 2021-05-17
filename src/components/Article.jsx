import React, { useEffect, useState } from 'react';
import { fetchArticleById } from '../utils/api';
import { Link } from '@reach/router';
import Loading from './Loading';
import UpdateVotes from './UpdateVotes';
import AddComment from './AddComment';
import Error from './Error';

export const Article = ({ article_id }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [article, setArticle] = useState({});
  const [newComment, setNewComment] = useState(null);

  const confirmComment = () => {
    setNewComment(true);
  };

  useEffect(() => {
    fetchArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setError(false);
        setLoading(false);
      })
      .catch((err) => {
        console.dir(err);
        setError(err);
        setLoading(false);
      });
  }, [article_id]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const { author, body, created_at, title, topic, votes } = article;

  const date = new Date(created_at);

  return (
    <div className="article-wrapper">
      <main className="article">
        <h2 className="article__header">{title}</h2>
        <h3 className="article__author">@{author}</h3>
        <p className="article__body">{body}</p>
        <p className="article__date">{date.toDateString()}</p>
        <UpdateVotes article_id={article_id} votes={votes} />
        <p className="article__topic">#{topic}</p>
        <Link
          to={`/articles/${article_id}/comments`}
          className="article__comments"
        >
          See comments
        </Link>
      </main>
      <AddComment article_id={article_id} confirmComment={confirmComment} />
    </div>
  );
};

export default Article;
