var User = require('../models/User');
_this = this;

exports.findbyUsername = async function (params) {
    try {
        var user = await User.findOne({username: params.username, isActive: true});
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

exports.changePassword = async function(params){
    var id = params.id;
    var password = params.password;
    try {
        var users = await User.findById(id);
        users.password = password;
        var user = await users.save();
        return user;
    } catch (error) {
        throw Error('Error while update User');
    }
};
exports.enabledisable = async function(params){
    var id= params;
    try {
        var users = await User.findById(id);
        users.isActive = !users.isActive;
        var user = await users.save();
        return user;
    } catch (error) {
        throw Error('Error while update User');
    }
};