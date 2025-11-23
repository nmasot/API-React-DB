jest.mock('../db', () => ({
    query: jest.fn().mockResolvedValue({ rows: [{ cca3: 'ARG', name: 'Argentina' }] }),
    end: jest.fn().mockResolvedValue(), // <-- agrega esto
}));

const request = require('supertest');
const app = require('../server');  // Path relativo correcto desde __tests__

let server;

beforeAll(() => {
    server = app.listen(0); // Puerto aleatorio para test
});

afterAll((done) => {
    server.close(done);
});

describe('Countries API', () => {
    test('should return all countries from DB', async () => {
        const res = await request(server).get('/api/countries');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);  // Corrige toBeInstanceOf a Array.isArray
        expect(res.body.length).toBeGreaterThan(0);
    });
});