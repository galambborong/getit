import React from 'react';
import { fetchTopicsList } from '../utils/api';
import Loading from './Loading';
import TopicCard from './TopicCard';

class TopicsList extends React.Component {
  state = {
    loading: true,
    error: null,
    topics: []
  };

  componentDidMount() {
    fetchTopicsList().then((res) => {
      this.setState({ loading: false, error: false, topics: res });
    });
  }

  render() {
    const { loading, topics } = this.state;
    if (loading) return <Loading />;
    return (
      <main className="topics">
        <h2 className="topics__header">Browse by topic...</h2>
        <ul className="topics__list">
          {topics.map((topic) => {
            return (
              <li className="topics__link" key={topic.slug}>
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
