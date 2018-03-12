var express = require('express');
var router = express.Router();

var customerController = require('../../controllers/customer.controllers');

router.get('/',customerController.getCustomers);
router.post('/',customerController.createCustomer);
router.post('/:nama',customerController.getCustomer);
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;