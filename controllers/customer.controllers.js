var customerservice = require('../service/customer.service');

_this = this;

exports.getCustomers = async function (req, res, next) {
    var page = req.query.page ? parseInt(req.query.page) : 1
    var limit = req.query.limit ? parseInt(req.query.limit) : 10;
    try {
        var customers = await customerservice.getCustomers({},page,limit);
        return res.status(200).json({status: 200, data: customers, message: 'Successfully get Customers'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.getCustomer = async function (req, res, next) {
    var nama = req.params.nama;
    try {
        var customer = await customerservice.getCustomer(nama);
        return res.status(200).json({status: 200, data: customer, message: 'Successfully get Customer'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.createCustomer = async function (req, res, next) {
  var customer = req.body;
  try {
      var newcustomer = await customerservice.createCustomer(customer);
      return res.status(200).json({status: 200, data: newcustomer, message: 'Successfully create Customer'});
  } catch (e) {
    return res.status(400).json({status: 400, message: e.message});
  }  
};

exports.deleteCustomer = async function (req, res, next) {
    var id = req.params.id;  
    try {
        var deletedCustomer = await customerservice.deleteCustomer(id);
        return res.status(204).json({status:204, message: "Succesfully delete Customer"});
    } catch (e) {
        
    }
};