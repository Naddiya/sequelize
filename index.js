const Sequelize = require("sequelize");
const MysqlConnection = require("./util/database");

const Customer = require("./models/customer");
const Order = require("./models/order");

Customer.hasMany(Order);


MysqlConnection
    .sync({force: true})
    .then(result => {
        return Customer.create({name: "Someone", email:"some@mail.com"})
        console.log(result);
    }).then(customer => {console.log("First Customer :", customer);
    }).catch(err => {
        console.log(err);
});