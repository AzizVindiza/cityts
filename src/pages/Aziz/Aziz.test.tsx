import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Aziz from './Aziz';

describe('<Aziz />', () => {
  test('it should mount', () => {
    render(<Aziz />);
    
    const aziz = screen.getByTestId('Aziz');

    expect(aziz).toBeInTheDocument();
  });
});