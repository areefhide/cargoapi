var paketservice = require('../service/paket.service');
var paketdetailservice = require('../service/paketdetail.service');
var pakethistoryservice = require('../service/pakethistory.service');

_this = this;

exports.createPaket = async function (req, res, next) {
    var paket = req.body;
    try {
        var header = await paketservice.createPaket(paket);
        paket.details.forEach(element => {
            var paketdetail = {isi: element.isi, jumlah: element.jumlah, berat: element.berat, paketId: header._id };
            var saveddetail = await paketdetailservice.createPaketDetail(paketdetail);
        });
        var history = new {status: 'Diterima Cargo', paketId: header._id};
        var updatedHistory = await pakethistoryservice.createHistory(history);
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
        var paketdetail = await paketdetailservice.getPaketDetails({PaketId: id},100,100);
        paket.paketdetail = paketdetail;
        return res.status(200).json({status: 200, data: paket, message: 'Successfully get Pakets'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};