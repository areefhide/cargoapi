var kurirservice = require('../service/kurir.service');

_this = this;

exports.getKurirs = async function (req, res, next) {
    var page = req.query.page ? parseInt(req.query.page) : 1
    var limit = req.query.limit ? parseInt(req.query.limit) : 10;
    try {
        var kurirs = await kurirservice.getKurirs({},page,limit);
        console.log(req.headers);
        return res.status(200).json({status: 200, data: kurirs, message: 'Successfully get Kurir'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};
exports.createKurir = async function (req, res, next) {
    var kurir = req.body;
    try {
        var newkurir = await kurirservice.createKurir(kurir);
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
exports.getKurirbyUser = async function (req, res, next) {
    var params = req.params;
    try {
        var kurir = await kurirservice.getKurirByUsername(params);
        return res.status(200).json({status: 200, data: kurir, message: 'Successfully get kurir'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.getKurirsbyMitraId = async function(req,res,next){
    var params = req.params;
    try {
        var kurirs = await kurirservice.getKurirsByMitraId(params);
        return res.status(200).json({status: 200, data: kurirs, message: 'Successfully get kurir'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};
exports.deleteKurirById = async function(req,res,next){
    var id = req.params.id;
    try {
        var deleted = await kurirservice.deleteKurir(id);
        return res.status(204).json({status:204, message: "Succesfully delete Customer"});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.getKurirById = async function(req,res,next){
    var id = req.params.id;
    try {
        var kurir = await kurirservice.getKurirById(id);
        return res.status(200).json({status: 200, data: kurir, message: 'Successfully get kurir'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.updateKurir = async function(req,res,next){
    var id = req.params.id;
    var kurir = req.body;
    try {
        var kurir = await kurirservice.updateKurir(id,kurir);
        return res.status(200).json({status: 200, data: kurir, message: 'Successfully update kurir'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

