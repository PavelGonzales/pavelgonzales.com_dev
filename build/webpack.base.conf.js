var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      TweenMax: 'gsap/src/uncompressed/TweenMax.js',
      TweenLite: 'gsap/src/uncompressed/TweenLite.js',
      TimelineLite: 'gsap/src/uncompressed/TimelineLite.js',
      TimelineMax: 'gsap/src/uncompressed/TimelineMax.js',
      CSSPlugin: 'gsap/src/uncompressed/plugins/CSSPlugin.js',
      AttrPlugin: 'gsap/src/uncompressed/plugins/AttrPlugin.js',
      CSSRulePlugin: 'gsap/src/uncompressed/plugins/CSSRulePlugin.js',
      ColorPropsPlugin: 'gsap/src/uncompressed/plugins/ColorPropsPlugin.js',
      RoundPropsPlugin: 'gsap/src/uncompressed/plugins/RoundPropsPlugin.js',
      EasePack: 'gsap/src/uncompressed/easing/EasePack.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true
        }
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
    ]
  }
}
