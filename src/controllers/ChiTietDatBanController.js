const db = require("../config/db");

class ChiTietDatBanController {
    taoChiTiet(req, res, next) {
        const {	idmanguoidung , idban, ngaygio } = req.body
        const query = "INSERT INTO chitietdatban (idmanguoidung , idban, ngaygio) VALUES (?, ?, ?)"
        const values = [idmanguoidung , idban, ngaygio]

        db.query(query, values, (error, result, field) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            }
            return res.status(200).json({
                message: "Đặt bàn thành công",
                chiTietDatBan: true
            })
        })
    }

    layDsChiTietDatBanTheoIdMaNguoiDung(req, res, next) {
        const {	idmanguoidung } = req.body
        const query = "SELECT * FROM chitietdatban where idmanguoidung=?"
        const values = [idmanguoidung]

        db.query(query, values, (error, result, field) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            }
            return res.status(200).json({
                dsChiTietDatBan: result
            })
        })
    }

    layDsChiTietDatBan(req, res, next) {
        const query = "SELECT * FROM chitietdatban"

        db.query(query, (error, result, field) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            }
            return res.status(200).json({
                dsChiTietDatBan: result
            })
        })
    }
}

module.exports = new ChiTietDatBanController()
