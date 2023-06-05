const GenericRepository = require('./genericRepository');

const customersModel = require('../models/customerModels');

const customersRepository = new GenericRepository('customerNumber', customersModel);

module.exports = {
  customersRepository,
}

