import React from 'react';
import { postComment } from '../utils/api';
import { navigate } from '@reach/router';

class AddComment extends React.Component {
  state = {
    loading: true,
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
      return currState;
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, body } = this.state.comment;
    const { article_id } = this.props;
    postComment(article_id, username, body)
      .then(() => {
        navigate(`/articles/${article_id}/comments`);
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="add-comment">
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            id="username"
            className="add-comment__username"
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
            onChange={this.handleChange}
          ></textarea>
        </label>
        <button type="submit">Submit your comment</button>
      </form>
    );
  }
}

export default AddComment;
