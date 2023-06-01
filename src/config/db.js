const sequelize = require('./sequelize')

// Models

const officesModel = require('../models/officesModel');
const employeesModel = require('../models/employeesModel');

// Relatioships

// employees has many employees

employeesModel.hasMany(employeesModel, {foreignKey: 'reportsTo', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});
employeesModel.belongsTo(employeesModel, {foreignKey: 'reportsTo', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});

// offices has many employees
officesModel.hasMany(employeesModel, {foreignKey: 'officeCode', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});
employeesModel.belongsTo(officesModel, {foreignKey: 'officeCode', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});


sequelize.sync({alter: process.env.NODE_ENV === 'production' ? false : true});



