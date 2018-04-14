var Moda = require('../models/Moda');

_this = this;

exports.createModa = async function (params) {
    var newmoda = new Moda({
        nama: params.nama,
        description: params.description,
    });
    try {
        var saved = await newmoda.save();
        return saved;
    } catch (error) {
        throw error;
    }
};

exports.getModas = async function (query, page,limit){
    var options = {
        page,
        limit
    };  
    try
    {
        var modas = await Moda.paginate(query,options);
        return modas;
    } catch(error){
        throw error;
    }
};

exports.getModa = async function(id){
    try {
        var moda = await Moda.findById(id);
        return moda;
    } catch (error) {
        throw error;
    }
};

exports.updateModa = async function(id,params){
    try {
        var updated = await Moda.findByIdAndUpdate(id,params);
        return updated;
    } catch (error) {
        throw error;
    }
};

exports.delete = async function(id){
    try {
        var deleted = await Moda.findByIdAndRemove(id);
        return deleted;
    } catch (err