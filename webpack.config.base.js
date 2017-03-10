import path from 'path';
import webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import LinkMediaHtmlWebpackPlugin from 'link-media-html-webpack-plugin';

const NODE_ENV = process.env.NODE_ENV;
const env = {
  production: NODE_ENV === 'production',
  staging: NODE_ENV === 'staging',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined',
};

const ENTRY_PATH = path.join(__dirname, 'src');
const OUTPUT_PATH = path.join(__dirname, 'dist');
const VENDOR_LIBS = [
  'react', 'react-dom', 'react-redux', 'react-router', 'redux',
  'redux-thunk',
];

export default {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    bundle: path.join(ENTRY_PATH, 'index.js'),
    vendor: VENDOR_LIBS,
  },
  output: {
    path: OUTPUT_PATH,
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          },
          'image-webpack-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // names: ['vendor', 'manifest'],
      name: 'vendor',
      filename: 'vendor.[hash].js',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new LinkMediaHtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
