const pool = require('../db');

const createTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS countries (
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
  `;
    await pool.query(query);
    console.log('Tabla "countries" creada o ya existe');
};

createTable().catch(err => console.error(err));