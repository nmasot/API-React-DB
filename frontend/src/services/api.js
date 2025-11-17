export const fetchCountries = async () => {
    const response = await fetch('http://localhost:5000/api/countries')
    if (!response.ok) throw new Error('Error al cargar desde PostgreSQL')
    return response.json()
}