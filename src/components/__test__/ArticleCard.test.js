import React from 'react';
import ArticleCard from '../ArticleCard';
import { fireEvent, render, waitForDomChange } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const sampleArticle = {
  title: 'testing! 1, 2, 3',
  author: 'galambborong',
  body: 'This is a test article. Interesting, huh!?',
  created_at: new Date().toDateString(),
  comment_count: 2,
  article_id: 99,
  votes: 1
};

test('Component renders', () => {
  const { getByTestId } = render(<ArticleCard article={sampleArticle} />);
  const articleCardElement = getByTestId('article-card');
  expect(articleCardElement).toBeTruthy();
});

test('Header renders expected text', () => {
  const { getByRole } = render(<ArticleCard article={sampleArticle} />);
  const articleCardHeader = getByRole('heading');
  expect(articleCardHeader).toHaveTextContent('testing! 1, 2, 3');
});

test('Author renders expected text', () => {
  const { getByTestId } = render(<ArticleCard article={sampleArticle} />);
  const articleCardAuthor = getByTestId('article-card__author');
  expect(articleCardAuthor).toHaveTextContent('@galambborong');
});

test('Date is correct', () => {
  const { getByTestId } = render(<ArticleCard article={sampleArticle} />);
  const articleCardDate = getByTestId('article-card__date');
  expect(articleCardDate).toHaveTextContent(new Date().toDateString());
});

test('Vote renders number one', () => {
  const { getByTestId } = render(<ArticleCard article={sampleArticle} />);
  const articleVotes = getByTestId('article-card__votes');
  expect(articleVotes.textContent.trim()).toBe('1');
});

test('Comment count renders two', () => {
  const { getByTestId } = render(<ArticleCard article={sampleArticle} />);
  const articleCommentCount = getByTestId('article-card__comment-count');
  expect(articleCommentCount.textContent.substr(-1)).toBe('2');
});

test('Blurb is only single sentence', () => {
  const { getByTestId } = render(<ArticleCard article={sampleArticle} />);
  const articleBlurb = getByTestId('article-card__blurb');
  const fullStop = /\./;
  const finalChar = articleBlurb.textContent.substr(-1);
  expect(articleBlurb).toHaveTextContent('This is a test article…');
  expect(fullStop.test(articleBlurb.textContent)).toBe(false);
  expect(finalChar).toBe(String.fromCharCode(8230));
});

test('Button navigates to article 99', () => {
  const { getByText } = render(<ArticleCard article={sampleArticle} />);
  const articleBtn = getByText(/Read the full article here/i);
  expect(articleBtn).toHaveAttribute('href', '/articles/99');
});
