import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import GetSearch from './GetSearch';

test('renders props link', async () => {
  render(<GetSearch />);
  expect(() => screen.getByText(/netWorth/i)).toBeDefined();
  expect(() => screen.getByText(/'$'/i)).toBeDefined();
});



