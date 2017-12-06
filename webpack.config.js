const path = require('path');

module.exports = {
  entry: './main.js',
  context: path.join(__dirname, 'src'),

  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'www'),
    // Note: the below line is required for reac-router-dom to work properly
    historyApiFallback: true
  }
  // resolveLoader: {
  //   root: [path.join(__dirname, 'node_modules')]
  // },
  // resolve: {
  //   root: [path.join(__dirname, 'node_modules')]
  // }
};
