const express = require('express');
const router = express.Router();

const genericRoute = require('./genericRoute');


const {
  officesController,
  customersController
} = require('../controllers');

const officesRouter = genericRoute(officesController);
const employeesRouter = require('./employeesRoute')
const customersRouter = genericRoute(customersController);

router.use('/offices', officesRouter);
router.use('/employees', employeesRouter);
router.use('/customers', customersRouter);


module.exports = router;