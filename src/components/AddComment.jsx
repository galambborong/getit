import React from 'react';
import { postComment } from '../utils/api';
import { navigate } from '@reach/router';

class AddComment extends React.Component {
  state = {
    username: 'tickle122',
    body: '',
    error: null,
    success: null
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { confirmComment, article_id } = this.props;
    const { username, body } = this.state;
    postComment(article_id, username, body)
      .then(() => {
        confirmComment();
        this.setState({ success: true });
        navigate(`/articles/${article_id}/comments`);
      })
      .catch((err) => {
        console.dir(err);
        this.setState({ comment: {}, error: true });
      });
  };

  render() {
    const { success, error } = this.state;

    if (success) {
      return (
        <div>
          <h3>Success!</h3>
          <p>Your comment has been added</p>
        </div>
      );
    }
    if (error) {
      return (
        <div>
          <h3>Comment not posted</h3>
          <p>You must registered in order to comment</p>
        </div>
      );
    }

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
              value={this.state.username}
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
              value={this.state.body}
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
