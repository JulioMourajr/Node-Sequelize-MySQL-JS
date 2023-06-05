const GenericController  = require('./genericController');

const {
  officesRepository,
  employeesRepository,
  customersRepository
} = require('../repositories');


const officesController = new GenericController(officesRepository);
const employeesController = new GenericController(employeesRepository);
const customersController = new GenericController(customersRepository);

module.exports = {
  officesController,
  employeesController,
  customersController
}