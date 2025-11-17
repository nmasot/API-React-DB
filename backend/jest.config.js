module.exports = {
    testEnvironment: 'node',  // Fija a Node.js (evita jsdom y TextEncoder error)
    testMatch: ['**/__tests__/**/*.js'],  // Busca tests en __tests__
    setupFilesAfterEnv: ['<rootDir>/__tests__/setup.js'],  // Opcional para mocks globales
};