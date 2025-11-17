import { useState, useEffect } from 'react'
import { fetchCountries } from '../services/api'
import CountryCard from './CountryCard'
import Buscador from './Buscador'

export default function CountriesList() {
    const [countries, setCountries] = useState([])
    const [filtered, setFiltered] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchCountries()
            .then(data => {
                setCountries(data)
                setFiltered(data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    const handleSearch = (query) => {
        const lower = query.toLowerCase()
        const result = countries.filter(c =>
            c.name.toLowerCase().includes(lower) ||
            (c.capital && c.capital.toLowerCase().includes(lower)) ||
            (c.languages && Object.values(c.languages).some(lang => lang.toLowerCase().includes(lower)))
        )
        setFiltered(result)
    }

    const handleSort = (criteria) => {
        const sorted = [...filtered].sort((a, b) => {
            if (criteria === 'name') return a.name.localeCompare(b.name)
            if (criteria === 'population') return b.population - a.population
            if (criteria === 'capital') return (a.capital || '').localeCompare(b.capital || '')
            return 0
        })
        setFiltered(sorted)
    }

    if (loading) return <div className="text-center p-5"><div className="spinner-border"></div></div>

    return (
        <div className="container py-4">
            <h2 className="mb-4">Explora 250+ Países</h2>
            <Buscador onSearch={handleSearch} onSort={handleSort} />
            <div className="row">
                {filtered.map(country => (
                    <div key={country.id} className="col-md-4 mb-4">
                        <CountryCard country={country} />
                    </div>
                ))}
            </div>
        </div>
    )
}