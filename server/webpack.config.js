// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodeExternals = require('webpack-node-externals');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const NodemonPlugin = require('nodemon-webpack-plugin');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
  entry: path.join(__dirname, '/src/index.ts'),
  mode: NODE_ENV,
  devtool: 'inline-source-map',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      },
    ],
  },
  externals: [nodeExternals()],
  watch: NODE_ENV === 'development',
  plugins: [new NodemonPlugin()],
};
