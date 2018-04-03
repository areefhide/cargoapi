var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var PaketHistorySchema = new Schema({
    status: { type: String, required: true},
    paketId: {type: Schema.Types.ObjectId, ref: 'Paket'},
    tanggal: {type: Date, default: Date.now},
    attachment: {type: String},
    pic: String,
});

PaketHistorySchema.plugin(mongoosePaginate);

const PaketHistory = mongoose.model('PaketHistory', PaketHistorySchema);

module.exports = PaketHistory;