import React, { useState } from 'react';
import { patchVote } from '../utils/api';

export const UpdateVotes = ({ article_id, votes, comment_id }) => {
  const [votesChange, setVotesChange] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  const handleClick = (articleId, increment, commentId) => {
    if (!hasVoted) {
      setVotesChange(votesChange + increment);
      setHasVoted(true);
      patchVote(articleId, increment, commentId).catch((err) => {
        console.dir(err);
        setVotesChange(votesChange - increment);
        setHasVoted(false);
      });
    }
  };

  let mainClassName;

  !comment_id
    ? (mainClassName = 'vote')
    : (mainClassName = 'comment-card__vote');

  return (
    <div className={mainClassName}>
      <button
        className="vote__btn"
        disabled={hasVoted}
        onClick={() => handleClick(article_id, 1, comment_id)}
      >
        <i className="fas fa-thumbs-up" />
      </button>
      {votes + votesChange}
      <button
        className="vote__btn"
        disabled={hasVoted}
        onClick={() => handleClick(article_id, -1, comment_id)}
      >
        <i className="fas fa-thumbs-down" />
      </button>
    </div>
  );
};

export default UpdateVotes;
