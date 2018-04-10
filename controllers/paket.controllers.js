var paketservice = require('../service/paket.service');
var paketdetailservice = require('../service/paketdetail.service');
var pakethistoryservice = require('../service/pakethistory.service');
var mongoose = require('mongoose');


_this = this;

exports.createPaket = async function (req, res, next) {
    var paket = req.body;
    try {
        var header = await paketservice.createPaket(paket);
        var details = paket.details;
        var paketId = header._id;
        for (let index = 0; index < details.length; index++) {
            console.log(details[index]);
            var data = {
                isi: details[index].isi,
                jumlah: details[index].jumlah,
                berat: details[index].berat,
                paketstring: paketId.toString(),
                paketId: paketId
            };
            var savedDetail = await paketdetailservice.createPaketDetail(data);    
        }       
        console.log(details);
        var history = {status: 'Diterima Cargo', tanggal:header.tanggal};        
        
        var updatedHistory = await pakethistoryservice.createHistory(history);
        header.history.push(updatedHistory._id);
        header.save();
        console.log(updatedHistory);
        return res.status(200).json({status: 200, data: header, message: 'Successfully create Paket'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.getPakets = async function (req, res, next) {
    var page = req.query.page ? parseInt(req.query.page) : 1
    var limit = req.query.limit ? parseInt(req.query.limit) : 10;
    try {
        var pakets = await paketservice.getPakets({},page,limit);
        return res.status(200).json({status: 200, data: pakets, message: 'Successfully get Pakets'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.getPaket = async function(req, res, next){
    var id = req.params.id;
    try {
        var paket = await paketservice.getPaketById(id);
        console.log(id);
        // var paketdetail = await paketdetailservice.getPaketDetails({ paket: paket},100,100);
        // paket.paketdetail = paketdetail;
        // console.log(paketdetail);
        return res.status(200).json({status: 200, data: paket, message: 'Successfully get Pakets'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.getPaketDetails = async function (req, res, next) {
    var id = req.params.id;
    try {        
        var paket = await paketservice.getPaketById(id);
        var details = await paketdetailservice.getPaketDetailByPaketId({paketstring: id});
        console.log(details);
        // var paketdetail = await paketdetailservice.getPaketDetails({ paket: paket},100,100);        
        // console.log(paketdetail);
        return res.status(200).json({status: 200, data: details, message: 'Successfully get Paket Detail'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.getPaketsByStatus = async function(req,res,next){
    var status = req.params.status;
    var page = req.query.page ? parseInt(req.query.page) : 1
    var limit = req.query.limit ? parseInt(req.query.limit) : 10;
    try {
        var pakets = await paketservice.getPakets({islunas: status},page,limit);
        return res.status(200).json({status: 200, data: pakets, message: 'Successfully get Pakets'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.deletePaket = async function(req,res,next){
    var id = req.params.id;
    try {
        var deleted = await paketservice.delete(id);
        return res.status(200).json({status: 200, data: deleted, message: 'Successfully delete Paket'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.updatePaketStatus = async function(req,res,next){
    var status = req.body.status;
    var id = req.params.id;
    try {
        var history = {status: status, tanggal:Date.now()};
        var updatedHistory = await pakethistoryservice.createHistory(history);
        var paket = await paketservice.updatePaketHistory(id,updatedHistory);
        return res.status(200).json({status: 200, data: paket, message: 'Successfully delete Paket'});
    } catch (error) {
        return res.status(400).json({status: 400, message: e.message});
    }
}