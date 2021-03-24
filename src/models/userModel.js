const db = require('../config/mySQL')
const bcrypt = require('bcrypt')

module.exports = {
    getMyUser: (id) => {
        return new Promise((resolve, reject) => {
            const queryStr = `SELECT email,name,phone FROM tb_user WHERE id = ?`
            db.query(queryStr, id, (err, data) => {
                if (!err) {
                    resolve({
                        status: 200,
                        message: `OK`,
                        data: data[0]
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
    userChangeInfo: (body, id) => { //includes all userData (PIN, PhoneNumber, and etc.)
        return new Promise((resolve, reject) => {
            const queryStr = `UPDATE tb_user SET ? WHERE id = ?`
            db.query(queryStr, [body, id], (err, data) => {
                if (!err) {
                    resolve({
                        status: 200,
                        message: `Data berhasil diubah`,
                        data: body
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
    ListUser: (id) =>{
        return new Promise ((resolve, reject) =>{
            const queryStr = `SELECT * FROM tb_user WHERE NOT id = ?`
            db.query(queryStr,id, (err, data) =>{
                if(!err){
                    resolve({
                        status:200,
                        message:'berhasil menampilkan data',
                        data:data
                    })
                }else{
                    reject({
                        status:500,
                        message:err
                    })
                }
            })
        })
    }
}