var passport = require('passport');
require('../config/passport')(passport);
var config = require('../config/secretkey');
var jwt = require('jsonwebtoken');
var loginservice = require('../service/user.service');
_this = this;

exports.getLogin = async function (req, res, next) {
    if (!req.body.username || !req.body.password){
        res.json({success: false, msg: 'Please pass username and password.'});
    } else {
        var user = await loginservice.findbyUsername(req.body);
        if(!user){
            res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
        }else{
            user.comparePassword(req.body.password,function(err,isMatch){
                if(isMatch && !err){                    
                    var token = jwt.sign(user.toObject(), config.secret);
                    res.json({success: true, token: 'JWT ' + token});
                }else{
                    res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
                }
            });
        }
    }
    
};

exports.signUp = async function(req,res,next){
    var user = req.body;
    try {
        var createdUser = loginservice.create(user);
        return res.status(200).json({status: 200, data: createdUser, message: 'Successfully create User'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

