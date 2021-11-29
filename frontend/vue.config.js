module.exports = {
  // devServer: {
  //   port: 8081,
  //   proxy: "<url>"
  // },
  chainWebpack: config => {
    config.externals({ jquery: 'jQuery', bootstrap: 'bootstrap' });
    config.merge({ devtool: 'source-map' });
    config.module
      .rule('vue')
      .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          options.prettify = false
          // options.hotReload = false // disables Hot Reload // TODO, isn't working here
          return options
        })
  }
}
