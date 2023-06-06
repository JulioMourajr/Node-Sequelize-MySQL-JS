const GenericController  = require('./genericController');

const EmployeesController = require('./employeesController');

const {
  officesRepository,
  employeesRepository,
  customersRepository
} = require('../repositories');


const officesController = new GenericController(officesRepository);
const employeesController = new EmployeesController(employeesRepository);
const customersController = new GenericController(customersRepository);

module.exports = {
  officesController,
  employeesController,
  customersController
}