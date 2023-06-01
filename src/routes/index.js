const express = require('express');
const router = express.Router();

const officesRouter = require('./officesRoute');
const employeesRouter = require('./employesRoute');
const customersRouter = require('./customersRoute');

router.use('/offices', officesRouter);
router.use('/employees', employeesRouter);
router.use('/customers', customersRouter);

module.exports = router;