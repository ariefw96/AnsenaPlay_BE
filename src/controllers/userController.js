const userModel = require('../models/userModel')
const fs = require('fs')

module.exports = {
    getMyUser: (req, res) => {
        const { id } = req.params
        userModel.getMyUser(id)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },
    ChangePersonalInfo: (req, res) => {
        const { body } = req
        const { id } = req.params
        userModel.userChangeInfo(body, id)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },
    ListUser: (req, res) => {
        const { id } = req.params
        userModel.ListUser(id)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    }
}