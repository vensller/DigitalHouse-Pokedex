const express = require('express');

const controller = require('../controllers/LegendariesController');
const validator = require('../middlewares/LegendariesValidator');

const router = express.Router();

/* GET legendaries. */
router.get('/', controller.indexAll);
router.post('/', validator, controller.create);

router.put('/:id', validator, controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
