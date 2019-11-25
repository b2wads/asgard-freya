const qs = require('qs')
const ScalingService = require('../services/scaling-service')

const ScalingController = {
  async scale(req, res) {
    const { message } = req.body

    const { app_name, instances } = qs.parse(message)

    await ScalingService.scale(app_name, instances)

    return res.status(204).end()
  }
}

module.exports = ScalingController
