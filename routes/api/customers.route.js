var express = require('express');
var router = express.Router();

var customerController = require('../../controllers/customer.controllers');

router.get('/',customerController.getCustomers);
router.post('/',customerController.createCustomer);
router.put('/:id',customerController.updateCustomer);
router.get('/:nama',customerController.getCustomer);
router.get('/:id/id',customerController.getCustomerbyId);
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;