var Kurir = require('../models/Kurir');
var User = require('../models/User');
var Mitra = require('../models/Mitra');

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
        username: params.username,
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

exports.getKurirByUsername = async function (params) {  
    var nama = params.username;
    try {
      
        var user = await User.findOne({username: nama});
        
        Kurir.find({userId: user._id}).exec(function(err,kurir){
            if (err) return handleError(err);
            console.log('The stories are an array: ', kurir);
        });
        var kurir = await Kurir.findOne({userId: user._id}).populate({path:'userId',model: 'User'});       
        
        return kurir;
    } catch (error) {
        throw error;
    }
};

exports.getKurirsByMitraId = async function (params) {
    var mitraId = params.MitraId;
    try {
        var mitra = await Mitra.findById(mitraId);
        console.log(mitra);
        var kurirs = await Kurir.find({MitraId: mitra._id});
        return kurirs;
    } catch (error) {
        throw error;
    }
};