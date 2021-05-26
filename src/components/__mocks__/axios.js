export default {
  create: jest.fn().mockResolvedValue({
    url: ''
  }),
  req: jest.fn().mockResolvedValue({
    data: {},
    get: { data: {} }
  }),
  get: jest.fn().mockResolvedValue({
    data: {}
  })
};
