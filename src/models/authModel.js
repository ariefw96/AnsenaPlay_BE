const db = require('../config/mySQL')

module.exports = {
    authSignup: (body) => {
        return new Promise((resolve, reject) => {
            const queryStr = `INSERT INTO tb_user SET ?`
            db.query(queryStr, body, (err, data) => {
                if (!err) {
                    resolve({
                        status: 200,
                        message: 'berhasil registrasi!',
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
    authLogin: (body) => {
        return new Promise((resolve, reject) => {
            const queryStr = `SELECT * FROM tb_user WHERE email = ? AND password = ?`
            db.query(queryStr, [body.email, body.password], (err, data) => {
                if (!err) {
                    if (data.length > 0) {
                        resolve({
                            status: 200,
                            message: 'sukses login',
                            content: {
                                id: data[0].id,
                                email: data[0].email,
                                name: data[0].name
                            }
                        })
                    } else {
                        reject({
                            status: 404,
                            message: 'email/password tidak dikenali',
                            content: {}
                        })
                    }
                } else {
                    reject({
                        status: 500,
                        message: err
                    })
                }
            })
        })
    },
}