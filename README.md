# ExploraMundo --

## Requisitos
- PostgreSQL instalado y corriendo.
- Crear la BD: CREATE DATABASE exploramundo;

## Ejecutar Backend
cd backend
npm install
node sync/createTable.js
node sync/syncCountries.js  # Una sola vez
node server.js  # API en localhost:5000

## Ejecutar Frontend
cd frontend
npm install
npm run dev  # App en localhost:5173

## Exposición
- Mostrar Postgres con datos.
- Filtrado y ordenamiento en /paises.
- 6 funcionalidades: Inicio, Nosotros (con testimonios), Blog, Contacto, Cookies, Footer con legales.
