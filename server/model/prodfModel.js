    const mongoose = require('mongoose');

    const prodSchema = new mongoose.Schema({
        Item_code: {
            type: Number,
            required: true,
        },
        Item_name: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        unit: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },

    });

    const e_prod = mongoose.model('e_prod', prodSchema);

    module.exports = e_prod;