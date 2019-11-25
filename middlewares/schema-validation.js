const qs = require('qs')
const scaleSchema = require('../schemas/scale-schema')

const schemaValidation = {
  handleScaling(req, res, next) {
    const { message = '' } = req.body

    const data = qs.parse(message)

    const { error, value } = scaleSchema.validate(data)

    if (error) {
      return res.status(400).json({ message: error.message })
    }

    req.data = value

    return next()
  }
}

module.exports = schemaValidation
