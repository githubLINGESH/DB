const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  date: String,
  male: Number,
  female: Number,
  total: Number,
  w_female: Number,
  w_male: Number,
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
