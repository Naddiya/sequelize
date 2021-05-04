const Sequelize = require("sequelize");
const MysqlConnection = require("./util/database");

const Customer = require("./models/customer");
const Order = require("./models/order");

Customer.hasMany(Order);


MysqlConnection
    .sync({force: true})
    .then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
});