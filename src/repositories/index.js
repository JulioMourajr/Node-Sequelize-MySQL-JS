const GenericRepository = require('./genericRepository');

const EmployeesRepository = require('./employeesRepository');

const officesModel = require('../models/officesModel');
const employeesModel = require('../models/employeesModel')
const customersModel = require('../models/customerModels');


const officesRepository = new GenericRepository('officeCode', officesModel);
const employeesRepository = new EmployeesRepository('employeeNumber', employeesModel);
const customersRepository = new GenericRepository('customerNumber', customersModel);

module.exports = {
  officesRepository,
  employeesRepository,
  customersRepository
}

