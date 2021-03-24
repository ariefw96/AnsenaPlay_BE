const express = require('express')
const authController = require ('../controllers/authController')
const authRouter = express.Router()

const checkToken = require('../helpers/checkToken')

authRouter.post('/signup',checkToken.isRegistered, authController.Signup)

authRouter.post('/login',authController.Login)



module.exports = authRouter
