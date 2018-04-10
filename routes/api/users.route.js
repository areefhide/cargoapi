var express = require('express');
var router = express.Router();

var usercontrollers = require('../../controllers/users.controllers');

router.get('/',usercontrollers.getUsers);
router.get('/:id',usercontrollers.getUserbyId);
router.put('/:id',usercontrollers.changePassword);
router.put('/:id/toggle',usercontrollers.enabledisableUser);
router.post('/',usercontrollers.createAdmin);

module.exports = router;