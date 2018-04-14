 var Perusahaan = require('../models/Perusahaan');
 _this = this;

 exports.createPerusahaan = async function (params) {
   var newCompany = new Perusahaan({
        nama: params.nama,
        logo: params.logo,
   });
   try {
       var savedCompany = await newCompany.save();
       return savedCompany;
   } catch (error) {
    throw Error('Error while saving Perusahaan');
   }  
 };

 exports.getPerusahaans = async function (query, page, limit) {
    var options = {
        page,
        limit
    };
    try {
        var persh = await Perusahaan.paginate(query,options);
        return persh;
    } catch (error) {
        throw Error('Error while Paginating Perusahaan');
    }
 };