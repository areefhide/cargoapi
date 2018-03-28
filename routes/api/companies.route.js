var express = require('express');
var router = express.Router();

var companyController = require('../../controllers/perusahaan.controllers');

router.get('/',companyController.getCompanies);
router.post('/',companyController.createCompany);

module.exports = router;