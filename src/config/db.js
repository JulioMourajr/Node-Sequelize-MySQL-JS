const sequelize = require('./sequelize')

sequelize.sync({alter: process.env.NODE_ENV === 'production' ? false : true});

// Models

const officesModel = require('../models/officesModel');
const employeesModel = require('../models/employeesModel');
const customersModel = require('../models/customerModels');
const paymentsModel = require('../models/paymentsModel');
const ordersModel = require('../models/ordersModel');
const productsModel = require('../models/productsModel');
const productlinesModel = require('../models/productlinesModel');
const orderdetailsModel = require('../models/orderdetailsModel');

// Relatioships

// employees has many employees

employeesModel.hasMany(employeesModel, {foreignKey: 'reportsTo', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});
employeesModel.belongsTo(employeesModel, {foreignKey: 'reportsTo', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});

// offices has many employees
officesModel.hasMany(employeesModel, {foreignKey: 'officeCode', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});
employeesModel.belongsTo(officesModel, {foreignKey: 'officeCode', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});

// employees has many customers
employeesModel.hasMany(customersModel, {foreignKey: 'salesRepEmployeeNumber', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});
employeesModel.belongsTo(customersModel, {foreignKey: 'salesRepEmployeeNumber', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});

// customer has one payment

customersModel.hasOne(paymentsModel, {foreignKey: 'customerNumber', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});
paymentsModel.belongsTo(customersModel, {foreignKey: 'customerNumber', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});

// customer has many orders

customersModel.hasMany(ordersModel, {foreignKey: 'customerNumber', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});
ordersModel.belongsTo(customersModel, {foreignKey: 'customerNumber', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});

// productlines has many products

productlinesModel.hasMany(productsModel, {foreignKey: 'productLine', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});
productsModel.belongsTo(productlinesModel, {foreignKey: 'productLine', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});

// product has many Orders and orders has many products

productsModel.belongsToMany(ordersModel, {through: orderdetailsModel, foreignKey: 'productCode', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});
ordersModel.belongsToMany(productsModel, {through: orderdetailsModel, foreignKey: 'orderNumber', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})







