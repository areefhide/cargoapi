var Paket = require('../models/Paket');

_this = this;

exports.createPaket = async function (params) {
    var newPaket = new Paket({
        company: params.company,
        pengirim: params.pengirim,
        asal: params.asal,
        agen: params.agen,
        penerima: params.penerima,
        tujuan: params.tujuan,
        tanggal: new Date(params.tanggal),
        biayakirim: params.biayakirim,
        biayatambahan: params.biayatambahan,
        projectId: params.projectId,
        status: 'Diterima Cargo',
        islunas: params.islunas,
    });

    try {
        var savedPaket = await newPaket.save();
        return savedPaket;
    } catch (error) {
        throw Error('Error while saving Paket Header');
    }
};

exports.getPakets = async function (query, page, limit) {
    var options = {
        page,
        limit,
        populate:[{path:'pengirim',select: 'nama',model: 'Customer'},
                    {path:'penerima',select: 'nama',model: 'Customer'} ]
    };  
    try {
        // var paket = await Paket.find({})
        //     .populate({path:'pengirim',select: 'nama',model: 'Customer'});
            // console.log(paket);
        var pakets = await Paket.paginate(query,options);
        return pakets;
    } catch (error) {
        throw Error('Error while paginate Paket Header');
    }
};

exports.getPaketById = async function (id) {
    try {
        var paket = await Paket.findOne({_id:id})
        .populate({path:'pengirim',model: 'Customer'})
        .populate({path:'penerima',model: 'Customer'})
        .populate({path: 'projectId',model: 'Project'});
        return paket;
    } catch (error) {
        throw Error('Error while get Paket');
    }  
};

exports.delete = async function (id){
    try {
        var deleted = await Paket.findByIdAndRemove(id);
        return deleted;
    } catch (e) {
        throw e;
    }
}