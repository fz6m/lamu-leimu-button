const path = require("path")

function resolve(dir) {
  return path.join(__dirname, dir)
}

const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: resolve('src/index.js'),
  output: {
    path: resolve('dist'),
    filename: "lamu-leimu-button.js"
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: resolve('src'),
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  }
}