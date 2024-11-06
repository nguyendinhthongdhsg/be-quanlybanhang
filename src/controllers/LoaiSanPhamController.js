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

}

module.exports = new LoaiSanPhamController()
