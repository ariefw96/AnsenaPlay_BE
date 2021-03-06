const express = require('express');
const mainRouter = express.Router()

const welcomeRouter = require('./welcome')
const authRouter = require('./authRouter')
const userRouter = require('./userRouter')
const jobRouter = require('./jobRouter')

//calling endpoint handler
mainRouter.use("/", welcomeRouter)
mainRouter.use("/auth", authRouter)
mainRouter.use("/user", userRouter)
mainRouter.use('/job', jobRouter)


module.exports = mainRouter