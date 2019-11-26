const request = require('supertest')
const nock = require('nock')
const envLoader = require('env-o-loader')

const app = require('../../../app')

const { host } = envLoader('../../../config/asgard-api.yaml')

describe('Acceptance - [Scaling]', () => {
  describe('POST /scaling', () => {
    context('When all is ok', () => {
      let res

      before(async () => {
        nock(host)
          .put('/v2/apps/path/of/awesome_app')
          .reply(200)

        res = await request(app)
          .post('/scaling/instance')
          .send({ message: 'app_name=path/of/awesome_app&instances=5' })
      })

      it('Should return status 204', () => {
        expect(res.status).to.be.eql(204)
      })
    })

    context('When occurs validation error', () => {
      let res

      before(async () => {
        res = await request(app)
          .post('/scaling/instance')
          .send({ message: '' })
      })

      it('Should return status 400', () => {
        expect(res.status).to.be.eql(400)
      })

      it('Should return error message', () => {
        expect(res.body).to.have.property('message', '"app_name" is required')
      })
    })

    context('When occurs integration error with Asgard API', () => {
      let res

      before(async () => {
        nock(host)
          .put('/v2/apps/path/of/awesome_app')
          .reply(500)

        res = await request(app)
          .post('/scaling/instance')
          .send({ message: 'app_name=path/of/awesome_app&instances=5' })
      })

      it('Should return status 500', () => {
        expect(res.status).to.be.eql(500)
      })

      it('Should return error message', () => {
        expect(res.body).to.have.property(
          'message',
          'trying to scale path/of/awesome_app to 5 instances'
        )
      })
    })
  })
})
