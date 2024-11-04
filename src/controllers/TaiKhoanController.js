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

}

module.exports = new TaiKhoanController()
