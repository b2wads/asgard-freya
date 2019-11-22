const request = require('supertest')
const nock = require('nock')
const envLoader = require('env-o-loader')

const app = require('../../../app')

const { host } = envLoader('../../../config/asgard-api.yaml')

describe('Acceptance - [Scaling]', () => {
  describe('POST /scaling', () => {
    let res

    before(async () => {
      nock(host)
        .put('/v2/apps/path/of/awesome_app')
        .reply(200)

      res = await request(app)
        .post('/scaling')
        .send({ message: 'app_name=path/of/awesome_app&instances=5' })
    })

    it('Should return status 200', () => {
      expect(res.status).to.be.eql(200)
    })
  })
})
