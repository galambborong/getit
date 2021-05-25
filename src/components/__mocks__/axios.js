export default {
  create: jest.fn().mockResolvedValue({
    url: ''
  }),
  get: jest.fn().mockResolvedValue({
    data: {}
  })
};
