const logger = require('pino')()

const AsgardError = require('../errors/asgard-error')
const ValidationError = require('../errors/validation-error')

const errorStatus = [
  { type: AsgardError, status: 500 },
  { type: ValidationError, status: 400 }
]

module.exports = (err, req, res, next) => {
  const { message, stack } = err

  const error = errorStatus.find(({ type }) => err instanceof type)

  let status
  if (error && error.status) {
    status = error.status
    logger.error(`status: ${status}, message: ${message}`)
  } else {
    status = 500
    logger.error(`status: ${status}, message: ${message}`, stack)
  }

  res.status(status).json({ message })

  next()
}
