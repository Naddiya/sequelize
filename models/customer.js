const MysqlConnection = require("../util/database");
const Sequelize = require("sequelize");

const Customer = MysqlConnection.define("customer", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Customer; 