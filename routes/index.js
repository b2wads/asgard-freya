const router = require('express').Router()
const HealthcheckRoutes = require('./healthcheck')
const ScalingRoutes = require('./scaling')

router.use('/healthcheck', HealthcheckRoutes)
router.use('/scaling', ScalingRoutes)

module.exports = router
