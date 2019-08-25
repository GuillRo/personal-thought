const express = require('express')
const router = express.Router()

const testController = require('./controllers/testController')

router.get('/', testController.index)
router.get('/test', testController.getTest)

module.exports = router