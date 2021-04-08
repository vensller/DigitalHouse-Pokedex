const express = require('express');
const router = express.Router();
const controller = require('../controllers/LegendariesController');

/* GET legendaries. */
router.get('/', controller.index);
router.post('/', controller.create);
router.put('/:id', controller.update);

module.exports = router;
