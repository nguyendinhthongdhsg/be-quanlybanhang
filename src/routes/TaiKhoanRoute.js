const express = require('express');
const router = express.Router();
const TaiKhoanController = require("../controllers/TaiKhoanController.js");

router.post('/login', TaiKhoanController.login);
module.exports = router;
