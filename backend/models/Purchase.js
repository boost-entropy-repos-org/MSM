const { DataTypes } = require("sequelize");
const db = require("../config/db");

const purchase = db.define('Purchase', {
    type: { type: DataTypes.STRING, allowNull: false },
    grade: { type: DataTypes.INTEGER, allowNull: false },
    tars: { type: DataTypes.FLOAT, allowNull: true },
    gross_wt: { type: DataTypes.FLOAT, allowNull: false },
    net_wt: { type: DataTypes.FLOAT, allowNull: false },
    less: { type: DataTypes.FLOAT, allowNull: true },
    total_cost: { type: DataTypes.DOUBLE, allowNull: false },
    amount_paid: { type: DataTypes.DOUBLE, allowNull: false },
    balance: { type: DataTypes.DOUBLE, allowNull: false },
    payment_mode: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamps: true
})


module.exports = purchase;