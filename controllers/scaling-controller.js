const qs = require('qs')
const ScalingService = require('../services/scaling-service')

const ScalingController = {
  async scale(req, res) {
    const { message } = req.body

    const { app_name, instances } = qs.parse(message)

    // TODO: usar schema validation
    const _instances = parseInt(instances, 10)

    await ScalingService.scale(app_name, _instances)

    return res.end()
  }
}

module.exports = ScalingController
