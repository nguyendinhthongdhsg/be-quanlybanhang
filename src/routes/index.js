const TaiKhoanRoute = require("./TaiKhoanRoute");
const SanPhamRoute = require("./SanPhamRoute");
const LoaiSanPhamRoute = require("./LoaiSanPhamRoute");
const DonHangRoute = require("./DonHangRoute");
const ChiTietDonHangRoute = require("./ChiTietDonHangRoute");
const DanhGiaRoute = require("./DanhGiaRoute");

function routes(app) {
    app.use("/taikhoan", TaiKhoanRoute);
    app.use("/sanpham", SanPhamRoute);
    app.use("/loaisanpham", LoaiSanPhamRoute);
    app.use("/donhang", DonHangRoute);
    app.use("/chitietdonhang", ChiTietDonHangRoute);
    app.use("/danhgia", DanhGiaRoute);
}

module.exports = routes