const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
Vendor_name: String,
Name_of_Material: String,
Required_quantity: Number,
Supplied_quantity: Number,
Unit_prize: Number,
prize:Number
});

const e_products = mongoose.model('e_products', ProductSchema);

module.exports = e_products;
