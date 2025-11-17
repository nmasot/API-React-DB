export default function CountryCard({ country }) {
    return (
        <div className="card h-100 shadow-sm">
            <img src={country.flag_url} className="card-img-top" alt={`Bandera de ${country.name}`} style={{ height: '150px', objectFit: 'cover' }} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{country.name}</h5>
                <p className="card-text">
                    <strong>Capital:</strong> {country.capital || 'N/A'}<br />
                    <strong>Población:</strong> {country.population.toLocaleString()}<br />
                    <strong>Región:</strong> {country.region}
                </p>
                <a href={`https://es.wikipedia.org/wiki/${country.name}`} target="_blank" className="btn btn-outline-primary mt-auto">
                    Más info
                </a>
            </div>
        </div>
    )
}