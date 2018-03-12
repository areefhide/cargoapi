import { Schema } from 'mongoose';

var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var PaketDetailSchema = new mongoose.Schema({
    isi: String,
    jumlah: Number,
    berat: Number,
    paket:{ type: Schema.Types.ObjectId, ref: 'Paket'},
});

PaketDetailSchema.plugin(mongoosePaginate);
const PaketDetail = mongoose.model('PaketDetail', PaketDetailSchema);

module.exports = PaketDetail;