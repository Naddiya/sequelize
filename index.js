const Sequelize = require("sequelize");
const MysqlConnection = require("./util/database");

const Customer = require("./models/customer");
const Order = require("./models/order");

Customer.hasMany(Order);

let customerId = null
MysqlConnection
    .sync({force: true})
    .then(result => {
        return Customer.create({name: "Someone", email:"some@mail.com"})
        console.log(result);
    }).then(customer => {console.log("First Customer :", customer);
        customerId = customer.id;
        return customer.createOrder({total: 45})
    }).then(order => {
        console.log("Order is : ", order);
        return Order.findAll({ where: customerId});
    }).then(orders => {
        console.log("All the Orders are: ", orders)
    }).catch(err => {
        console.log(err);
});