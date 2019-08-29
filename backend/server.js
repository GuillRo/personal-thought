/* eslint-disable no-console */
const port = process.env.PORT || 8080
const path = require('path')
require('dotenv').config()

const express = require('express')
const app = express()

var bodyParser = require('body-parser')
const server = require('http').createServer(app)

const router = require('./router')

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, '../build')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))


app.use('/api', router)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
