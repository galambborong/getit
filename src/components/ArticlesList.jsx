import React from 'react';
import Loading from '../components/Loading';
import { fetchArticles } from '../utils/api';
import ArticleCard from './ArticleCard';
import SortList from './SortList';

class ArticlesList extends React.Component {
  state = {
    loading: true,
    error: null,
    articles: [],
    sort_by: 'votes'
  };
  sortListOrder = (event) => {
    this.setState({ sort_by: event });
  };

  componentDidMount() {
    const { topic, username } = this.props;
    const { sort_by } = this.state;
    fetchArticles(topic, username, sort_by)
      .then((resArticles) => {
        this.setState({ articles: resArticles, error: false, loading: false });
      })
      .catch((err) => {
        console.dir(err);
        this.setState({ error: true });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic, username } = this.props;
    const { sort_by } = this.state;
    if (prevState.sort_by !== sort_by) {
      fetchArticles(topic, username, sort_by)
        .then((articles) => {
          this.setState({ articles });
        })
        .catch((err) => {
          console.dir(err);
          this.setState({ error: true });
        });
    }
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
        <SortList sortListOrder={this.sortListOrder} />
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </main>
    );
  }
}

export default ArticlesList;
