import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { fetchArticles } from '../utils/api';
import ArticleCard from './ArticleCard';
import Paginate from './Paginate';
import SortList from './SortList';
import Error from './Error';

export const ArticlesList = ({ topic, username, path }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const [sort_by, setSortBy] = useState('votes');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalArticle, setTotalArticle] = useState(0);

  const sortListOrder = (event) => {
    setSortBy(event);
  };

  const changePage = (increment) => {
    setPage(page + increment);
    setLoading(true);
  };

  useEffect(() => {
    fetchArticles(topic, username, sort_by, page, limit)
      .then(({ articles, total_count }) => {
        setArticles(articles);
        setError(false);
        setLoading(false);
        setTotalArticle(total_count);
      })
      .catch((error) => {
        console.dir(error);
        setError(error);
        setLoading(false);
      });
  }, [sort_by, page, limit, topic, username, path]);

  const randomArticles = [];
  let counter = 3;

  while (counter > 0) {
    randomArticles.push(articles[Math.floor(Math.random() * articles.length)]);
    counter--;
  }

  console.log(loading);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!loading && path === '/') {
    return (
      <main className="articles" data-testid="articles">
        <h2 className="articles__header">Some reading to get you started...</h2>
        <section className="articles-container">
          {randomArticles.map((article) => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </section>
      </main>
    );
  }

  return (
    <main className="articles" data-testid="articles">
      {topic && <h2 className="articles__header">{topic} articles</h2>}
      {username && (
        <h2 className="articles__header articles__header--user">
          @{username}'s articles
        </h2>
      )}
      {!topic && !username && (
        <h2 className="articles__header">All articles</h2>
      )}
      <div className="controls">
        <SortList sortListOrder={sortListOrder} />
      </div>
      <section className="articles-container">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </section>
      <Paginate
        changePage={changePage}
        page={page}
        limit={limit}
        totalArticle={totalArticle}
      />
    </main>
  );
};
