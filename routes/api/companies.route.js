var express = require('express');
var router = express.Router();
var multer  = require('multer');
var path = require('path')
var storage = multer.diskStorage({
    destination: function(req,file,callback){
        callback(null, 'public/images/')
    },
    filename: function(req, file, callback){
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
var upload = multer({ storage: storage });

var companyController = require('../../controllers/perusahaan.controllers');

router.get('/',companyController.getCompanies);
router.post('/',upload.single("logo"),companyController.createCompany);

module.exports = router;