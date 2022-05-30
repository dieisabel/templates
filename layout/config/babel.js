const config = function(api) {
  api.cache(true);

  const presets = [
    "@babel/preset-env",
  ];

  const plugins = [];

  return {
    presets,
    plugins,
  }
};

module.exports = config
