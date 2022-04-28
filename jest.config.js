module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
  moduleDirectories: ['node_modules', './src/utils', __dirname],
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/tests_config/setup.js'],
  modulePathIgnorePatterns: ['<rootDir>/tests_config/setup.js'],
}
