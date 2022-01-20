const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './'
  },
  mode: 'development',
  devServer: {
    static: {
      directory: resolve(__dirname, 'public')
    },
    compress: true,
    port: 3005,
    historyApiFallback: true
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@routes': resolve(__dirname, 'src/routes'),
      '@components': resolve(__dirname, 'src/components'),
      '@containers': resolve(__dirname, 'src/containers'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@icons': resolve(__dirname, 'src/assets/icons'),

    }
  },
  module: {
    rules:
      [
        {
          test: /\.jsx?$/,
          exclude: '/node_modules/',
          use: 'babel-loader'
        },
        {
          test: /\.s[ac]ss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(jpg|png|svg)$/,
          type: 'asset'
        }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ]
}