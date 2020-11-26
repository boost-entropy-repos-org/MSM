const Customer = require('../models/Customer');
const log4js = require('log4js');
const { Op } = require('sequelize');
const logger = log4js.getLogger();

exports.addCustomer = async (req, res) => {
    const {
        cust_name,
        phone
    } = req.body;

    try {
        const customer = await Customer.create({
            cust_name,
            phone,
            cust_balance: 0
        })
        logger.info(`New Customer created with name: ${cust_name}`);
        res.status(200).json(customer);
    }
    catch (err) {
        logger.error(`Failed to create a new customer with name ${cust_name} - ${err} - ${new Error().stack}`);
        res.status(500).json(err);
    }
}


exports.searchCustomer = async (req, res) => {
    const searchText = req.params.searchText;
    try {
        const data = await Customer.findAll({
            where: {
                cust_name: {
                    [Op.substring]: searchText
                }
            }
        })
        logger.info(`Searched for customer ${searchText}`);
        res.status(200).json(data);
    }
    catch (err) {
        logger.error(`Failed to search for customer ${searchText} - ${err} - ${new Error().stack}`);
        res.status(500).json(err);
    }
}