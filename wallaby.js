const path = require('path');

module.exports = wallaby => {
  process.env.NODE_PATH += path.delimiter + path.join(wallaby.projectCacheDir, 'src');

  return {
    files: [
      '__mocks__/*.ts',
      'src/**/*.snap',
      'src/**/*.ts?(x)',
      'tsconfig.json',
      '!src/**/*.spec.ts?(x)',
      'jest.config.js',
    ],
    tests: ['src/**/*.spec.ts?(x)'],
    env: {
      type: 'node',
      runner: 'node',
    },
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        isolatedModules: true,
        module: 'commonjs',
      }),
    },
    testFramework: 'jest',
    setup: function(wallaby) {
      const config = require('./jest.config');
      Object.keys(config.moduleNameMapper).forEach(
        k =>
          (config.moduleNameMapper[k] = config.moduleNameMapper[k].replace(
            '<rootDir>',
            wallaby.localProjectDir,
          )),
      );
      wallaby.testFramework.configure(config);
    },
  };
};
