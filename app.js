const express = require ('express')
const router = require('./routers/route')
const app = express()

app.use(express.json())

app.use('/brand',router)

module.exports = app