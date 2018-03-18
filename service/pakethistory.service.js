var PaketHistory = require('../models/PaketHistory');

_this = this;

exports.createHistory = async function (params) {
    var newhistory = new PaketHistory({
        status: params.status,
        paketId: params.paketId,
        tanggal: new Date(params.tanggal),
        attachment: params.attachment,
        pic: params.pic
    });

    try {
        var savedHistory = newhistory.save();
        return savedHistory;
    } catch (error) {
        throw Error('Error while saving Paket History');
    }
};

exports.getHistories = async function (query, page, limit) {
    var options = {
        page,
        limit
    }; 
    try {
        var histories = await PaketHistory.paginate(query,options);
        return histories;
    } catch (error) {
        throw Error('Error while paginate Paket Histories');
    }
};

exports.deletetHistory = async function (params) {
    try {
        var deleted = await PaketHistory.findByIdAndRemove(params.Id);
        var history = await PaketHistory.findOne({paketId: params.paketId},{},{sort: {'tanggal': -1}});
        return history;
    } catch (error) {
        throw Error('Error while get Paket History');
    }
};