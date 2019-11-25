const router = require('express').Router()
const ScalingController = require('../controllers/scaling-controller')
const { handleScaling } = require('../middlewares/schema-validation')

router.post('/', handleScaling, ScalingController.scale)

module.exports = router
