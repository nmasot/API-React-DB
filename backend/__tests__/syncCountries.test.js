const fetch = require('node-fetch');
const pool = require('../db');
const sync = require('../sync/syncCountries');  // Exporta sync como module.exports = sync; en syncCountries.js

jest.mock('node-fetch');
jest.mock('../db');

test('syncs countries to DB', async () => {
    fetch.mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue([{ cca3: 'ARG', name: { common: 'Argentina', official: 'República Argentina' }, capital: ['Buenos Aires'], population: 45000000, region: 'Americas', subregion: 'South America', flags: { svg: 'flag.svg' }, latlng: [-34, -64] }]),
    });
    pool.query = jest.fn().mockResolvedValue();
    await sync();
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('restcountries.com'), expect.any(Object));
    expect(pool.query).toHaveBeenCalledTimes(1);  // Ajusta según países mockeados
});
module.exports = { sync };