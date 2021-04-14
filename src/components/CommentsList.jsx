import React from 'react';
import { fetchCommentsByArticleId, removeComment } from '../utils/api';
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
    newComment: null,
    commentRemoved: null,
    username: 'tickle122',
  };

  sortListOrder = (event) => {
    this.setState({ sort_by: event });
  };

  confirmComment = () => {
    this.setState({ newComment: true });
  };

  confirmDelete = (commentId) => {
    removeComment(commentId).then(() => {
      this.setState({ commentRemoved: true });
    });
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
    const { sort_by, newComment, commentRemoved } = this.state;
    const { article_id } = this.props;
    if (
      prevState.sort_by !== sort_by ||
      prevState.newComment !== newComment ||
      prevState.commentRemoved !== commentRemoved
    ) {
      fetchCommentsByArticleId(article_id, sort_by)
        .then((comments) => {
          this.setState({ comments, newComment: null, commentRemoved: null });
        })
        .catch((err) => {
          console.dir(err);
          this.setState({
            error: true,
            commentRemoved: false,
            newComment: false,
          });
        });
    }
  }

  render() {
    const { loading, comments, username } = this.state;
    const { uri, article_id } = this.props;

    if (loading) return <Loading />;

    return (
      <div>
        <main className="comments">
          <h2 className="comments__title">Comments</h2>
          <SortList sortListOrder={this.sortListOrder} uri={uri} />
          <section className="comments-container">
            {comments.map((comment) => {
              return (
                <Comment
                  comment={comment}
                  key={comment.comment_id}
                  confirmDelete={this.confirmDelete}
                  user={username}
                />
              );
            })}
          </section>
        </main>
        <AddComment
          article_id={article_id}
          confirmComment={this.confirmComment}
        />
      </div>
    );
  }
}

export default CommentsList;
