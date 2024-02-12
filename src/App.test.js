import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  expect(() => screen.getByText(/netWorth/i)).toBeDefined();
  expect(() => screen.getByText(/worth/i)).toBeDefined();
  expect(() => screen.getByText(/search/i)).toBeDefined();
  expect(() => screen.getByText(/inputRef/i)).toBeDefined();
});



