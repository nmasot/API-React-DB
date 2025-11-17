import { useState } from 'react'

export default function Buscador({ onSearch, onSort }) {
    const [query, setQuery] = useState('')
    const [sortBy, setSortBy] = useState('name')

    const handleSearch = () => onSearch(query)
    const handleSort = () => onSort(sortBy)

    return (
        <div className="row g-3 mb-4">
            <div className="col-md-8">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar por nombre, capital o idioma..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={(e) => e.key === 'Enter' && handleSearch()}
                />
            </div>
            <div className="col-md-2">
                <select className="form-select" onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
                    <option value="name">Nombre</option>
                    <option value="population">Población</option>
                    <option value="capital">Capital</option>
                </select>
            </div>
            <div className="col-md-2">
                <button className="btn btn-primary w-100" onClick={handleSort}>
                    Ordenar
                </button>
            </div>
        </div>
    )
}