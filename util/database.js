const Sequelize = require("sequelize");
require('dotenv').config()

const MysqlConnection = new Sequelize({
    host: process.env.DB_HOST, 
    username:process.env.DB_USER, 
    password: process.env.DB_PASS,
    dialect:process.env.DB_DIALECT,
    database:process.env.DB_NAME
  });

module.exports = MysqlConnection;

