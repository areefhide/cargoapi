var express = require('express');
var router = express.Router();
var passport = require('passport');

var kota = require('./api/kotas.route');
var customer = require('./api/customers.route');
var login = require('./api/login.route');
var project = require('./api/projects.route');
var company = require('./api/companies.route');
var mitra = require('./api/mitras.route');
var paket = require('./api/pakets.route');
var kurir = require('./api/kurirs.route');

// router.use('/kota',passport.authenticate('jwt',{session:false}),kota);
router.use('/kota',kota);
router.use('/login',login);
router.use('/customer',customer);
router.use('/project',project);
router.use('/company',company);
router.use('/mitra',mitra);
router.use('/paket',paket);
router.use('/kurir',kurir);


module.exports = router;