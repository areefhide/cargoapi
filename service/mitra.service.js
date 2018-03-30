var Mitra = require('../models/Mitra');

_this = this;

exports.getMitras = async function (query, page, limit) {
    var options = {
        page,
        limit
    };  
    try {
        var mitras = await Mitra.paginate(query,options);
        return mitras;
    } catch (error) {
        throw Error('Error while Paginating Mitras');
    }
};

exports.createMitra = async function(params){
    var wilayah = [];
    params.wilayah.forEach(element => {
        wilayah.push({ kota: element});
    });
    var newMitra = new Mitra({
        nama: params.nama,
        pic: params.pic,
        userid: params.userid,
        wilayah: wilayah
    });
    try {
        var savedMitra = await newMitra.save();
        return savedMitra;
    } catch (error) {
        throw Error('Error while save Mitras');
    }
};

exports.getMitrabyName = async function(name){    
    try {
        var mitra = await Mitra.findOne({nama: name});
        return mitra;
    } catch (error) {
        throw Error('error while get Mitra');
    }
};