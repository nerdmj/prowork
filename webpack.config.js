let path = require('path');
let nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
        }
    ]
}


const client = {
  entry: [
    './src/client/index.js'
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
