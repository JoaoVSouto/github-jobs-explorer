module.exports = {
  chainWebpack(config) {
    config.plugin('html').tap((args) => {
      const [firstArgs] = args;

      firstArgs.title = 'GH Jobs Explorer';

      return args;
    });

    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: ['./src/styles/_colors.scss', './src/styles/_mixins.scss'],
        })
        .end();
    });
  },
};
