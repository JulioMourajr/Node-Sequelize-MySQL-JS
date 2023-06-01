const GenericRepository = require('./genericRepository');

const customersModel = require('../models/customerModels');

const customersRepository = new GenericRepository(customersModel);

module.exports = {
  customersRepository,
}

