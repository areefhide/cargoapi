import { doesNotThrow } from 'assert';

var Project = require('../models/Project');
_this = this;

exports.getProjects = async function (query, page, limit) {
    var options = {
        page,
        limit
    };  
    try {
        var projects = await Project.paginate(query, options);
        return projects;
    } catch (error) {
        throw Error('Error while Paginating Projects');
    }
};

exports.getProject = async function (nama) {
  try {
      var project = await Project.findOne({nama: nama});
      return project;
  } catch (error) {
    throw Error('error while get Project');
  }  
};

exports.createProject = async function (params) {
   var newProject = new Project({
       nama: params.nama,
       perusahaan: params.perusahaan,
       mulai: new Date(params.mulai),
       berakhir: new Date(params.berakhir),
       nilai : params.nilai,
       sisa: params.sisa
   }); 
   try {
       var savedProject = await doesNotThrow.save();
       return savedProject;
   } catch (error) {
       throw Error('Error while save Project');
   }
};

exports.updateProjectVal = async function (params) {
    var nilai = int.parse(params.nilai);
    try {
        var project = await Project.findByIdAndUpdate(params.id,{$inc: {sisa: -nilai}});
        return project;
    } catch (error) {
        throw Error('Error while update Project');
    }
};