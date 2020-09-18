module.exports = {
  chainWebpack(config) {
    config.plugin('html').tap(args => {
      const [firstArgs] = args

      firstArgs.title = 'Vue 3 Initials'

      return args
    })
  }
}
