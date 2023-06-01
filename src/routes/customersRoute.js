const express = require('express');
const router = express.Router();

const {customersController} = require('../controllers');

router.get('/', customersController.getAll);
router.get('/:customerNumber', customersController.getById);
router.post('/', customersController.create);
router.put('/:customerNumber', customersController.update);
router.delete('/:customerNumber', customersController.delete);

module.exports = router;