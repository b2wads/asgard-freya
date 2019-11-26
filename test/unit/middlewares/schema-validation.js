const sinon = require('sinon')
const { handleScaling } = require('../../../middlewares/schema-validation')
const ValidationError = require('../../../errors/validation-error')

describe('Unit - [SchemaValidation]', () => {
  describe('#habndleScaling()', () => {
    context('When the param "message" is not provided', () => {
      const nextSpy = sinon.spy()
      let result

      before(() => {
        const req = { body: {} }
        const next = nextSpy

        try {
          handleScaling(req, null, next)
        } catch (err) {
          result = err
        }
      })

      it('Should throw a ValidationError', () => {
        expect(result instanceof ValidationError).to.be.true
      })

      it('Should return error message', () => {
        expect(result.message).to.be.equal('"app_name" is required')
      })

      it('Should not have been called next()', () => {
        expect(nextSpy.called).to.be.false
      })
    })

    context('When the param "message" is provided', () => {
      context(
        'When the content of "message" doesnt pass the validation schema',
        () => {
          const nextSpy = sinon.spy()
          let result

          before(() => {
            const req = { body: { message: 'anotherValue' } }
            const next = nextSpy

            try {
              handleScaling(req, null, next)
            } catch (err) {
              result = err
            }
          })

          it('Should throw a ValidationError', () => {
            expect(result instanceof ValidationError).to.be.true
          })

          it('Should return error message', () => {
            expect(result.message).to.be.equal('"app_name" is required')
          })

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
