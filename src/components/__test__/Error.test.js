import React from 'react';
import Error from '../Error';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Error component renders', async () => {
  const { findAllByTestId } = render(<Error />);
  const errorElement = await findAllByTestId('error');
  expect(errorElement).toBeTruthy();
});

test('Renders 404 when passed no props', () => {
  const { getByTestId } = render(<Error />);
  const errorElement = getByTestId('error__msg');
  expect(errorElement.innerHTML).toMatch('404 – Not Found');
});

test('Render specific error message when provided', () => {
  const { getByTestId } = render(
    <Error error={{ response: { status: 400, statusText: 'Bad request' } }} />
  );
  const errorElement = getByTestId('error__msg');
  expect(errorElement.innerHTML).toMatch('400 – Bad request');
});
