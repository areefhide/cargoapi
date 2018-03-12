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
        alamat: customer.alamat,
        provinsi: customer.provinsi,
        telepon: customer.telepon
    });
    try {
        var savedKota = await newCustomer.save();
        return savedKota;
    } catch (e) {
        throw Error("Error while Creating Kota");
    }
};

exports.deleteCustomer = async function(id){
    try {
        var deleted = await Customer.remove({_id:id});
        if(deleted.result.n === 0){
            throw Error("Customer Could not be deleted");
        }
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the Customer")
    }
};