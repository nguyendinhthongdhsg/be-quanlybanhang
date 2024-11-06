const db = require("../config/db");

class SanPhamController {
    laySanPhamTheoLoai(req, res, next) {
        const {idloaisanpham} = req.body;
        const query = "SELECT * FROM sanpham WHERE idloaisanpham=?";
        const values = [
            idloaisanpham
        ]
        db.query(query, values, (error, result, field) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            } else {
                return res.status(200).json({
                    message: "Lấy danh sách sản phẩm thành công",
                    dsSanPham: result
                })
            }
        })
    }

    laySanPhamTheoId(req, res, next) {
        const {id} = req.body;
        const query = "SELECT * FROM sanpham WHERE id=?";
        const values = [
            id
        ]
        db.query(query, values, (error, result, field) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            } else {
                return res.status(200).json({
                    message: "Lấy sản phẩm thành công",
                    sanPham: result[0]
                })
            }
        })
    }
}

module.exports = new SanPhamController()
