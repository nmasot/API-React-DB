module.exports = {
    testEnvironment: 'jsdom',
    transform: { '^.+\\.[tj]sx?$': 'babel-jest' },
    testMatch: ['**/__tests__/**/*.(js|jsx|ts|tsx)', '**/?(*.)+(spec|test).(js|jsx|ts|tsx)'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js']
};