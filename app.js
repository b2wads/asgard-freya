// Express
const express = require('express')
const expressPino = require('express-pino-logger')
const routes = require('./routes')
const logger = require('./initializers/logger')

const errorHandler = require('./middlewares/error-handler')

// Init express app
const app = express()

app.use(express.json())
app.use(expressPino({ logger }))

// Routes
app.use('/', routes)

app.use(errorHandler)

module.exports = app
