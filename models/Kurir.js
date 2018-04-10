var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var KurirSchema = new Schema({
    nama: String,
    MitraId: { type: Schema.Types.ObjectId, ref: 'Mitra'},
    userId: { type: Schema.Types.ObjectId, ref: 'User'},
    isActive:{type: Boolean, default: true},
});

KurirSchema.plugin(mongoosePaginate);

const Kurir = mongoose.model('Kurir', KurirSchema);

module.exports = Kurir;