import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Aibek from './Aibek';

describe('<Aibek />', () => {
  test('it should mount', () => {
    render(<Aibek />);
    
    const aibek = screen.getByTestId('Aibek');

    expect(aibek).toBeInTheDocument();
  });
});