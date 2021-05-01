import React from 'react';
import Header from '../Header';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Header component renders', () => {
  const { getByTestId } = render(<Header />);
  const headerElement = getByTestId('header');
  expect(headerElement).toBeTruthy();
});

test('Render Header component with correct text', () => {
  const { getByTestId } = render(<Header />);
  const headerElement = getByTestId('header');
  expect(headerElement.textContent).toBe('get:it');
});
