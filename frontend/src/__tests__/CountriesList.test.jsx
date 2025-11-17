import { render, screen, waitFor } from '@testing-library/react';
import CountriesList from '../components/CountriesList';
import { fetchCountries } from '../services/api';

jest.mock('../services/api');

test('renders loading spinner initially', () => {
    render(<CountriesList />);
    expect(screen.getByRole('status')).toBeInTheDocument(); // Testea loading
});

test('fetches and renders countries from DB', async () => {
    fetchCountries.mockResolvedValue([{ id: 'ARG', name: 'Argentina', capital: 'Buenos Aires', population: 45000000, region: 'Americas', flag_url: 'flag.svg' }]);
    render(<CountriesList />);
    await waitFor(() => expect(screen.getByText('Argentina')).toBeInTheDocument()); // Testea renderizado de datos de BD
});