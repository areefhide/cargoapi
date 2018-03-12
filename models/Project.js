var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    nama: String,
    perusahaan: String,
    mulai: {type: Date, default: Date.now},
    berakhir: {type: Date, default: Date.now},
    nilai: Number,
    sisa: Number,
});

ProjectSchema.plugin(mongoosePaginate);

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;