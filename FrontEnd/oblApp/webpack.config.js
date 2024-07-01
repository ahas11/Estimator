const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist/'),
    filename: '[name]-[hash].js',
    publicPath: 'http://localhost:3000/static/',
  },
  plugins: [
    new BundleTracker({ path: __dirname, filename: './webpack-stats.json' }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
