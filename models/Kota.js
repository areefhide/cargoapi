var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var KotaSchema = new Schema({
    nama: String,
});
KotaSchema.plugin(mongoosePaginate);

const Kota = mongoose.model('Kota', KotaSchema);

module.exports = Kota;