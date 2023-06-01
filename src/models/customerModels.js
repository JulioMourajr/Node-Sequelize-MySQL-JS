const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');

const customerModel = sequelize.define('customers', {
  customerNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  customerName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  contactLastName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  contactFirstName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  addressLine1: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  addressLine2: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  postalCode: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  salesRepEmployeeNumber: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  creditLimit: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
  },
}, {
  tableName: 'customers',
  timestamps: false
});

module.exports = customerModel;