import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Google from './Google';

describe('<Google />', () => {
  test('it should mount', () => {
    render(<Google />);
    
    const google = screen.getByTestId('Google');

    expect(google).toBeInTheDocument();
  });
});