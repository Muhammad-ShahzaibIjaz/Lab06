const Invoice = require('../models/invoiceModel');

const createInvoice = async (req, res) => {
    try {
        const invoice = new Invoice(req.body);
        await invoice.save();
        res.status(201).send(invoice);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    createInvoice
};
