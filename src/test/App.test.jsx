import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('check data', () => {
  render(<App />);
  expect(screen.getByRole("heading")).toHaveTextContent("Upload Json file");
  expect(screen.getByRole("button", { name: "Print" })).toBeEnabled();
  expect(screen.getByRole("table")).toBeInTheDocument();
});