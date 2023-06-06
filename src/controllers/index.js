const GenericController  = require('./genericController');

const EmployeesController = require('./employeesController');

const {
  officesRepository,
  employeesRepository,
  customersRepository,
  ordersRepository
} = require('../repositories');


const officesController = new GenericController(officesRepository);
const employeesController = new EmployeesController(employeesRepository);
const customersController = new GenericController(customersRepository);
const ordersController = new GenericController(ordersRepository);

module.exports = {
  officesController,
  employeesController,
  customersController,
  ordersController
}