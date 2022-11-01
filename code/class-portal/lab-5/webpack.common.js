const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  //context directory is src
  context: path.join(__dirname, 'src'),
  
  //entry file of the project,(relative to context)
  entry: ['./index.js'],
  output: {

    //distribution directory
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  target: 'web',

plugins: [

  //copy all src/assets to dist/assets
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin([
    { from: 'Images/',to:'Images/'}
  ], {
    ignore: [],
    debug:'debug',
    copyUnmodified: true
  }),

  //opimize all image file
  new ImageminPlugin({
    test: /\.(jpe?g|png|gif|svg)$/i ,
    disable: process.env.NODE_ENV !== 'production',

    //this way seems better on mac.
    pngquant: {
      verbose:true,
      quality: '80-90',
    }
  }),

  //copy html to dist and insert the js reference.
  new HtmlPlugin({
    file:path.join(__dirname,'dist','index.html'),
    template:'./index.html'
  })
]
}