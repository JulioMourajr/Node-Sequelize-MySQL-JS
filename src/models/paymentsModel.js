const sequelize = require('../config/sequelize');

const { DataTypes } = require('sequelize');

const paymentsModel = sequelize.define('payments', {
  customerNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  checkNumber: {
    type: DataTypes.STRING(50),
    allowNull: false,
    primaryKey: true,
  },
  paymentDate:{
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
  }
}, {
  tableName: 'payments',
  timestamps: false
});

module.exports = paymentsModel;