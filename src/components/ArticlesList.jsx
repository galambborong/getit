import React from 'react';
import Loading from '../components/Loading';
import { fetchArticles } from '../utils/api';
import ArticleCard from './ArticleCard';
import Paginate from './Paginate';
import SortList from './SortList';

class ArticlesList extends React.Component {
  state = {
    loading: true,
    error: null,
    articles: [],
    sort_by: 'votes',
    page: 1,
    limit: 10,
    totalArticle: 0
  };

  sortListOrder = (event) => {
    this.setState({ sort_by: event });
  };

  changePage = (increment) => {
    this.setState((currState) => {
      return {
        page: currState.page + increment,
        loading: true
        // loading: true
      };
    });
  };

  componentDidMount() {
    const { topic, username } = this.props;
    const { sort_by, page, limit } = this.state;
    fetchArticles(topic, username, sort_by, page, limit)
      .then(({ articles, total_count }) => {
        this.setState({
          articles,
          error: false,
          loading: false,
          totalArticle: total_count
        });
      })
      .catch((err) => {
        console.dir(err);
        this.setState({ error: true });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic, username } = this.props;
    const { sort_by, page, limit } = this.state;
    if (prevState.sort_by !== sort_by || prevState.page !== page) {
      fetchArticles(topic, username, sort_by, page, limit)
        .then(({ articles, total_count }) => {
          this.setState({ articles, total_count, loading: false });
        })
        .catch((err) => {
          console.dir(err);
          this.setState({ error: true });
        });
    }
  }

  render() {
    const { loading, articles, page, totalArticle, limit } = this.state;
    const { topic, username, path } = this.props;

    const randomArticles = [];
    let counter = 3;

    while (counter > 0) {
      randomArticles.push(
        articles[Math.floor(Math.random() * articles.length)]
      );
      counter--;
    }

    if (loading) {
      return <Loading />;
    }

    if (!loading && path === '/') {
      return (
        <main>
          <h2>Here's three articles to get you started...</h2>
          {randomArticles.map((article) => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </main>
      );
    }

    return (
      <main className="articles">
        <h2>{topic}</h2>
        <h2>{username}</h2>
        <Paginate
          changePage={this.changePage}
          page={page}
          limit={limit}
          totalArticle={totalArticle}
        />
        <SortList sortListOrder={this.sortListOrder} />
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </main>
    );
  }
}

export default ArticlesList;
