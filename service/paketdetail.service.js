var PaketDetail = require('../models/PaketDetail');
var mongoose = require('mongoose');
_this = this;

exports.createPaketDetail = async function (params) {
    var newPaketDetail = new PaketDetail({
        isi: params.isi,
        jumlah: params.jumlah,
        berat: params.berat,
        paketstring:params.paketId,
        paketId: params.paketId
    });  
    console.log(params);
    try {
        var savedDetail = await newPaketDetail.save();
        console.log(savedDetail);
        return savedDetail;
    } catch (error) {
        throw Error('Error while saving Paket Detail');
    }
};

exports.getPaketDetailByPaketId = async function (query) {
   
    try {
        var details = await PaketDetail.find({paketstring: query.paketstring});        
        return details;
    } catch (error) {
        throw error;
    }
};


exports.getPaketDetails = async function (query, page, limit) {
    var options = {
        page,
        limit,
        populate:[
            {path: 'paketId',model:'Paket'}
        ]
    };  
    try {     
        details = [];        
        var detail = await PaketDetail.findbyPaketId(query.paket,function(err,success) {
            if(err){
                console.log(err);
            }else{
                details.push(success);
                // return success;
                // console.log(success);
            }
        });
        console.log(detail);
        console.log(details);
        // var paketDetails = await PaketDetail.paginate(query, options);
        return details;
    } catch (error) {
        throw error;
    }
};


