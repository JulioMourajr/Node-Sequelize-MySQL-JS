const {customersRepository} = require('../repositories');

const GenericController  = require('./genericController');

const customersController = new GenericController(customersRepository);

module.exports = {
  customersController
}