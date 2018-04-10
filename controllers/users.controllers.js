var loginservice = require('../service/user.service');
_this = this;

exports.getUsers = async function (req,res,next) {
    var page = req.query.page ? parseInt(req.query.page) : 1
    var limit = req.query.limit ? parseInt(req.query.limit) : 10;
    try {
        var users = await loginservice.getUsers({},page,limit);
        return res.status(200).json({status: 200, data: users, message: 'Successfully get users'});
    } catch (error) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.getUserbyId = async function (req,res,next){
    var id = req.params.id;
    try {
        var user = await loginservice.findbyId(id);
        return res.status(200).json({status: 200, data: user, message: 'Successfully get users'});
    } catch (error) {
        return res.status(400).json({status: 400, message: e.message});
    }
};


exports.changePassword = async function(req,res,next){
    var user = req.params.id;
    try {
        var user = await loginservice.changePassword(user);
        return res.status(200).json({status: 200, data: user, message: 'Successfully get users'});
    } catch (error) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.createAdmin = async function(req,res,next){
    var user = req.body;
    try {
        var createdUser = await loginservice.create(user);
        return res.status(200).json({status: 200, data: createdUser, message: 'Successfully create User'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

