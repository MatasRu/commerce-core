const express = require("express");
const router = express.Router();
const controller = require('../controllers/main')

router.get("/api/products", (req, res) => controller.products(req, res))
router.post('/api/import', (req, res) => controller.getUserOrder(req, res))



module.exports = router