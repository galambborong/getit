import React from 'react';
import { postComment } from '../utils/api';
import { navigate } from '@reach/router';

class AddComment extends React.Component {
  state = {
    error: null,
    comment: {
      username: '',
      body: ''
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((currState) => {
      const updatedComment = { ...currState.comment };
      updatedComment[name] = value;
      currState.comment = updatedComment;
      currState.error = false;
      return currState;
    });
  };

  handleSubmit = (event) => {
    console.log('invoked');
    event.preventDefault();
    const { username, body } = this.state.comment;
    const { article_id, path } = this.props;
    postComment(article_id, username, body)
      .then(() => {
        this.setState({ comment: {} });
        navigate(`/articles/${article_id}/comments`);
      })
      .catch((err) => {
        console.dir(err);
        this.setState({ comment: {}, error: true });
      });
  };

  render() {
    const { error } = this.state;

    console.log(this.state);

    if (error)
      return (
        <div>
          <h3>Comment not posted</h3>
          <p>You must registered in order to comment</p>
        </div>
      );

    return (
      <div className="add-comment">
        <h3>Add your comment!</h3>
        <form onSubmit={this.handleSubmit} className="add-comment__form">
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              id="username"
              className="add-comment__username"
              value={this.state.comment.username}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="body">
            Comment:
            <textarea
              type="text"
              name="body"
              id="body"
              className="add-comment__body"
              value={this.state.comment.body}
              onChange={this.handleChange}
            ></textarea>
          </label>
          <button type="submit">Submit your comment</button>
        </form>
      </div>
    );
  }
}

export default AddComment;
