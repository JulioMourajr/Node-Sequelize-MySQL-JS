const express = require('express');

const router = express.Router();

const officesRouter = require('./officesRoute');
const employeesRouter = require('./employeesRoute');

router.use('/offices', officesRouter);
router.use('/employees', employeesRouter);

module.exports = router;