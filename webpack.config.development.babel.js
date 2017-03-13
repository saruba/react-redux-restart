import webpack from 'webpack';
import DashboardPlugin from 'webpack-dashboard/plugin';
import config from './webpack.config.base';


config.module.rules = config.module.rules.concat([
  {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader?sourceMap',
    ],
  },
]);
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new DashboardPlugin(),
  new webpack.LoaderOptionsPlugin({
    debug: true,
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
    },
  }),
]);

export default config;
