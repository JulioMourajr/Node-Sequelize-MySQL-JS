const GenericRepository = require('./genericRepository');

const EmployeesRepository = require('./employeesRepository');

const officesModel = require('../models/officesModel');
const employeesModel = require('../models/employeesModel')
const customersModel = require('../models/customerModels');
const ordersModel = require('../models/ordersModel');
const paymentsModel = require('../models/paymentsModel');
const productsModel = require('../models/productsModel');
const productlinesModel = require('../models/productlinesModel');

const officesRepository = new GenericRepository('officeCode', officesModel);
const employeesRepository = new EmployeesRepository('employeeNumber', employeesModel);
const customersRepository = new GenericRepository('customerNumber', customersModel);
const ordersRepository = new GenericRepository('orderNumber', ordersModel);
const paymentsRepository = new GenericRepository('customerNumber', paymentsModel);
const productsRepository = new GenericRepository('productCode', productsModel);
const productlinesRepository = new GenericRepository('productLine', productlinesModel);

module.exports = {
  officesRepository,
  employeesRepository,
  customersRepository,
  ordersRepository,
  paymentsRepository,
  productsRepository,
  productlinesRepository
}

