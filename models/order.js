const Sequelize = require("sequelize");
const MysqlConnection = require("../util/database");

const Order = MysqlConnection.define("order", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    total: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})

module.exports = Order;