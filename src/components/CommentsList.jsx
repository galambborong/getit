import React from 'react';
import { fetchCommentsByArticleId } from '../utils/api';
import Loading from './Loading';
import Comment from './Comment';

class CommentsList extends React.Component {
  state = {
    loading: true,
    error: null,
    comments: []
  };

  componentDidMount() {
    fetchCommentsByArticleId(this.props.article_id)
      .then((comments) => {
        this.setState({ comments, loading: false, error: false });
      })
      .catch((err) => {
        console.dir(err);
        this.setState({ error: true });
      });
  }

  render() {
    const { loading, comments } = this.state;
    if (loading) return <Loading />;

    return (
      <main>
        {comments.map((comment) => {
          return <Comment comment={comment} key={comment.comment_id} />;
        })}
      </main>
    );
  }
}

export default CommentsList;
