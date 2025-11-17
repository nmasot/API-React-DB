import { render, screen } from '@testing-library/react';
import CountryCard from '../components/CountryCard';

test('renders country data correctly', () => {
    const country = { name: 'Argentina', capital: 'Buenos Aires', population: 45000000, region: 'Americas', flag_url: 'flag.svg' };
    render(<CountryCard country={country} />);
    expect(screen.getByText('Argentina')).toBeInTheDocument(); // Testea renderizado de datos
    expect(screen.getByText('Capital: Buenos Aires')).toBeInTheDocument();
});