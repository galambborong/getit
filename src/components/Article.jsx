import React from 'react';
import { fetchArticleById } from '../utils/api';
import Loading from './Loading';

class Article extends React.Component {
  state = {
    loading: true,
    error: null,
    article: {}
  };

  componentDidMount() {
    fetchArticleById(this.props.article_id).then((article) => {
      this.setState({ article, loading: false, error: false });
    });
  }

  render() {
    const { loading, article } = this.state;

    if (loading) return <Loading />;

    const { author, body, created_at, title, topic, votes } = article;

    const date = new Date(created_at);

    return (
      <main>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <p>{body}</p>
        <p>{date.toDateString()}</p>
        <p>{votes}</p>
        <p>{topic}</p>
      </main>
    );
  }
}

export default Article;
