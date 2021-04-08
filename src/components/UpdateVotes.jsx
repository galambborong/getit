import React from 'react';
import { patchVote } from '../utils/api';

class UpdateVotes extends React.Component {
  state = {
    votesChange: 0,
    hasVoted: false
  };

  handleClick = (articleId, increment, commentId) => {
    if (!this.state.hasVoted) {
      this.setState((currentState) => {
        return {
          votesChange: currentState.votesChange + increment,
          hasVoted: true
        };
      });
      patchVote(articleId, increment, commentId).catch((err) => {
        console.dir(err);
        this.setState((currState) => {
          return {
            votesChange: currState.votesChange - increment,
            hasVoted: false
          };
        });
      });
    }
  };

  render() {
    const { article_id, votes, comment_id } = this.props;
    const { votesChange, hasVoted } = this.state;

    return (
      <div className="vote">
        <button
          disabled={hasVoted}
          onClick={() => this.handleClick(article_id, 1, comment_id)}
        >
          +
        </button>
        {votes + votesChange}
        <button
          disabled={hasVoted}
          onClick={() => this.handleClick(article_id, -1, comment_id)}
        >
          -
        </button>
      </div>
    );
  }
}

export default UpdateVotes;
