const webpackConfig = require('./webpack.dev');

module.exports = {
  ...webpackConfig,
  mode: 'production',
  output: {
    uniqueName: 'auth',
    publicPath: 'http://dfa0altvravq2.cloudfront.net/',
    scriptType: 'text/javascript',
  },
};
