import React from 'react';
import { fetchArticleById } from '../utils/api';
import { Link } from '@reach/router';
import Loading from './Loading';
import UpdateVotes from './UpdateVotes';
import AddComment from './AddComment';

class Article extends React.Component {
  state = {
    loading: true,
    error: null,
    article: {},
    newComment: null
  };

  confirmComment = () => {
    this.setState({ newComment: true });
  };

  componentDidMount() {
    fetchArticleById(this.props.article_id).then((article) => {
      this.setState({ article, loading: false, error: false });
    });
  }

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
        <UpdateVotes article_id={article_id} votes={votes} />
        <p>{topic}</p>
        <AddComment
          article_id={article_id}
          confirmComment={this.confirmComment}
        />
        <Link to={`/articles/${article_id}/comments`}>Comments</Link>
      </main>
    );
  }
}

export default Article;
