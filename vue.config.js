module.exports = {
  chainWebpack(config) {
    config
      .plugin('html')
      .tap((args) => {
        const [firstArgs] = args;

        firstArgs.title = 'GH Jobs Explorer';

        return args;
      });
  },
};
