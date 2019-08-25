const express = require('express')
const APIrouter = express.APIrouter()

const testController = require('./controllers/testController')

APIrouter.get('/test', testController.getTest)

// APIrouter.get('/test', (req, res) => {
//   res.json({ you: 'very cool', me: 'quite cool also!' })
// })

module.exports = APIrouter