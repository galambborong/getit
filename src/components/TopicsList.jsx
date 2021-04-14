import React from 'react';
import { fetchTopicsList } from '../utils/api';
import Loading from './Loading';
import Error from './Error';
import TopicCard from './TopicCard';

class TopicsList extends React.Component {
  state = {
    loading: true,
    error: null,
    topics: [],
  };

  componentDidMount() {
    fetchTopicsList()
      .then((res) => {
        this.setState({ loading: false, error: false, topics: res });
      })
      .catch((error) => {
        console.dir(error);
        this.setState({ loading: false, error });
      });
  }

  render() {
    const { loading, topics, error } = this.state;
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
  }
}

export default TopicsList;
