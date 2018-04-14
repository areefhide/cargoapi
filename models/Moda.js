var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ModaSchema = new Schema({
    nama: String,
    description: String,
});

ModaSchema.plugin(mongoosePaginate);

const Moda = mongoose.model('Moda', ModaSchema);

module.exports = Moda;