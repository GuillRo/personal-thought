const express = require('express')
const router = express.Router()

const userController = require('./controllers/userController')

router.get('/users/:id', userController.getThoughtsFromUser)
router.get('/users', userController.getAllUsers)
router.post('/login', userController.login)
// router.get('/:username', userController.getThoughtsFromUser)
module.exports = router