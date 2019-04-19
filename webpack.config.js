const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/js', 'index.js'),
    path.resolve(__dirname, 'src/styles', 'main.scss')
  ],
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({ 
      filename: 'style.css'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    port: 8000,
    inline: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader?outputStyle=expanded'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jp(e*)g|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {    
          name: 'images/[hash]-[name].[ext]',
          limit: 10000
        }
      }
    ]
  }
};