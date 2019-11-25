const sinon = require('sinon')
const { handleScaling } = require('../../../middlewares/schema-validation')

describe('Unit - [SchemaValidation]', () => {
  describe('#habndleScaling()', () => {
    context('When the param "message" is not provided', () => {
      const jsonSpy = sinon.spy()
      const statusStub = sinon
        .stub()
        .returns({ json: jsonSpy }) /* callsFake(() => ({ json: jsonStub })) */
      const nextSpy = sinon.spy()

      before(() => {
        const req = { body: {} }
        const res = { status: statusStub }
        const next = nextSpy

        handleScaling(req, res, next)
      })

      it('Should return status 400', () => {
        expect(statusStub.calledOnce).to.be.true
        expect(statusStub.calledWith(400)).to.be.true
      })

      // it('Should return the error message in response body', () => {
      //   expect(jsonSpy.calledOnce).to.be.true
      //   expect(jsonSpy.calledWith({ message: 'teste' })).to.be.true
      // })

      it('Should not have been called next()', () => {
        expect(nextSpy.called).to.be.false
      })
    })

    context('When the param "message" is provided', () => {
      context(
        'When the content of "message" doesnt pass the validation schema',
        () => {
          const jsonSpy = sinon.spy()
          const statusStub = sinon.stub().returns({
            json: jsonSpy
          }) /* callsFake(() => ({ json: jsonStub })) */
          const nextSpy = sinon.spy()

          before(() => {
            const req = { body: { message: 'anotherValue' } }
            const res = { status: statusStub }
            const next = nextSpy

            handleScaling(req, res, next)
          })

          it('Should return status 400', () => {
            expect(statusStub.calledOnce).to.be.true
            expect(statusStub.calledWith(400)).to.be.true
          })

          // it('Should return the error message in response body', () => {
          //   expect(jsonSpy.calledOnce).to.be.true
          //   expect(jsonSpy.calledWith({ message: 'teste' })).to.be.true
          // })

          it('Should not have been called next()', () => {
            expect(nextSpy.called).to.be.false
          })
        }
      )
      context(
        'When the content of "message" pass the validation schema',
        () => {
          const nextSpy = sinon.spy()
          let req

          before(() => {
            req = { body: { message: 'app_name=freya&instances=2' } }
            const next = nextSpy

            handleScaling(req, null, next)
          })

          it('Should have been set in req.data the validated schema', () => {
            expect(req.data).to.be.eql({ app_name: 'freya', instances: 2 })
          })

          it('Should have been called next()', () => {
            expect(nextSpy.calledOnce).to.be.true
          })
        }
      )
    })
  })
})
