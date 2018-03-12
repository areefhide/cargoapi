var express = require('express');
var router = express.Router();

var kotaController = require('../../controllers/kota.controllers');
router.get('/', kotaController.getKotas);
router.post('/',kotaController.createKota);

module.exports = router;