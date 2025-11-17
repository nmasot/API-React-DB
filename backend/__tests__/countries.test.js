const request = require('supertest');
const app = require('../server');  // Path relativo correcto desde __tests__

describe('Countries API', () => {
    test('should return all countries from DB', async () => {
        const res = await request(app).get('/api/countries');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);  // Corrige toBeInstanceOf a Array.isArray
        expect(res.body.length).toBeGreaterThan(0);
    });
});