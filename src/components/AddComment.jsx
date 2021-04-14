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
    if (body.length > 0) {
      postComment(article_id, username, body)
          .then(() => {
            confirmComment();
            this.setState({ success: true });
            navigate(`/articles/${article_id}/comments`);
          })
          .catch((err) => {
            console.dir(err);
            this.setState({ error: true, body: "" });
          });
    }
  };

  render() {
    const { success, error } = this.state;

    if (success) {
      return (
        <section className="add-comment">
          <h3 className="add-comment__header">Success!</h3>
          <p className="add-comment__msg">Your comment has been added</p>
        </section>
      );
    }
    if (error) {
      return (
        <section className="add-comment">
          <h3 className="add-comment__header">Comment not posted</h3>
          <p className="add-comment__msg">There was an error posting your comment</p>
        </section>
      );
    }

    return (
      <section className="add-comment">
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
            name="body"
            id="body"
            className="comment-form__input"
            value={this.state.body}
            onChange={this.handleChange}
            />
          <button className="comment-form__btn" type="submit">
            Submit your comment
          </button>
        </form>
      </section>
    );
  }
}

export default AddComment;
