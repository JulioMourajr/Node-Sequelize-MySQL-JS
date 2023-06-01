const express = require('express');

const router = express.Router();

const employeesController = require('../controllers/employesController');

router.get('/', employeesController.getAllEmployes);

router.get('/:employeeCode', employeesController.getEmployeById);

router.post('/', employeesController.createEmploye);

router.put('/:employeeCode', employeesController.updateEmploye);

router.delete('/:employeeCode', employeesController.deleteEmploye);

module.exports = router;