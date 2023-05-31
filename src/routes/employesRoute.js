const express = require('express');

const router = express.Router();

const employeesController = require('../controllers/employeesController');

router.get('/', employeesController.getAllEmployees);

router.get('/:employeeCode', employeesController.getEmployeeByEmployeeCode);

router.post('/', employeesController.createEmployee);

router.put('/:employeeCode', employeesController.updateEmployee);

router.delete('/:employeeCode', employeesController.deleteEmployee);

module.exports = router;