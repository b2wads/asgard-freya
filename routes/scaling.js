const router = require('express').Router()
const ScalingController = require('../controllers/scaling-controller')
const { handleScaling } = require('../middlewares/schema-validation')
const wrapAsync = require('../middlewares/wrap-async')

router.post('/instance', handleScaling, wrapAsync(ScalingController.scale))

module.exports = router
