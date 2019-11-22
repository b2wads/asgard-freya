const router = require('express').Router()
const ScalingController = require('../controllers/scaling-controller')

router.post('/', ScalingController.scale)

module.exports = router
