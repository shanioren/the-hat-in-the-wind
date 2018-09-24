const rewireStyledComponents = require('react-app-rewire-styled-components');


module.exports = function override(config, env) {
  const pluginOptions = {
    fileName: false
  };

  config = rewireStyledComponents(config, env, pluginOptions);

  return config;
}