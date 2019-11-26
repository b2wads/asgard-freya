const axios = require('axios')
const logger = require('../initializers/logger')
const AsgardError = require('../errors/asgard-error')
const { host, authToken } = require('../config').asgardApi

const AsgardApi = class {
  constructor(apiHost = host) {
    this.apidHost = apiHost
  }

  async scale(appName, instances) {
    try {
      const options = {
        method: 'put',
        url: `${this.apidHost}/v2/apps/${appName}`,
        data: { instances },
        headers: {
          Authorization: authToken,
          'Content-Type': 'application/json'
        }
      }

      logger.debug(`Trying to call Asgard API with options: `, options)

      const res = await axios(options)

      logger.debug(`Called Asgard API with success. Response`, res.data)

      return res.data
    } catch (err) {
      logger.error(err.message)
      throw new AsgardError(
        `trying to scale ${appName} to ${instances} instances`
      )
    }
  }
}

module.exports = AsgardApi
