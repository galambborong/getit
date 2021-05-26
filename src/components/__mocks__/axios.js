export default {
  create: jest.fn().mockResolvedValue({
    url: ''
  }),
  req: '',
  get: jest.fn().mockResolvedValue({
    data: {}
  }),
  'req.get': jest.fn().mockResolvedValue({
    data: {}
  }),
  fetchArticles: jest.fn().mockResolvedValue({
    data: {}
  })
};
