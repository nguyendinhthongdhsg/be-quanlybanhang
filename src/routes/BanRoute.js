const express = require('express');
const router = express.Router();
const BanController = require("../controllers/BanController");

router.post('/taoBan', BanController.taoBan);
router.post('/layBanTheoViTri', BanController.layBanTheoViTri);
router.get('/layDsBan', BanController.layDsBan);
module.exports = router;

