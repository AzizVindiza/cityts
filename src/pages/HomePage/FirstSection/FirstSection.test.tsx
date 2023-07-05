import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FirstSection from './FirstSection';

describe('<FirstSection />', () => {
  test('it should mount', () => {
    render(<FirstSection />);
    
    const firstSection = screen.getByTestId('FirstSection');

    expect(firstSection).toBeInTheDocument();
  });
});