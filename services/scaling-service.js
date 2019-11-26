const AsgardApi = require('../clients/asgard-api')

const client = new AsgardApi()

const ScalingService = {
  scale(appName, instances) {
    return client.scale(appName, instances)
  }
}

module.exports = ScalingService
