var express = require('express');
var router = express.Router();

var paketcontrollers = require('../../controllers/paket.controllers');

router.get('/',paketcontrollers.getPakets);
router.get('/:lunas',paketcontrollers.getPaketsByStatus);
router.post('/',paketcontrollers.createPaket);
router.get('/:id/id',paketcontrollers.getPaket);
router.get('/:id/detail',paketcontrollers.getPaketDetails);
router.delete('/:id',paketcontrollers.deletePaket);
router.put('/:id/status',paketcontrollers.updatePaketStatus);

module.exports = router;