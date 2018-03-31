var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var MitraSchema = new Schema({
    nama: String,
    pic: String,
    userid: {type: Schema.Types.ObjectId, ref: 'User'},
    wilayah:[String],
});
MitraSchema.plugin(mongoosePaginate);

const Mitra = mongoose.model('Mitra',MitraSchema);

module.exports = Mitra;