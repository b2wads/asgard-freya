const envLoader = require('env-o-loader')

const config = {
  asgardApi: envLoader('./asgard-api.yaml'),
  log: envLoader('./application.yaml').log
}

module.exports = config
