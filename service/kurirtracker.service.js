var KurirTracker = require('../models/KurirTracker');

_this = this;

exports.createTracker = async function (params) {
    var newtracker = new KurirTracker({
        KurirId : params.KurirId,
        coordinate: params.coordinate
    });
};

exports.getTracker = async function (query,page,limit) {
    var options = {
        page,
        limit
    };
    try {
        var trackers = await KurirTracker.paginate(query,options);
        return trackers;
    } catch (e) {
        throw Error('Error while Paginating Kurir Tracker');
    }
};