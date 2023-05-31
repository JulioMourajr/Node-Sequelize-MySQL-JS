const sequelize = require('./sequelize')

// Models

const officesModel = require('./officesModel');
const employeesModel = require('./employeesModel');

// Relatioships

officesModel.hasMany(employeesModel, {foreignKey: 'officeCode', onDelete: 'NO ACTION', onUpdate: 'CASCADE'});

employeesModel.belongsTo(officesModel, {foreignKey: 'officeCode'});



sequelize.sync({alter: process.env.NODE_ENV === 'production' ? false : true});



