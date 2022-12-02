const route = require('express').Router()
const authController = require('../controllers/authControllers')

route.post('/register' , authController.register)

module.exports = route