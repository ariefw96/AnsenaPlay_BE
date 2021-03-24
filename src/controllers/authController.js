const authModel = require('./../models/authModel')

module.exports = {
    Signup: (req, res) => {
        let { body } = req
        body = {
            ...body,
            name: '',
            phone: ''
        }
        authModel.authSignup(body)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },
    Login: (req, res) => {
        const { body } = req
        authModel.authLogin(body)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },
}