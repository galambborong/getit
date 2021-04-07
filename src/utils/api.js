import axios from 'axios';

const req = axios.create({
  baseURL: 'https://pk-nc-news.herokuapp.com/api'
});

export const fetchAllArticles = async (topic) => {
  const { data } = await req.get('/articles', {
    params: {
      topic
    }
  });
  return data.articles;
};

export const fetchTopicsList = async () => {
  const { data } = await req.get('/topics');
  return data.topics;
};
