const ScalingService = require('../services/scaling-service')

const ScalingController = {
  async scale(req, res) {
    const { app_name, instances } = req.query

    // TODO: usar schema validation
    const _instances = parseInt(instances, 10)

    await ScalingService.scale(app_name, _instances)

    return res.end()
  }
}

module.exports = ScalingController
