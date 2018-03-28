var express = require('express');
var router = express.Router();
var passport = require('passport');

var kota = require('./api/kotas.route');
var customer = require('./api/customers.route');
var login = require('./api/login.route');
var project = require('./api/projects.route');

router.use('/kota',passport.authenticate('jwt',{session:false}),kota);
router.use('/login',login);
router.use('/customer',customer);
router.use('/project',project);


module.exports = router;