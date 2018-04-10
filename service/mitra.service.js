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
        wilayah.push(element);
    });
    var newMitra = new Mitra({
        nama: params.nama,
        pic: params.pic,
        username: params.username,
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

exports.deletMitra = async function(id){
    try {
        var deleted = await Mitra.findOneAndRemove({_id:id});
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the Mitra");
    }
};
exports.getMitrabyId = async function(id){
    try {
        var mitra = await Mitra.findById(id);
        return mitra;
    } catch (e) {
        throw e;
    }
};