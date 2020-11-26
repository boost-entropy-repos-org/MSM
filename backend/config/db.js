const Sequelize  = require('sequelize');
const config = require('config');
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';

const dbName = config.get("dbName");
const dbUser = config.get("dbUser");
const dbPassword = config.get("dbPassword");

module.exports = new Sequelize(dbName, dbUser, dbPassword, {
    host: 'localhost',
    dialect: 'mssql',
    logging: false
    // logging: msg => logger.debug(msg)
});