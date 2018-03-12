var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
    nama: String,
    alamat: String,
    provinsi: String,
    telepon: String,
});

CustomerSchema.plugin(mongoosePaginate);

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;