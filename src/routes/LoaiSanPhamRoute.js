const express = require('express');
const router = express.Router();
const LoaiSanPhamController = require("../controllers/LoaiSanPhamController.js");

router.get('/layDs', LoaiSanPhamController.layDs);
module.exports = router;

