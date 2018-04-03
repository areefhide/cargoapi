import { SchemaTypes, Schema } from 'mongoose';

var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var PaketSchema = new mongoose.Schema({
    company: String,
    pengirim:{type: Schema.Types.ObjectId, ref: 'Customer'},
    asal: String,
    agen: String,
    penerima: {type: Schema.Types.ObjectId, ref: 'Customer'},
    tujuan: String,
    tanggal: { type: Date, default: Date.now },
    biayakirim: Number,
    biayatambahan: Number,
    projectId: {type: Schema.Types.ObjectId, ref: 'Project'},
    status: String,
    islunas: Boolean,
});
 PaketSchema.plugin(mongoosePaginate);
 const Paket = mongoose.model('Paket',PaketSchema);

 module.exports = Paket;