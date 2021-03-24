
const db = require('./../config/mySQL')

module.exports = {
    addNew: (body) => {
        return new Promise((resolve, reject) => {
            const queryStr = `INSERT INTO tb_job SET ?`
            db.query(queryStr, body, (err, data) => {
                if (!err) {
                    resolve({
                        status: 200,
                        message: 'berhasil menambahkan data'
                    })
                } else {
                    reject({
                        status: 500,
                        message: err
                    })
                }
            })
        })
    },
    LoadNotif: (id) => {
        return new Promise((resolve, reject) => {
            const queryStr = `SELECT sender_name, job_title, job_message FROM tb_job WHERE receiver = ?  ORDER BY created_at DESC`
            db.query(queryStr, id, (err, data) => {
                if (!err) {
                    resolve({
                        status: 200,
                        message: 'berhasil mendapatkan data',
                        data: data
                    })
                } else {
                    reject({
                        status: 500,
                        message: err
                    })
                }
            })
        })
    }
}