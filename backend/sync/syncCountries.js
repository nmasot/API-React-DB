const fetch = require('node-fetch');
const pool = require('../db');

const sync = async () => {
    try {
        console.log('Descargando datos de REST Countries...');

        // URL con fields ESPECÍFICOS (obligatorio ahora)
        const res = await fetch('https://restcountries.com/v3.1/all?fields=cca3,name,capital,population,region,subregion,flags,latlng,languages', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
            }
        });

        if (!res.ok) {
            const text = await res.text();
            throw new Error(`HTTP ${res.status} - ${text.substring(0, 200)}`);
        }

        const countries = await res.json();
        console.log(`Sincronizando ${countries.length} países...`);

        for (const c of countries) {
            await pool.query(
                `INSERT INTO countries (id, name, official_name, capital, population, region, subregion, flag_url, lat, lng)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
                ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, population = EXCLUDED.population;`,
                [
                    c.cca3,
                    c.name.common,
                    c.name.official,
                    c.capital ? c.capital[0] : null,
                    c.population,
                    c.region,
                    c.subregion ? c.subregion : null,
                    c.flags.svg,
                    c.latlng ? c.latlng[0] : null,
                    c.latlng ? c.latlng[1] : null
                ]
            );
        }
        console.log('ÉXITO: 250+ países sincronizados en PostgreSQL');
    } catch (err) {
        console.error('Error detallado:', err.message);
    }
};

// sync();
module.exports = sync;