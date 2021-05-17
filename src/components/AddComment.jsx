import React, { useState } from 'react';
import { postComment } from '../utils/api';
import { navigate } from '@reach/router';

export const AddComment = ({ confirmComment, article_id }) => {
  const [username, setUsername] = useState('tickle122');
  const [body, setBody] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'body') setBody(value);
    if (name === 'username') setUsername(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (body.length > 0) {
      postComment(article_id, username, body)
        .then(() => {
          confirmComment();
          setSuccess(true);
          navigate(`/articles/${article_id}/comments`);
        })
        .catch((err) => {
          console.dir(err);
          setError(true);
          setBody('');
        });
    }
  };

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
        <p className="add-comment__msg">
          There was an error posting your comment
        </p>
      </section>
    );
  }

  return (
    <section className="add-comment">
      <h3 className="add-comment__header">Have something to add?</h3>
      <form onSubmit={handleSubmit} className="comment-form">
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
          value={username}
          onChange={handleChange}
        />
        <label id="lbl-body" className="comment-form__label" htmlFor="body">
          Comment:
        </label>
        <textarea
          name="body"
          id="body"
          className="comment-form__input"
          value={body}
          onChange={handleChange}
        />
        <button className="comment-form__btn" type="submit">
          Submit your comment
        </button>
      </form>
    </section>
  );
};
// }

export default AddComment;
