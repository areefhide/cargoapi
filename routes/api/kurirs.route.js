var express = require('express');
var router = express.Router();

var kurirController = require('../../controllers/kurir.controllers');

router.get('/',kurirController.getKurirs);
router.post('/',kurirController.createKurir);
router.get('/:nama',kurirController.getKurir);
router.get('/:username/user',kurirController.getKurirbyUser);
router.get('/:MitraId/mitra',kurirController.getKurirsbyMitraId);

module.exports = router;