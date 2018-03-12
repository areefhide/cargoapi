var Kota = require('../models/Kota');

_this = this;

exports.getKotas = async function (query, page, limit) {
  var options = {
      page,
      limit
  };  

  try {
      var Kotas = await Kota.paginate(query,options);
      return Kotas;
  } catch (e) {
    throw Error('Error while Paginating Kotas');
  }
};

exports.createKota = async function (kota) {
    var newKota = new Kota({
        nama : kota.nama
    });
    try {
        var savedKota = await newKota.save();
        return savedKota;
    } catch (e) {
        throw Error("Error while Creating Kota")
    }
};

exports.deleteKota = async function(id){
    try {
        var deleted = await Kota.remove({_id:id});
        if(deleted.result.n === 0){
            throw Error("Kota Could not be deleted");
        }
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the Kota")
    }
};