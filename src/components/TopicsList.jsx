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
      <main>
        <ul>
          {topics.map((topic) => {
            return (
              <li key={topic.slug}>
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
