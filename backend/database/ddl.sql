-- backend/database/ddl.sql
-- Creación de la tabla countries para el proyecto ExploraMundo
-- Base de datos: exploramundo

DROP TABLE IF EXISTS countries CASCADE;

CREATE TABLE countries (
    id VARCHAR(3) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    official_name TEXT,
    capital VARCHAR(100),
    population INTEGER,
    region VARCHAR(50),
    subregion VARCHAR(50),
    flag_url TEXT,
    lat NUMERIC,
    lng NUMERIC,
    created_at TIMESTAMP DEFAULT NOW()
);