var Customer = require('../models/Customer');

_this = this;

exports.getCustomers = async function(query, page, limit){
    var options = {
        page,
        limit
    };  
  
    try {
        var Customers = await Customer.paginate(query,options);
        return Customers;
    } catch (e) {
      throw Error('Error while Paginating Customers');
    }
};

exports.getCustomer = async function(nama){
    try {
        var customer = await Customer.findOne({nama : nama});
        return customer;
    } catch (err) {
        throw Error('error while get Customer');
    }
};

exports.createCustomer = async function(customer){
    var newCustomer = new Customer({
        nama: customer.nama,
        perusahaan: customer.perusahaan,
        alamat: customer.alamat,
        telepon: customer.telepon
    });
    try {
        var newCustomer = await newCustomer.save();
        return newCustomer;
    } catch (e) {
        throw Error("Error while Creating Kota");
    }
};

exports.deleteCustomer = async function(id){
    try {
        var deleted = await Customer.findOneAndRemove({_id:id});        
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the Customer")
    }
};