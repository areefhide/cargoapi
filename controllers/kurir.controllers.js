var kurirservice = require('../service/kurir.service');

_this = this;

exports.getKurirs = async function (req, res, next) {
    var page = req.query.page ? parseInt(req.query.page) : 1
    var limit = req.query.limit ? parseInt(req.query.limit) : 10;
    try {
        var kurirs = await kurirservice.getKurirs({},page,limit);
        return res.status(200).json({status: 200, data: kurirs, message: 'Successfully get Kurir'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};
exports.createKurir = async function (req, res, next) {
    var kurir = req.body;
    try {
        var newkurir = await kurirservice.createMitra(mitra);
        return res.status(200).json({status: 200, data: newkurir, message: 'Successfully create Kurir'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.getKurir = async function (req, res, next) {
    var params = req.body;
    try {
        var kurir = await kurirservice.getKurir(params);
        return res.status(200).json({status: 200, data: kurir, message: 'Successfully get kurir'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};