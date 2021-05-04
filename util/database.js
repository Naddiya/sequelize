const Sequelize = require("sequelize");
require('dotenv').config()

const MysqlConnection = new Sequelize({
    host: process.env.DB_HOST, 
    username:process.env.DB_USER, 
    password: process.env.DB_PASS,
    dialect:'mariadb',
    database:'sequelize'
  });

module.exports = MysqlConnection;

