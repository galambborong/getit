import React from 'react';
import Loading from '../components/Loading';
import { fetchArticles } from '../utils/api';
import ArticleCard from './ArticleCard';

class ArticlesList extends React.Component {
  state = {
    loading: true,
    error: null,
    articles: []
  };

  componentDidMount() {
    const { topic, username } = this.props;
    fetchArticles(topic, username)
      .then((resArticles) => {
        this.setState({ articles: resArticles, error: false, loading: false });
      })
      .catch((err) => {
        console.dir(err);
        this.setState({ error: true });
      });
  }

  render() {
    const { loading, articles } = this.state;

    console.log(
      'Articles match by props:',
      articles.every(
        (article) =>
          article.topic === this.props.topic ||
          article.author === this.props.username
      )
    );

    if (loading) {
      return <Loading />;
    }

    return (
      <main className="articles">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </main>
    );
  }
}

export default ArticlesList;
