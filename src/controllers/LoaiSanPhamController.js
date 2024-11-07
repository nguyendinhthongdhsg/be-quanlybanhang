const db = require("../config/db");

class LoaiSanPhamController {
    layDs(req, res, next) {
        const query = "SELECT * FROM loaisanpham";
        db.query(query, (error, result, field) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            } else {
                return res.status(200).json({
                    message: "Lấy danh sách loai thành công",
                    dsLoaiSanPham: result
                })
            }
        })
    }

    them(req, res, next) {
        const {ten, mota} = req.body
        const query = "INSERT INTO loaisanpham (ten, mota) VALUES (?, ?)"
        const values = [ten, mota]
        db.query(query, values, (error, result, field) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            } else {
                return res.status(200).json({
                    message: "Thêm loại sản phẩm thành công",
                    loaiSanPham: result.insertId
                })
            }
        });
    }

    sua(req, res, next) {
        const {ten, mota, id} = req.body
        const query = "UPDATE loaisanpham SET ten=?, mota=? WHERE id=?"
        const values = [ten, mota, id]
        db.query(query, values, (error, result, field) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            } else {
                return res.status(200).json({
                    message: "Sửa loại sản phẩm thành công",
                    taiKhoan: true
                })
            }
        });
    }

    xoa(req, res, next) {
        const {id} = req.body
        const query = "DELETE FROM loaisanpham WHERE id=?"
        const values = [id]
        db.query(query, values, (error, result, field) => {
            if(error) {
                return res.status(200).json({
                    error: error
                })
            } else {
                return res.status(200).json({
                    message: "Xóa loại sản phẩm thành công",
                    loaiSanPham: true
                })
            }
        });
    }
}

module.exports = new LoaiSanPhamController()
