var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Paket = require('mongoose').model('Paket');
var Schema = mongoose.Schema;

var PaketDetailSchema = new mongoose.Schema({
    isi: String,
    jumlah: Number,
    berat: Number,
    paketstring: String,
    paketId:{ type: Schema.Types.ObjectId, ref: 'Paket'},
});
PaketDetailSchema.statics.findbyPaketId = function(paket,callback){
    var query = this.findOne();
    Paket.findOne({_id: paket._id},function (error,callback) {
        query.where({paketId:paket._id}).exec(callback);
    });    
    return query;
};
PaketDetailSchema.plugin(mongoosePaginate);
const PaketDetail = mongoose.model('PaketDetail', PaketDetailSchema);

module.exports = PaketDetail;