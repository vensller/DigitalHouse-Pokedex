const express = require('express');

const controller = require('../controllers/LegendariesController');
const validator = require('../middlewares/LegendariesValidator');

const router = express.Router();

// CRUD Legendaries
router.get('/', controller.indexAll);
router.post('/', validator, controller.create);
router.put('/:id', validator, controller.update);
router.delete('/:id', controller.destroy);

// Get Detalhado
router.get('/:id', controller.indexById);
router.get('/:id/:attribute', controller.indexByIdAndAttribute);

module.exports = router;
