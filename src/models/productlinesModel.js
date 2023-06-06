const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');

const productlinesModel = sequelize.define('productlines', {
  productLine: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  textDescription: {
    type: DataTypes.STRING(4000),
    allowNull: false,
  },
  htmlDescription: {  
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image: {
    type: DataTypes.BLOB,
    allowNull: true,
  }
}, {
  tableName: 'productlines',
  timestamps: false
});

module.exports = productlinesModel;