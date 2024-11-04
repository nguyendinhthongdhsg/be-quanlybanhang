const TaiKhoanRoute = require("./TaiKhoanRoute");

function routes(app) {
    app.use("/taikhoan", TaiKhoanRoute);
}

module.exports = routes