var PaketDetail = require('../models/PaketDetail');

_this = this;

exports.createPaketDetail = async function (params) {
    var newPaketDetail = new PaketDetail({
        isi: params.isi,
        jumlah: params.jumlah,
        berat: params.berat,
        paketId: params.paketId
    });  
    try {
        var savedDetail = await newPaketDetail.save();
        return savedDetail;
    } catch (error) {
        throw Error('Error while saving Paket Detail');
    }
};

exports.getPaketDetails = async function (query, page, limit) {
    var options = {
        page,
        limit
    };  
    try {
        var paketDetails = await PaketDetail.paginate(query, options);
        return paketDetails;
    } catch (error) {
        throw Error('Error while paginate Paket Details');
    }
};

