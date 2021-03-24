const jobModel = require('./../models/jobModel')

module.exports = {
    addNewJob: (req, res) => {
        let { body } = req
        body = {
            ...body,
            created_at: new Date(Date.now())
        }
        jobModel.addNew(body)
            .then((result) => {
                const jobMsg = {
                    from: body.sender_name,
                    title: body.job_title,
                    message: body.job_message
                }
                global.io.to(body.receiver).emit('Notification', jobMsg)
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },
    LoadNotif: (req, res) => {
        const { id } = req.params
        jobModel.LoadNotif(id)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    }
}