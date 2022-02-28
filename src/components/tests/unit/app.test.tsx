import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../app';

test('renders panda rescue', () => {
    render(<App />);
    const textElement = screen.getByText(/Panda Rescue/i);
    expect(textElement).toBeInTheDocument();
});