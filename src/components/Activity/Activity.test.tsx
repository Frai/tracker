import { render, screen } from '@testing-library/react';
import { Activity } from './Activity';

test('renders the component correctly without any information', () => {
    render(<Activity />);
    const startTime = screen.getByRole('article');
    expect(startTime).toBeInTheDocument();    
});
