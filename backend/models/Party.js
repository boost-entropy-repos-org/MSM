const { DataTypes } = require('sequelize');
const db = require('../config/db');

const party = db.define('Party', {
    party_name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.BIGINT },
    party_balance: { type: DataTypes.DOUBLE }
}, {
    timestamps: true
})


module.exports = party;