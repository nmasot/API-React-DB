// Filepath: src/__tests__/CountryCard.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountryCard from '../components/CountryCard';

test('renders country data correctly', () => {
    const country = { id: 'ARG', name: 'Argentina', capital: 'Buenos Aires', population: 45000000, region: 'Americas', flag_url: 'flag.svg' };
    render(<CountryCard country={country} />);
    expect(screen.getByText('Argentina')).toBeInTheDocument();
    expect(screen.getByText(/Buenos Aires/)).toBeInTheDocument();
    expect(screen.getByAltText(/Bandera de Argentina|Argentina/i)).toHaveAttribute('src', 'flag.svg');
});



// Verificaciones adicionales opcionales
//     expect(screen.getByText(/Buenos Aires/)).toBeInTheDocument();
//     const img = screen.getByAltText(/Bandera de Argentina|Argentina/i);
//     expect(img).toHaveAttribute('src', 'flag.svg');
// });