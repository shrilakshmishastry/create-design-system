const webpack = require('webpack');

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback,{
    'os': require.resolve('os-browserify'), 
    'url': require.resolve('url') ,
    'path': require.resolve('path'),
  });
  config.resolve.fallback = fallback; 
  config.plugins = (config.plugins || []).concat([ 
    new webpack.ProvidePlugin({ 
      process: 'process/browser', 
      Buffer: ['buffer', 'Buffer'] 
    }) 
  ]); 
  return config;
};