const db = require("../config/db");

class BanController {
    taoBan(req, res, next) {
        const {	vitri , soluong } = req.body
        const query = "INSERT INTO ban (vitri, trangthai, soluong) VALUES (?, ?, ?)"
        const values = [vitri, 0, soluong]
    }

    layBanTheoViTri(req, res, next) {
        const { vitri } = req.body
        const query = "SELECT * from ban where vitri=?"
        const values = [vitri]
        db.query(query, values, (error, result, field) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            }
            return res.status(200).json({
                message: "lay ban thanh cong",
                ban: result[0]
            })
        })
    }

    layDsBan(req, res, next) {
        const query = "SELECT * from ban"
        db.query(query, (error, result, field) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            }
            return res.status(200).json({
                message: "lay danh sach ban thanh cong",
                dsBan: result
            })
        })
    }
}

module.exports = new BanController()
