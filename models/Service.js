const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    serviceType: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
});

module.exports = mongoose.model('Service', serviceSchema);