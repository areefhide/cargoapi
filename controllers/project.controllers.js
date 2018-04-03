var projectservice = require('../service/project.service');

_this = this;

exports.createProject = async function (req,res,next) {
    var project = req.body;
    try {
        var savedproject = await projectservice.createProject(project);
        return res.status(200).json({status: 200, data: savedproject, message: 'Successfully create Project'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.getProjects = async function (req,res,next) {
    var page = req.query.page ? parseInt(req.query.page) : 1
    var limit = req.query.limit ? parseInt(req.query.limit) : 10;
    try {
        var projects = await projectservice.getProjects({},page,limit);
        return res.status(200).json({status: 200, data: projects, message: 'Successfully get Projects'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.getValidProjects = async function(req,res,next){
    var curdate = Date.now();
    var page = req.query.page ? parseInt(req.query.page) : 1
    var limit = req.query.limit ? parseInt(req.query.limit) : 10;
    try {
        var projects = await projectservice.getProjects({mulai:{$lte: curdate},berakhir:{$gte: curdate}},page,limit);
        return res.status(200).json({status: 200, data: projects, message: 'Successfully get Projects'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}