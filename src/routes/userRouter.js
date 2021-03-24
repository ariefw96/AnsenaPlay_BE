const express = require('express')
const userController = require('../controllers/userController')
const userRouter = express.Router()

const checkToken = require('../helpers/checkToken')
// const imageUpload = require ('../helpers/uploadImg')

userRouter.get('/myProfile/:id', userController.getMyUser)
userRouter.patch('/changeInfo/:id', userController.ChangePersonalInfo)
userRouter.get('/list/:id', userController.ListUser)


module.exports = userRouter