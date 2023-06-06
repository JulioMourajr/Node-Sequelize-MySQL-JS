const express = require('express');

const router = express.Router();

const genericRoute = require('./genericRoute');

const {employeesController}= require('../controllers');

router.use('/', genericRoute(employeesController));
router.use('/email/:email', employeesController.getEmployeeByEmail);

module.exports = router;