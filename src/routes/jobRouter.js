const express = require('express')
const jobController = require('../controllers/jobController')
const jobRouter = express.Router()

jobRouter.post('/add', jobController.addNewJob)
jobRouter.get('/list/:id', jobController.LoadNotif)

module.exports = jobRouter