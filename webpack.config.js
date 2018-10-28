let path = require('path');
let nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const webConfig = require('./webConfig');

const moduleObj = {
    rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [ 'babel-loader' ]
        },

        {
          test: /\.html$/,
          use: [ "html-loader" ]
        },

        {
          test: /\.scss$/,
          use: [
              {
                  loader: 'file-loader',
                  options: {
                      name: '[name].min.css',
                      outputPath: 'assets/css/'
                  }
              },
              {
                  loader: 'extract-loader'
              },
              {
                  loader: 'css-loader',
                  options: {
                      minimize: true,
                      url: true,
                      root: webConfig.siteURL
                  }
              },
              {
                  loader: 'sass-loader'
              }
              ]
          }
    ]
}


const client = {
  entry: [
    './src/client/index.js',
    './src/client/assets/scss/styles.scss'
  ],
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/public'),
    publicPath: '/'
  },
  module: moduleObj,
  devServer: {
     contentBase: path.join(__dirname, "dist/public/"),
     port: 3000,
     historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/client/index.html',
      filename: "./index.html"
    }),
    new ExtractTextPlugin({
      filename:'app.bundle.css'
    }),
    new CopyWebpackPlugin([
          { from: 'src/client/assets/graphics', to: 'assets/graphics' },
    ])
  ]
};

const server = {
  entry:{
    'server': './src/server/index.js'
  },
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: moduleObj,
  externals: [nodeExternals()]
};

module.exports = [client, server];
