import axios from 'axios';

const req = axios.create({
  baseURL: 'https://pk-nc-news.herokuapp.com/api'
});

export const fetchArticles = async (topic, username, sortBy, page, limit) => {
  const { data } = await req.get('/articles', {
    params: {
      topic: topic ? topic : null,
      author: username ? username : null,
      sort_by: sortBy,
      order: 'desc',
      p: page,
      limit
    }
  });
  console.log(data);
  return data;
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

export const fetchCommentsByArticleId = async (articleId, sortBy) => {
  const { data } = await req.get(`/articles/${articleId}/comments`, {
    params: {
      sort_by: sortBy
    }
  });
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

export const removeComment = async (commentId) => {
  await req.delete(`/comments/${commentId}`);
};
