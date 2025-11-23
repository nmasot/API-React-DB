// Mocks globales si expandes tests con pg
jest.mock('../db', () => ({
    query: jest.fn().mockResolvedValue({ rows: [] }),
}));