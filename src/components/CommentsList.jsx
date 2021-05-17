import React, { useEffect, useState } from 'react';
import { fetchCommentsByArticleId, removeComment } from '../utils/api';
import Loading from './Loading';
import Comment from './Comment';
import SortList from './SortList';
import AddComment from './AddComment';
import Error from './Error';

export const CommentsList = ({ article_id, uri }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const [sort_by, setSortBy] = useState('votes');
  const [newComment, setNewComment] = useState(null);
  const [commentRemoved, setCommentRemoved] = useState(null);
  const [username, setUsername] = useState('tickle122');

  const sortListOrder = (event) => {
    setSortBy(event);
  };

  const confirmComment = () => {
    setNewComment(true);
  };

  const confirmDelete = (commentId) => {
    removeComment(commentId).then(() => {
      setCommentRemoved(true);
    });
  };

  useEffect(() => {
    fetchCommentsByArticleId(article_id, sort_by)
      .then((comments) => {
        setComments(comments);
        setLoading(false);
        setError(false);
        setNewComment(null);
        setCommentRemoved(null);
      })
      .catch((err) => {
        console.dir(err);
        setError(err);
        setLoading(false);
        setNewComment(false);
        setCommentRemoved(false);
      });
  }, [article_id, sort_by, newComment, commentRemoved]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <main className="comments">
        <h2 className="comments__title">Comments</h2>
        <SortList sortListOrder={sortListOrder} uri={uri} />
        <section className="comments-container">
          {comments.map((comment) => {
            return (
              <Comment
                comment={comment}
                key={comment.comment_id}
                confirmDelete={confirmDelete}
                user={username}
              />
            );
          })}
        </section>
      </main>
      <AddComment article_id={article_id} confirmComment={confirmComment} />
    </div>
  );
};

export default CommentsList;
