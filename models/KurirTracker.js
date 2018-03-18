import { Schema, model } from 'mongoose';

var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var KurirTrackerSchema = new Schema({
    kurirId: {type: Schema.Types.ObjectId, ref: 'Kurir'},
    coordinate: {type: [Number], index: '2d'},
    date: {type: Date, default: Date.now},
});

KurirTrackerSchema.plugin(mongoosePaginate);

const KurirTracker = mongoose.model('KurirTracker', KurirTrackerSchema);

module.exports = KurirTracker;