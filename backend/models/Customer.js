const { DataTypes } = require('sequelize');
const db = require('../config/db');

const customer = db.define('Customer', {
    cust_name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.BIGINT },
    cust_balance: { type: DataTypes.DOUBLE }
}, {
    timestamps: true
})


module.exports = customer;