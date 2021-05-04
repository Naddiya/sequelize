const MysqlConnection = require("./util/database");

const Customer = require("./models/customer");
const Order = require("./models/order");
const Sequelize = require("sequelize");

MysqlConnection.sync().then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});