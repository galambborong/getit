import React from 'react';
import { fetchArticleById, patchArticleVotes } from '../utils/api';
import { Link } from '@reach/router';
// import CommentsList from './CommentsList';
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

  handleClick = (event) => {
    const { id } = event.target;
    patchArticleVotes(this.props.article_id, { inc_votes: id })
      .then((article) => {
        this.setState({ article });
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  render() {
    const { loading, article } = this.state;

    if (loading) return <Loading />;

    const {
      author,
      body,
      created_at,
      title,
      topic,
      votes,
      article_id
    } = article;

    const date = new Date(created_at);

    return (
      <main>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <p>{body}</p>
        <p>{date.toDateString()}</p>
        <p>
          <button
            id="1"
            onClick={(event) => {
              this.handleClick(event);
            }}
          >
            +
          </button>
          {votes}
          <button
            id="-1"
            onClick={(event) => {
              this.handleClick(event);
            }}
          >
            -
          </button>
        </p>
        <p>{topic}</p>
        <Link to={`/articles/${article_id}/comments`}>Comments</Link>
      </main>
    );
  }
}

export default Article;
