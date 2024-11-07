const db = require("../config/db");

class TaiKhoanController {
    login(req, res, next) {
        const {tendangnhap, matkhau} = req.body;
        const query = "SELECT * FROM taikhoan WHERE tendangnhap=? and matkhau=?";
        const values = [
            tendangnhap,
            matkhau
        ]
        db.query(query, values, (error, result, field) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            } else if(result.length === 0){
                return res.status(200).json({
                    error: "Tài khoản hoặc mật khẩu không chính xác"
                })
            } else {
                return res.status(200).json({
                    message: "Đăng nhập thành công",
                    taiKhoan: result[0]
                })
            }
        })
    }

    layTaiKhoan(req, res, next) {
        const {id} = req.body;
        const query = "SELECT * FROM taikhoan WHERE id=?";
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
                    message: "Đăng nhập thành công",
                    taiKhoan: result[0]
                })
            }
        })
    }

    layDsTaiKhoan(req, res, next) {
        const query = "SELECT * FROM taikhoan";
        db.query(query, (error, result, field) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            } else {
                return res.status(200).json({
                    message: "Đăng nhập thành công",
                    dsTaiKhoan: result
                })
            }
        })
    }

    them(req, res, next) {
        const {tendangnhap, tennguoidung, email, sodienthoai, idquyen} = req.body
        const query = "INSERT INTO taikhoan (tendangnhap, tennguoidung, email, matkhau, sodienthoai, idquyen, diemtichluy) VALUES (?, ?, ?, ?, ?, ?, ?)"
        const values = [tendangnhap, tennguoidung, email, '123456', sodienthoai, idquyen, 0]
        db.query(query, values, (error, result, field) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            } else {
                return res.status(200).json({
                    message: "Thêm tài khoản thành công",
                    taiKhoan: result.insertId
                })
            }
        });
    }

    sua(req, res, next) {
        const {id, tennguoidung, email, sodienthoai} = req.body
        const query = "UPDATE taikhoan SET tennguoidung=?, email=?, sodienthoai=? WHERE id=?"
        const values = [tennguoidung, email, sodienthoai, id]
        db.query(query, values, (error, result, field) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            } else {
                return res.status(200).json({
                    message: "Sửa tài khoản thành công",
                    taiKhoan: true
                })
            }
        });
    }

    xoa(req, res, next) {
        const {id} = req.body
        const query = "DELETE FROM taikhoan WHERE id=?"
        const values = [id]
        db.query(query, values, (error, result, field) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            } else {
                return res.status(200).json({
                    message: "Xóa tài khoản thành công",
                    taiKhoan: true
                })
            }
        });
    }
}

module.exports = new TaiKhoanController()
