const AsgardApi = require('../clients/asgard-api')

const client = new AsgardApi()

const ScalingService = {
  async scale(appName, instances) {
    // TODO: tratar retorno
    /* const response = */ await client.scale(appName, instances)

    // TODO: melhorar retorno
    return true
  }
}

module.exports = ScalingService
