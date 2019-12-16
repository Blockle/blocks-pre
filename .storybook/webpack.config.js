const path = require('path');
const webpack = require('webpack');

const SOURCE_PATH = path.resolve(__dirname, '../src');

module.exports = {
  context: SOURCE_PATH,

  resolve: {
    modules: ['node_modules', SOURCE_PATH],
    extensions: ['.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, '../src/'),
        use: [
          require.resolve('awesome-typescript-loader'),
          require.resolve('react-docgen-typescript-loader'),
        ],
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?sourceMap', 'postcss-loader'],
      },

      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader',
      },

      // Static `svg` image loader
      {
        test: /images(\\|\/).*?\.svg$/,
        loader: 'url-loader',
        options: {
          // inline base64 URLs for <=xk images
          limit: 2000,
        },
      },
      // Transform svg files (in /icons/ folder) to react components.
      {
        test: /icons(\\|\/).*?\.svg$/,
        loader: 'react-svg-loader',
      },
      // Static image loader
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          // inline base64 URLs for <=xk images
          limit: 2000,
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('dev'),
      },
      __DEV__: JSON.stringify(true),
      __PRODUCTION__: JSON.stringify(false),
      __TEST__: JSON.stringify(false),
    }),
  ],
};

// const path = require('path');
// const NODE_MODULES = path.resolve(__dirname, '../node_modules');
// const SOURCE_PATH = path.resolve(__dirname, '../src');

// module.exports = ({
//   config
// }) => {
//   config.context = SOURCE_PATH;

//   config.resolve = {
//     modules: ['node_modules', SOURCE_PATH],
//     extensions: ['.ts', '.tsx'],
//   };

//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     use: [{
//         loader: require.resolve('awesome-typescript-loader'),
//       },
//       // Optional
//       {
//         loader: require.resolve('react-docgen-typescript-loader'),
//       },
//     ],
//   });
//   config.resolve.extensions.push('.ts', '.tsx');
//   return config;
// };
