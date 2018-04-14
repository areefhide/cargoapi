var PerusahaanService = require('../service/perusahaan.service');
_this = this;

exports.createCompany = async function (req,res,next) {
    var persh = req.body;
    var file = req.file;
    try {
        console.log(file);
        var savedPersh = await PerusahaanService.createPerusahaan(persh);
        return res.status(200).json({status: 200, data: savedPersh, message: 'Successfully create Project'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.getCompanies = async function (req,res,next) {
    console.log(req.headers);
    var page = req.query.page ? parseInt(req.query.page) : 1
    var limit = req.query.limit ? parseInt(req.query.limit) : 10;
    try {
        var companies = await PerusahaanService.getPerusahaans({},page,limit);
        return res.status(200).json({status: 200, data: companies, message: 'Successfully get Projects'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};