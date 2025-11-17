import { render, fireEvent } from '@testing-library/react';
import Buscador from '../components/Buscador';

test('handles search input and triggers onSearch', () => {
    const onSearch = jest.fn();
    const { getByPlaceholderText } = render(<Buscador onSearch={onSearch} onSort={() => { }} />);
    const input = getByPlaceholderText('Buscar por nombre, capital o idioma...');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.keyUp(input, { key: 'Enter' });
    expect(onSearch).toHaveBeenCalledWith('test'); // Testea filtrado por usuario
});