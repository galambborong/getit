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
        <h3 className="add-comment__header">Have something to add?</h3>
        <form onSubmit={this.handleSubmit} className="comment-form">
          <label
            id="lbl-username"
            className="comment-form__label"
            htmlFor="username"
          >
            Username:
          </label>
          <input
            disabled
            type="text"
            name="username"
            id="username"
            className="comment-form__input"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label id="lbl-body" className="comment-form__label" htmlFor="body">
            Comment:
          </label>
          <textarea
            type="text"
            name="body"
            id="body"
            className="comment-form__input"
            value={this.state.body}
            onChange={this.handleChange}
          ></textarea>
          <button className="comment-form__btn" type="submit">
            Submit your comment
          </button>
        </form>
      </div>
    );
  }
}

export default AddComment;
