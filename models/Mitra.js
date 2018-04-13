var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var MitraSchema = new Schema({
    nama: String,
    pic: String,
    username: String,
    wilayah:[String],
    isActive: {type: Boolean, default:true},
    Kurir: [{type: Schema.Types.ObjectId, ref: 'Kurir'}],
});
MitraSchema.plugin(mongoosePaginate);

const Mitra = mongoose.model('Mitra',MitraSchema);

module.exports = Mitra;