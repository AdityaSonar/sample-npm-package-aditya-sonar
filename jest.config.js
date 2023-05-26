module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx}',
    '!**/src/lib/**',
    '!**/src/stories/**'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(svg|scss|css|jpg|png|gif)$': '<rootDir>/src/setupTests.js',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};