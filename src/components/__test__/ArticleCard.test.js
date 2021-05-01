import React from 'react';
import ArticleCard from '../ArticleCard';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const sampleArticle = {
  title: 'testing! 1, 2, 3',
  author: 'galambborong',
  body: 'This is a test article. Interesting, huh!?',
  created_at: new Date().toDateString(),
  comment_count: 0,
  article_id: 99,
  votes: 0
};

test('ArticleCard component renders', () => {
  const { getByTestId } = render(<ArticleCard article={sampleArticle} />);
  const articleCardElement = getByTestId('article-card');
  expect(articleCardElement).toBeTruthy();
});

test('ArticleCard header renders expected text', () => {
  const { getByRole } = render(<ArticleCard article={sampleArticle} />);
  const articleCardHeader = getByRole('heading');
  expect(articleCardHeader).toHaveTextContent('testing! 1, 2, 3');
});

test('ArticleCard author renders expected text', () => {
  const { getByTestId } = render(<ArticleCard article={sampleArticle} />);
  const articleCardAuthor = getByTestId('article-card__author');
  expect(articleCardAuthor).toHaveTextContent('@galambborong');
});

test('ArticleCard date is correct', () => {
  const { getByTestId } = render(<ArticleCard article={sampleArticle} />);
  const articleCardDate = getByTestId('article-card__date');
  expect(articleCardDate).toHaveTextContent(new Date().toDateString());
});
