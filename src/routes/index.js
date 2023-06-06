const express = require('express');
const router = express.Router();

const genericRoute = require('./genericRoute');


const {
  officesController,
  customersController,
  ordersController
} = require('../controllers');

const officesRouter = genericRoute(officesController);
const employeesRouter = require('./employeesRoute')
const customersRouter = genericRoute(customersController);
const ordersRouter = genericRoute(ordersController);

router.use('/offices', officesRouter);
router.use('/employees', employeesRouter);
router.use('/customers', customersRouter);
router.use('/orders', ordersRouter);


module.exports = router;