module.exports = {
  clearMocks: true,
  testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>src/components$1',
    '^@pages(.*)$': '<rootDir>src/pages$1',
    '^@utils(.*)$': '<rootDir>src/utils$1',
    '^@helpers(.*)$': '<rootDir>src/helpers$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@store(.*)$': '<rootDir>src/store$1',
    '^@services(.*)$': '<rootDir>src/services$1',
    '^@assets(.*)$': '<rootDir>src/assets$1',
  },
}
