const GenericController  = require('./genericController');

const {customersRepository} = require('../repositories');

const customersController = new GenericController(customersRepository);

module.exports = {
  customersController
}