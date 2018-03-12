var express = require('express');
var router = express.Router();

var loginController = require('../../controllers/login.controllers');

router.post('/', loginController.getLogin);
router.post('/register',loginController.signUp);

module.exports = router;