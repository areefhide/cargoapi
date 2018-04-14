var Moda = require('../models/Moda');

_this = this;

exports.createModa = async function (params) {
    var newmoda = new Moda({
        nama: params.nama,
    });
    try {
        var saved = await newmoda.save();
        return saved;
    } catch (error) {
        throw error;
    }
};