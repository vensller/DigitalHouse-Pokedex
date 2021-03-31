const express = require('express');
const router = express.Router();
const controller = require('../controllers/LegendariesController');

/* GET legendaries. */
router.get('/', controller.index);

module.exports = router;
