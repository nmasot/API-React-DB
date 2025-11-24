-- backend/database/dml.sql
-- Inserción de datos reales en la tabla countries
-- Base de datos: exploramundo

-- Borra datos previos (opcional, para pruebas limpias)
-- TRUNCATE TABLE countries RESTART IDENTITY;

INSERT INTO
    countries (
        id,
        name,
        official_name,
        capital,
        population,
        region,
        subregion,
        flag_url,
        lat,
        lng
    )
VALUES (
        'ARG',
        'Argentina',
        'República Argentina',
        'Buenos Aires',
        45376763,
        'Americas',
        'South America',
        'https://flagcdn.com/ar.svg',
        -38.4161,
        -63.6167
    ),
    (
        'BRA',
        'Brazil',
        'Federative Republic of Brazil',
        'Brasília',
        215313498,
        'Americas',
        'South America',
        'https://flagcdn.com/br.svg',
        -14.2350,
        -51.9253
    ),
    (
        'CHL',
        'Chile',
        'Republic of Chile',
        'Santiago',
        19116209,
        'Americas',
        'South America',
        'https://flagcdn.com/cl.svg',
        -35.6751,
        -71.5430
    ),
    (
        'PER',
        'Peru',
        'Republic of Peru',
        'Lima',
        34049588,
        'Americas',
        'South America',
        'https://flagcdn.com/pe.svg',
        -9.1900,
        -75.0152
    ),
    (
        'URY',
        'Uruguay',
        'Oriental Republic of Uruguay',
        'Montevideo',
        3426260,
        'Americas',
        'South America',
        'https://flagcdn.com/uy.svg',
        -32.5228,
        -55.7658
    ),
    (
        'USA',
        'United States',
        'United States of America',
        'Washington, D.C.',
        331449281,
        'Americas',
        'North America',
        'https://flagcdn.com/us.svg',
        37.0902,
        -95.7129
    ),
    (
        'ESP',
        'Spain',
        'Kingdom of Spain',
        'Madrid',
        47351567,
        'Europe',
        'Southern Europe',
        'https://flagcdn.com/es.svg',
        40.4637,
        -3.7492
    ),
    (
        'JPN',
        'Japan',
        'Japan',
        'Tokyo',
        125836021,
        'Asia',
        'Eastern Asia',
        'https://flagcdn.com/jp.svg',
        36.2048,
        138.2529
    ),
    (
        'DEU',
        'Germany',
        'Federal Republic of Germany',
        'Berlin',
        83240525,
        'Europe',
        'Western Europe',
        'https://flagcdn.com/de.svg',
        51.1657,
        10.4515
    ),
    (
        'ZAF',
        'South Africa',
        'Republic of South Africa',
        'Pretoria',
        59308690,
        'Africa',
        'Southern Africa',
        'https://flagcdn.com/za.svg',
        -30.5595,
        22.9375
    )
ON CONFLICT (id) DO
UPDATE
SET
    name = EXCLUDED.name,
    official_name = EXCLUDED.official_name,
    capital = EXCLUDED.capital,
    population = EXCLUDED.population,
    region = EXCLUDED.region,
    subregion = EXCLUDED.subregion,
    flag_url = EXCLUDED.flag_url,
    lat = EXCLUDED.lat,
    lng = EXCLUDED.lng;

-- Verificación rápida
SELECT COUNT(*) AS total_paises FROM countries;