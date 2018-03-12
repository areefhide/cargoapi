var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var PerusahaanSchema = new Schema({
    nama: {type: String, unique: true, required: true}
});
PerusahaanSchema.plugin(mongoosePaginate);

const Perusahaan = mongoose.model('Perusahaan', PerusahaanSchema);

module.exports = Perusahaan;