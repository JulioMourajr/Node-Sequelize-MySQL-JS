const express = require('express');
const router = express.Router();

const genericRoute = require('./genericRoute');

const {customersController} = require('../controllers');

const officesRouter = require('./officesRoute');
const employeesRouter = require('./employesRoute');
const customersRouter = genericRoute(customersController);

router.use('/offices', officesRouter);
router.use('/employees', employeesRouter);
router.use('/customers', customersRouter);



module.exports = router;