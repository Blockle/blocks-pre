module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file.ts',
    '\\.(css|less)$': '<rootDir>/__mocks__/file.ts',
  },
  modulePaths: ['src'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
