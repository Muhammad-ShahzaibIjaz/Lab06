const mongoose = require('mongoose');

const purchaseHistorySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('PurchaseHistory', purchaseHistorySchema);
