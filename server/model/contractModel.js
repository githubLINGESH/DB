const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
  w_name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  w_type: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
});

const contracts = mongoose.model('Contract', contractSchema);

module.exports = contracts;
