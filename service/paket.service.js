var Paket = require('../models/Paket');

_this = this;

exports.createPaket = async function (params) {
    var newPaket = new Paket({
        company: params.company,
        pengirim: params.pengirim,
        asal: params.asal,
        agen: params.agen,
        penerima: params.penerima,
        tujuan: params.tujuan,
        tanggal: new Date(params.tanggal),
        biayakirim: params.biayakirim,
        biayatambahan: params.biayatambahan,
        projectId: params.projectId,
        status: 'Diterima Cargo'
    });

    try {
        var savedPaket = await newPaket.save();
        return savedPaket;
    } catch (error) {
        throw Error('Error while saving Paket Header');
    }
};

exports.getPakets = async function (query, page, limit) {
    var options = {
        page,
        limit
    };  
    try {
        var pakets = await Paket.paginate(query,options);
        return pakets;
    } catch (error) {
        throw Error('Error while paginate Paket Header');
    }
};

exports.getPaketById = async function (id) {
    try {
        var paket = await Paket.findOne({_id:id});
        return paket;
    } catch (error) {
        throw Error('Error while get Paket');
    }  
};