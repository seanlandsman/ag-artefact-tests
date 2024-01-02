import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should show title', () => {
    render(<App />);
    expect(screen.getByText('Hello Vite + React!')).toBeInTheDocument();
  });
});
