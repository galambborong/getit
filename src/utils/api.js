import axios from 'axios';

const req = axios.create({
  baseURL: 'https://pk-nc-news.herokuapp.com/api'
});

export const fetchArticles = async (topic, username) => {
  const { data } = await req.get('/articles', {
    params: {
      topic: topic ? topic : null,
      author: username ? username : null,
      sort_by: 'votes',
      order: 'desc'
    }
  });
  return data.articles;
};

export const fetchTopicsList = async () => {
  const { data } = await req.get('/topics');
  return data.topics;
};

export const fetchUsersList = async () => {
  const { data } = await req.get('/users');
  return data.users;
};

export const fetchArticleById = async (articleId) => {
  const { data } = await req.get(`/articles/${articleId}`);
  return data.article;
};

export const fetchCommentsByArticleId = async (articleId) => {
  const { data } = await req.get(`/articles/${articleId}/comments`);
  return data.comments;
};

export const patchVote = async (articleId, voteInc, commentId) => {
  if (articleId) {
    const { data } = await req.patch(`/articles/${articleId}`, {
      inc_votes: voteInc
    });
    return data.article;
  }
  if (commentId) {
    const { data } = await req.patch(`/comments/${commentId}`, {
      inc_votes: voteInc
    });
    return data.comment;
  }
};

export const postComment = async (articleId, username, body) => {
  const { data } = await req.post(`/articles/${articleId}/comments`, {
    username,
    body
  });
  return data.comment;
};
