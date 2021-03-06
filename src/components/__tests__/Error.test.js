import React from 'react';
import Error from '../Error';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Error component renders', async () => {
  const { findAllByTestId } = render(<Error />);
  const errorElement = await findAllByTestId('error');
  expect(errorElement).toBeTruthy();
});

test('Render 404 when passed no props', () => {
  const { getByTestId } = render(<Error />);
  const errorElement = getByTestId('error__msg');
  expect(errorElement).toHaveTextContent('404 – Not Found');
});

test('Render specific error message when provided', () => {
  const { getByTestId } = render(
    <Error
      error={{
        response: { status: 400, statusText: 'Bad request test message' }
      }}
    />
  );
  const errorElement = getByTestId('error__msg');
  expect(errorElement).toHaveTextContent('400 – Bad request test message');
});
