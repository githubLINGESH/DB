    const mongoose = require('mongoose');

    const labourSchema = new mongoose.Schema({
    laborName: String,
    duty: String,
    gender: String,
    attendance: String,
    dates: Number,
    wages: Number,
    shift: Number
    });

    const Labour = mongoose.model('Labour', labourSchema);

    module.exports = Labour;
