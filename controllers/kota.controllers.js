var kotaService = require('../service/kota.service');
_this = this;

exports.getKotas = async function (req, res, next) {
    var page = req.query.page ? parseInt(req.query.page) : 1
    var limit = req.query.limit ? parseInt(req.query.limit) : 10;
    try {
        console.log(limit);
        var kotas = await kotaService.getKotas({}, page, limit);
        return res.status(200).json({status: 200, data: kotas, message: 'Successfully get Kota'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.createKota = async function (req, res, next) {
    var kota = {
        nama: req.body.nama
    };
    try {
        var createdKota = await kotaService.createKota(kota);
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};