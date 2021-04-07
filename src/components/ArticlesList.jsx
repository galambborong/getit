import React from 'react';
import Loading from '../components/Loading';
import { fetchAllArticles } from '../utils/api';
import ArticleCard from './ArticleCard';

class ArticlesList extends React.Component {
  state = {
    loading: true,
    error: null,
    articles: []
  };

  componentDidMount() {
    fetchAllArticles()
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
