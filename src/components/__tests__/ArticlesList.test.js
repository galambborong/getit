import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import ArticlesList from '../ArticlesList';

afterEach(cleanup);

const data = {
  articles: [
    {
      article_id: 999,
      title: 'The most amazing article title',
      body: 'Blah blah blah!',
      votes: 0,
      topic: 'coding',
      author: 'galambborong',
      created_at: Date.now(),
      comment_count: 0
    },
    {
      article_id: 888,
      title: 'Wowzers this is fascinating stuff',
      body: 'I will test this article like a bosssss',
      votes: 100,
      topic: 'coding',
      author: 'entrelacs',
      created_at: '2020-06-30T06:59:39.654Z',
      comment_count: 1
    },
    {
      article_id: 777,
      title: 'JavaScript for galambborongs',
      body: 'Another test thingy',
      votes: 1,
      topic: 'coding',
      author: 'desordre',
      created_at: '2032-10-29T02:24:09.225Z',
      comment_count: 21
    }
  ],
  total_count: 3
};

test('ArticlesList component displays loading component while awaiting articles', async () => {
  axiosMock.create.mockResolvedValueOnce('');
  axiosMock.get.mockResolvedValueOnce({ data });

  const { getByTestId } = render(<ArticlesList path={'/'} />);

  expect(getByTestId('loading')).toHaveTextContent('get:it-ing');

  const resolvedArticlesList = await waitFor(() =>
    getByTestId('articles-landing')
  );

  expect(resolvedArticlesList).toBeTruthy();
});

test('ArticlesList component displays articles on /articles', async () => {
  axiosMock.get.mockResolvedValueOnce({ data });

  const { getByTestId } = render(<ArticlesList path={'/articles'} />);

  expect(getByTestId('loading')).toHaveTextContent('get:it-ing');

  const resolvedArticlesList = await waitFor(() =>
    getByTestId('articles-main')
  );

  const resolvedHeader = await waitFor(() =>
    getByTestId('articles-main-header')
  );

  expect(resolvedArticlesList).toBeTruthy();

  expect(resolvedHeader).toHaveTextContent(/All articles/);
});

// test content (using data-testid AND header text content) for each possible endpoint:

// DONE
//   /
//   /articles

// TODO
//   /:topic/articles
//   /users/:user/articles
