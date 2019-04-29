const path = require('path');

module.exports = {
  plugins: [
    require('postcss-import')({
      path: path.resolve(__dirname, './src/'),
    }),
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
    require('postcss-reporter')({ clearMessages: true }),
  ],
};
