import React, { useEffect, useState } from 'react';
import { fetchTopicsList } from '../utils/api';
import Loading from './Loading';
import Error from './Error';
import TopicCard from './TopicCard';

export const TopicsList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopicsList()
      .then((res) => {
        setLoading(false);
        setError(false);
        setTopics(res);
      })
      .catch((error) => {
        console.dir(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <main className="topics">
      <h2 className="topics__header">Browse by topic...</h2>
      <ul className="topics__list">
        {topics.map((topic) => {
          const { slug } = topic;
          return (
            <li className="topics__link" key={slug}>
              <TopicCard topic={topic} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default TopicsList;
