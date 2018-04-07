var express = require('express');
var router = express.Router();

var paketcontrollers = require('../../controllers/paket.controllers');

router.get('/',paketcontrollers.getPakets);
router.get('/:lunas',paketcontrollers.getPaketsByStatus);
router.post('/',paketcontrollers.createPaket);
router.get('/:id/id',paketcontrollers.getPaket);

module.exports = router;