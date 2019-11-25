const Joi = require('@hapi/joi')

const schema = Joi.object({
  app_name: Joi.string().required(),

  instances: Joi.number().required()
})

module.exports = schema
