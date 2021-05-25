import React from 'react';
import ReactDOM from 'react-dom';
import ArticlesList from '../ArticlesList';
import {
  act,
  render,
  fireEvent,
  cleanup,
  rerender,
  waitFor
} from '@testing-library/react';

import { fetchArticles } from '../../utils/api';

jest.mock('../../utils/api', () => {
  fetchArticles: jest.fn();
});

let fetchArticlesPromise;

fetchArticles.mockImplementation(() => {
  fetchArticlesPromise = new MockPromise();
  return fetchArticlesPromise;
});

afterEach(cleanup);

test('Async axios request', async () => {
  axiosMock.get.mockResolvedValue({ data: { msg: 'hello' } });
  const { getByText, getByTestId, rerender } = render(<ArticlesList />);

  expect(getByTestId(/get:it-ing/)).toBeTruthy();

  const resolvedElement = await waitFor(() => {
    getByTestId('articles');
  });

  // expect text content

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
});
