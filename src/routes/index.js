const express = require('express');

const router = express.Router();

const officesRouter = require('./officesRoute');

router.use('/offices', officesRouter);

module.exports = router;