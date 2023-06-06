const sequelize = require('../config/sequelize');

const { DataTypes } = require('sequelize');

const orderdetailsModel = sequelize.define('orderdetails', {
  orderNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  productCode: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantityOrdered: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  priceEach: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
  },
  orderLineNumber: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  }
}, {
  tableName: 'orderdetails',
  timestamps: false
});

module.exports = orderdetailsModel;