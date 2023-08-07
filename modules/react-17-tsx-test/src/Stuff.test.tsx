import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Stuff } from './Stuff';

it('is a test', () => {
  expect(1).toBe(1);
});

it('renders successfully', () => {
  render(<Stuff />);

  const heading = screen.getByText('Test table');
  expect(heading).toBeInTheDocument();
});
