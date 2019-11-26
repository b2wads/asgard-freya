const ScalingService = require('../services/scaling-service')

const ScalingController = {
  async scale(req, res) {
    const {
      data: { app_name, instances }
    } = req

    await ScalingService.scale(app_name, instances)

    return res.status(204).end()
  }
}

module.exports = ScalingController
