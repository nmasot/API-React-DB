jest.mock('../db', () => ({
    query: jest.fn().mockResolvedValue({ rows: [{ cca3: 'ARG', name: 'Argentina' }] }),
}));

const fetch = require('node-fetch');
const pool = require('../db');
const sync = require('../sync/syncCountries');  // Importa sync con module.exports = sync; en ../sync/syncCountries.js

jest.mock('node-fetch');
jest.mock('../db');

afterAll(async () => {
    await pool.end();
});

test('syncs countries to DB', async () => {
    fetch.mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue([{ cca3: 'ARG', name: { common: 'Argentina', official: 'República Argentina' }, capital: ['Buenos Aires'], population: 45000000, region: 'Americas', subregion: 'South America', flags: { svg: 'flag.svg' }, latlng: [-34, -64] }]),
    });
    pool.query.mockResolvedValue();
    await sync();
    expect(fetch).toHaveBeenCalled();
    expect(pool.query).toHaveBeenCalled();
});
