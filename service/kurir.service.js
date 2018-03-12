var Kurir = require('../models/Kurir');

_this = this;

exports.getKurirs = async function (query, page, limit) {
    var options = {
        page,
        limit
    };  

    try {
        var kurirs = await Kurir.paginate(query,options);
        return kurirs;
    } catch (error) {
        throw Error('Error while Paginating Kurirs');
    }
};

exports.createKurir = async function (params) {
    var newKurir = new Kurir({
        nama : params.nama,
        MitraId : params.MitraId,
        userId : params.userId
    });
    try {
        var savedKurir = await newKurir.save();
        return savedKurir;
    } catch (error) {
        throw Error('Error while save Kurir');
    }
};

exports.getKurir = async function (params) {
    var nama = params.nama;
    try {
        var kurir = await Kurir.findOne({nama: nama});
        return kurir;
    } catch (error) {
        throw Error('error while get Kurir');
    }
};