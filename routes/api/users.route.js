var express = require('express');
var router = express.Router();

var usercontrollers = require('../../controllers/users.controllers');

router.get('/',usercontrollers.getUsers);
router.get('/:id',usercontrollers.getUserbyId);
router.put('/:id',usercontrollers.changePassword);

module.exports = router;