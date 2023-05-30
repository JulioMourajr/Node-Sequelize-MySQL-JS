require('dotenv').config();

const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
})

module.exports = sequelize;