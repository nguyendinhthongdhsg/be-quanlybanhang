const mysql = require("mysql2")

// Cấu hình kết nối MySQL
const db = mysql.createConnection({
  host: "localhost", // Địa chỉ server của database
  user: "nguyendinhthong", // Tên người dùng
  password: "anhladuado1", // Mật khẩu
  database: "quanlybanhang", // Tên database
})

// Kết nối đến MySQL
db.connect((err) => {
  if (err) {
    console.error("Error database:", err)
  } else {
    console.log("Connect database success")
  }
})

module.exports = db


