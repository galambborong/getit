import React from 'react';
import { render } from '@testing-library/react';
import ArticlesList from '../ArticlesList';
import '@testing-library/jest-dom/extend-expect';

test('Component renders', () => {
  const { getByTestId } = render(<ArticlesList />);
  const articlesListElement = getByTestId('articles');
  expect(articlesListElement).toBeTruthy();
});
