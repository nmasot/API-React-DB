import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CountriesList from '../components/CountriesList';
import * as api from '../services/api';

jest.mock('../services/api', () => ({ fetchCountries: jest.fn() }));

test('fetches and renders countries from DB', async () => {
    api.fetchCountries.mockResolvedValue([{ id: 'ARG', name: 'Argentina', capital: 'Buenos Aires', population: 45000000, region: 'Americas', flag_url: 'flag.svg' }]);
    render(<CountriesList />);
    await waitFor(() => expect(screen.getByText('Argentina')).toBeInTheDocument());
});