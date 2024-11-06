const express = require('express');
const router = express.Router();
const SanPhamController = require("../controllers/SanPhamController.js");

router.post('/laySanPhamTheoLoai', SanPhamController.laySanPhamTheoLoai);
router.post('/laySanPhamTheoId', SanPhamController.laySanPhamTheoId);
module.exports = router;

