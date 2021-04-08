import React from 'react';
import { fetchCommentsByArticleId } from '../utils/api';
import Loading from './Loading';
import Comment from './Comment';
import SortList from './SortList';
import AddComment from './AddComment';

class CommentsList extends React.Component {
  state = {
    loading: true,
    error: null,
    comments: [],
    sort_by: 'votes',
    newComment: null
  };

  sortListOrder = (event) => {
    this.setState({ sort_by: event });
  };

  componentDidMount() {
    const { sort_by } = this.state;
    const { article_id } = this.props;
    fetchCommentsByArticleId(article_id, sort_by)
      .then((comments) => {
        this.setState({ comments, loading: false, error: false });
      })
      .catch((err) => {
        console.dir(err);
        this.setState({ error: true });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, comments } = this.state;
    const { article_id } = this.props;
    if (
      prevState.sort_by !== sort_by ||
      prevState.comments.length !== comments.length
    ) {
      fetchCommentsByArticleId(article_id, sort_by)
        .then((comments) => {
          this.setState({ comments });
        })
        .catch((err) => {
          console.dir(err);
          this.setState({ error: true });
        });
    }
  }

  render() {
    const { loading, comments, newComment } = this.state;
    const { uri, article_id } = this.props;

    if (loading) return <Loading />;

    return (
      <main>
        <SortList sortListOrder={this.sortListOrder} uri={uri} />
        <AddComment article_id={article_id} />
        {comments.map((comment) => {
          return <Comment comment={comment} key={comment.comment_id} />;
        })}
        <AddComment article_id={article_id} />
      </main>
    );
  }
}

export default CommentsList;
