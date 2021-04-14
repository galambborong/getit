import React from 'react';
import Loading from '../components/Loading';
import { fetchArticles } from '../utils/api';
import ArticleCard from './ArticleCard';
import Paginate from './Paginate';
import SortList from './SortList';
import Error from './Error';

class ArticlesList extends React.Component {
  state = {
    loading: true,
    error: null,
    articles: [],
    sort_by: 'votes',
    page: 1,
    limit: 10,
    totalArticle: 0,
  };

  sortListOrder = (event) => {
    this.setState({ sort_by: event });
  };

  changePage = (increment) => {
    this.setState((currState) => {
      return {
        page: currState.page + increment,
        loading: true,
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
          totalArticle: total_count,
        });
      })
      .catch((error) => {
        console.dir(error);
        this.setState({ error, loading: false });
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
        .catch((error) => {
          console.dir(error);
          this.setState({ error, loading: false });
        });
    }
  }

  render() {
    const { loading, articles, page, totalArticle, limit, error } = this.state;
    const { topic, username, path } = this.props;

    const randomArticles = [];
    let counter = 3;

    while (counter > 0) {
      randomArticles.push(
        articles[Math.floor(Math.random() * articles.length)]
      );
      counter--;
    }

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;

    if (!loading && path === '/') {
      return (
        <main className="articles">
          <h2 className="articles__header">
            Some reading to get you started...
          </h2>
          <section className="articles-container">
            {randomArticles.map((article) => {
              return <ArticleCard article={article} key={article.article_id} />;
            })}
          </section>
        </main>
      );
    }

    return (
      <main className="articles">
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
          <SortList sortListOrder={this.sortListOrder} />
        </div>
        <section className="articles-container">
          {articles.map((article) => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </section>
        <Paginate
          changePage={this.changePage}
          page={page}
          limit={limit}
          totalArticle={totalArticle}
        />
      </main>
    );
  }
}

export default ArticlesList;
