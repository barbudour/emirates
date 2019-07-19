const PrerenderSpaPlugin = require('prerender-spa-plugin')
const path = require('path')
let FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  css: {
    sourceMap: process.env.NODE_ENV == 'production' ? false : true
  },
  productionSourceMap: process.env.NODE_ENV == 'production' ? false : true,
  transpileDependencies: [],
  configureWebpack: config => {
    let plugins = []

    if (process.env.NODE_ENV === 'production') {
      plugins.push(new PrerenderSpaPlugin({
        staticDir: path.resolve(__dirname, 'dist'),
        routes: ['/'],
      }))
    }

    plugins.push(new FaviconsWebpackPlugin({
      // Your source logo
      logo: './public/favicon_source.png',
      // The prefix for all image files (might be a folder or a name)
      prefix: 'icons-[hash]/',
      // Emit all stats of the generated icons
      emitStats: false,
      // The name of the json containing all favicon information
      statsFilename: 'iconstats-[hash].json',
      // Generate a cache file with control hashes and
      // don't rebuild the favicons until those hashes change
      persistentCache: true,
      // Inject the html into the html-webpack-plugin
      inject: true,
      // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
      background: '#fff',
      // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: true,
        yandex: true,
        windows: true
      }
    }))

    return {
      plugins: plugins
    }

  }
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/imports.styl'),
      ],
    })
}