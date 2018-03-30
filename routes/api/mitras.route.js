var express = require('express');
var router = express.Router();

var mitrakontrollers = require('../../controllers/mitra.controllers');

router.get('/',mitrakontrollers.getMitras);
router.post('/',mitrakontrollers.createMitra);
router.get('/:nama',mitrakontrollers.getMitra);

module.exports = router;