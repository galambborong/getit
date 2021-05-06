import React from 'react';
import { render, screen, act } from '@testing-library/react';
import ArticlesList from '../ArticlesList';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        articles: [1, 2, 3],
        total_count: 3
      })
  })
);

test('', async () => {
  await act(async () => render(<ArticlesList path={'/'} />));
  expect(screen.getByTestId('articles')).toBeInTheDocument();
});
