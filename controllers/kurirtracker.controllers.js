var trackerservice = require('../service/kurirtracker.service');
var kurirservice = require('../service/kurir.service');

_this = this;

exports.createTracker = async function (req,res,next) {
    var coordinate = req.body;
    try {
        var kurir = await kurirservice.getKurirByUserId(req.user._id);
        var newCoordinate = new {
            kurirId: kurir._id,
            coordinate: coordinate
        };
        var savedtracker = await trackerservice.createTracker(newCoordinate);
        return res.status(200).json({status: 200, data: savedtracker, message: 'Successfully create tracking for tracking'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.getTrackerByKurir = async function (req,res,next) {
    var kurirId = req.kurirId;
    var page = req.query.page ? parseInt(req.query.page) : 1
    var limit = req.query.limit ? parseInt(req.query.limit) : 10;
    try {
        var trackers = await trackerservice.getTracker({kurirId: kurirId},page,limit);
        return res.status(200).json({status: 200, data: trackers, message: 'Successfully get trackers'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};