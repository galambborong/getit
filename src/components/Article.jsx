import React from 'react';
import { fetchArticleById } from '../utils/api';
import { Link } from '@reach/router';
import Loading from './Loading';
import UpdateVotes from './UpdateVotes';
import AddComment from './AddComment';
import Error from './Error';

class Article extends React.Component {
  state = {
    loading: true,
    error: null,
    article: {},
    newComment: null,
  };

  confirmComment = () => {
    this.setState({ newComment: true });
  };

  componentDidMount() {
    fetchArticleById(this.props.article_id)
      .then((article) => {
        this.setState({ article, loading: false, error: false });
      })
      .catch((err) => {
        console.dir(err);
        this.setState({ error: err, loading: false });
      });
  }

  render() {
    const { loading, error, article } = this.state;

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;

    const {
      author,
      body,
      created_at,
      title,
      topic,
      votes,
      article_id,
    } = article;

    const date = new Date(created_at);

    return (
      <div>
        <main className="article">
          <h2 className="article__header">{title}</h2>
          <h3 className="article__author">@{author}</h3>
          <p className="article__body">{body}</p>
          <p className="article__date">{date.toDateString()}</p>
          <UpdateVotes article_id={article_id} votes={votes} />
          <p className="article__topic">#{topic}</p>
          <Link
            to={`/articles/${article_id}/comments`}
            className="article__comments"
          >
            See comments
          </Link>
        </main>
        <AddComment
          article_id={article_id}
          confirmComment={this.confirmComment}
        />
      </div>
    );
  }
}

export default Article;
