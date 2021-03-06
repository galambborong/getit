import React from 'react';
import Nav from '../Nav';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Nav component renders', () => {
  const { getByTestId } = render(<Nav />);
  const navElement = getByTestId('nav');
  expect(navElement).toBeTruthy();
});

test('Nav component renders with correct links', () => {
  const { getByTestId } = render(<Nav />);
  const navElement = getByTestId('nav');
  const navTopic = getByTestId('nav__topic');
  const navArticles = getByTestId('nav__articles');
  const navUsers = getByTestId('nav__users');
  expect(navElement).toContainElement(navTopic);
  expect(navElement).toContainElement(navArticles);
  expect(navElement).toContainElement(navUsers);
});

test('Links point to correct urls', () => {
  const { getByTestId } = render(<Nav />);
  const navTopic = getByTestId('nav__topic');
  const navArticles = getByTestId('nav__articles');
  const navUsers = getByTestId('nav__users');
  expect(navTopic).toHaveAttribute('href', '/topics');
  expect(navArticles).toHaveAttribute('href', '/articles');
  expect(navUsers).toHaveAttribute('href', '/users');
});
