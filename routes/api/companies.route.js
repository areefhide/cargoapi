var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

var companyController = require('../../controllers/perusahaan.controllers');

router.get('/',companyController.getCompanies);
router.post('/',upload.single("logo"),companyController.createCompany);

module.exports = router;