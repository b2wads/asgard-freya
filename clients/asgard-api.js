const axios = require('axios')
const envLoader = require('env-o-loader')

const { 
  host,
  authToken,
} = envLoader('../config/asgard-api.yaml')

const AsgardApi = class {
  constructor(apiHost = host) {
    this.apidHost = apiHost
  }

  async scale(appName, instances) {
    try {
      const res = await axios({
        method: 'put',
        url: `${this.apidHost}/v2/apps/${appName}`,
        data: { instances },
        headers: { 
          'Authorization': authToken,
          'Content-Type': 'application/json'
        },
      })

      return res.data
    } catch (err) {
      // FIXME: Trocar para log
      // console.log(err.message, err.stack)
      throw new Error(`trying to scale ${appName} to ${instances} instances`)
    }
  }
}

module.exports = AsgardApi
