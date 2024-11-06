const express = require('express');
const router = express.Router();
const DonHangController = require("../controllers/DonHangController.js");

router.post('/taoDonHang', DonHangController.taoDonHang);
router.get('/layDanhSach', DonHangController.layDanhSach);
router.post('/capNhatDonHang', DonHangController.capNhatDonHang);
router.post('/layDanhSachTheoId', DonHangController.layDanhSachTheoId);
module.exports = router;

