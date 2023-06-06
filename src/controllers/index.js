const GenericController  = require('./genericController');

const EmployeesController = require('./employeesController');

const {
  officesRepository,
  employeesRepository,
  customersRepository,
  ordersRepository,
  paymentsRepository,
  productsRepository,
  productlinesRepository
} = require('../repositories');

const officesController = new GenericController(officesRepository);
const employeesController = new EmployeesController(employeesRepository);
const customersController = new GenericController(customersRepository);
const ordersController = new GenericController(ordersRepository);
const paymentsController = new GenericController(paymentsRepository);
const productsController = new GenericController(productsRepository);
const productlinesController = new GenericController(productlinesRepository);

module.exports = {
  officesController,
  employeesController,
  customersController,
  ordersController,
  paymentsController,
  productsController,
  productlinesController
}