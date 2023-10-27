const PurchaseHistory = require('../models/purchaseHistoryModel');

const createPurchaseHistory = async (req, res) => {
    try {
        const purchaseHistory = new PurchaseHistory(req.body);
        await purchaseHistory.save();
        res.status(201).send(purchaseHistory);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    createPurchaseHistory
};
