const { DataTypes, STRING } = require("sequelize");
const db = require("../config/db");

const sale = db.define('Sale', {
    type: { type: DataTypes.STRING, allowNull: false },
    weight: { type: DataTypes.FLOAT, allowNull: false },
    tars: { type: DataTypes.FLOAT, allowNull: true },
    total_cost: { type: DataTypes.FLOAT, allowNull: false },
    amount_paid: { type: DataTypes.DOUBLE, allowNull: false },
    balance: { type: DataTypes.DOUBLE, allowNull: false },
    payment_mode: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamps: true
})


module.exports = sale;