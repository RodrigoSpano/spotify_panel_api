require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const indexRouter = require('./routes')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_URI }))

app.use('/api', indexRouter)

module.exports = app