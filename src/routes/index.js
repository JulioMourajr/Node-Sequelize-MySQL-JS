const express = require('express');
const router = express.Router();

const genericRoute = require('./genericRoute');


const {
  officesController,
  customersController,
  ordersController,
  paymentsController,
  productsController,
  productlinesController
} = require('../controllers');

const officesRouter = genericRoute(officesController);
const employeesRouter = require('./employeesRoute')
const customersRouter = genericRoute(customersController);
const ordersRouter = genericRoute(ordersController);
const paymentsRouter = genericRoute(paymentsController);
const productsRouter = genericRoute(productsController);
const productlinesRouter = genericRoute(productlinesController);

router.use('/offices', officesRouter);
router.use('/employees', employeesRouter);
router.use('/customers', customersRouter);
router.use('/orders', ordersRouter);
router.use('/payments', paymentsRouter);
router.use('/products', productsRouter);
router.use('/productlines', productlinesRouter);

module.exports = router;