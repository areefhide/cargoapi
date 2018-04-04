var User = require('../models/User');
_this = this;

exports.findbyUsername = async function (params) {
    try {
        var user = await User.findOne({username: params.username});
        return user;
    } catch (er) {
        throw Error(er);
    }
};

exports.findbyId = async function(id){
    try {
        var user = await User.findOne({_id: id});
        return user;
    } catch (er) {
        throw Error(er);
    }
};


exports.create = async function(params){
    var newUser = new User({
        username: params.username,
        password: params.password,
        role: params.role
    });
    try {
        var createdUser = await newUser.save();
        return createdUser;
    } catch (error) {
        throw Error("Error while Creating User")
    }
};

exports.getUsers = async function(query, page, limit){
    var options = {
        page,
        limit
    }; 
    try {
        var users = await User.paginate(query,options);
        return users;
    } catch (error) {
        throw Error('Error while Paginating Users');
    }
};
