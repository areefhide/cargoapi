var mitraservice = require('../service/mitra.service');

_this = this;

exports.getMitras = async function (req, res, next) {
    var page = req.query.page ? parseInt(req.query.page) : 1
    var limit = req.query.limit ? parseInt(req.query.limit) : 10;
    try {
        var mitras = await mitraservice.getMitras({},page,limit);
        return res.status(200).json({status: 200, data: mitras, message: 'Successfully get Mitras'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.getMitra = async function (req, res, next) {
    var nama = req.params.nama;
    try {
        var mitra = await mitraservice.getMitra(nama);
        return res.status(200).json({status: 200, data: mitra, message: 'Successfully get Mitra'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.createMitra = async function (req, res, next) {
    var mitra = req.body;
    try {
        var newmitra = await mitraservice.createMitra(mitra);
        return res.status(200).json({status: 200, data: newmitra, message: 'Successfully create Mitra'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.deleteMitra = async function (req, res, next) {
    var id = req.params.id;
    try {
        var deleted = await mitraservice.deletMitra(id);
        return res.status(200).json({status: 200, data: deleted, message: 'Successfully delete Mitra'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.getMitra = async function(req,res,next){
    var id = req.params.id;
    try {
        var mitra = await mitraservice.getMitra(id);
        return res.status(200).json({status: 200, data: mitra, message: 'Successfully get Mitra'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};