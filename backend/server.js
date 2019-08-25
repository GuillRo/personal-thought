/* eslint-disable no-console */
const port = process.env.PORT || 8080
const path = require('path')

const express = require('express')
const app = express()

const server = require('http').createServer(app)

const router = require('./router')

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, '../build')))

app.use('/api', router)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
