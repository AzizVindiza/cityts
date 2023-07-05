import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Azi from './Azi';

describe('<Azi />', () => {
  test('it should mount', () => {
    render(<Azi />);
    
    const azi = screen.getByTestId('Azi');

    expect(azi).toBeInTheDocument();
  });
});