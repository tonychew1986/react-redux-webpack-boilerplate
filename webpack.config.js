var debug = process.envNODE_ENV !== "production";

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
var CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin");


var path = require('path');

var srcPath = path.join(__dirname, 'source');
var buildPath = path.join(__dirname, 'public');
var appPath = path.join(__dirname, 'app');

module.exports = {
  context: srcPath,
  entry: {
    applicationHome: path.join(srcPath, 'js', 'application.js'),
    vendor: ["jquery", "react", "axios", "moment"]
  },
  output: {
      path: buildPath,
      filename: "./js/bundle--[name].js"
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!stylus-loader' })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?publicPath=../&name=./fonts/[name].[ext]'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new CommonsPlugin({
      name: "vendor",
      filename: "./js/bundle--vendor.js"
    }),
    new ExtractTextPlugin("./css/[name].css")
  ]
};
