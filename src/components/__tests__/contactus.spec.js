import { render, screen } from '@testing-library/react';
import ContactUs from '../ContactUs';
import '@testing-library/jest-dom'

test('Contact Us component is loaded properly', () => { 
    render(<ContactUs/>);

    const element = screen.getByPlaceholderText('name');

    expect(element).toBeInTheDocument();
 })