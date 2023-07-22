    const mongoose = require('mongoose');

    const materialSchema = new mongoose.Schema({
    Vendor_name: String,
    Name_of_Material: String,
    Required_quantity: Number,
    Supplied_quantity: Number,
    Unit_prize: Number,
    Date: Date,
    Current_stock: Number,
    Pay_expenses: Number,
    });

    const S_Material = mongoose.model('S_Material', materialSchema);

    module.exports = S_Material;
