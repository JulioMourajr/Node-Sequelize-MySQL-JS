const express = require('express');
const router = express.Router();

const genericRoute = require('./genericRoute');

const {
  officesController,
  employeesController,
  customersController
} = require('../controllers');

const officesRouter = genericRoute(officesController);
const employeesRouter = genericRoute(employeesController);
const customersRouter = genericRoute(customersController);

router.use('/offices', officesRouter);
router.use('/employees', employeesRouter);
router.use('/customers', customersRouter);


module.exports = router;