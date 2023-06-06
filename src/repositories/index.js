const GenericRepository = require('./genericRepository');

const EmployeesRepository = require('./employeesRepository');

const officesModel = require('../models/officesModel');
const employeesModel = require('../models/employeesModel')
const customersModel = require('../models/customerModels');
const ordersModel = require('../models/ordersModel');


const officesRepository = new GenericRepository('officeCode', officesModel);
const employeesRepository = new EmployeesRepository('employeeNumber', employeesModel);
const customersRepository = new GenericRepository('customerNumber', customersModel);
const ordersRepository = new GenericRepository('orderNumber', ordersModel);

module.exports = {
  officesRepository,
  employeesRepository,
  customersRepository,
  ordersRepository
}

