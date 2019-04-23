const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/
      },
      {
        // css-loader
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        // sass/scss loader to load sass-scss style files
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        // file-loader to copy image files to assets folder in destination folder
        test: /\.(svg|png|jpg|jpeg|bmp|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
        options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets'
                }
              }
            ]
      }
    ]
  }
}
