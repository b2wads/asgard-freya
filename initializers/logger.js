const pino = require('pino')
const { level } = require('../config').log

const configLogger = {
  level,
  prettyPrint: {
    colorize: true,
    crlf: false,
    errorLikeObjectKeys: ['err', 'error'],
    errorProps: '',
    levelFirst: false,
    messageKey: 'msg',
    messageFormat: false,
    timestampKey: 'time',
    translateTime: false,
    ignore: 'pid,hostname',
    customPrettifiers: {}
  }
}

const logger = pino(configLogger)

module.exports = logger
