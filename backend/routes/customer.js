const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/customer')

router.post('', CustomerController.addCustomer);

router.get('/:searchText', CustomerController.searchCustomer);



module.exports = router;