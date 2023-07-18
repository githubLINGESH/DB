const express = require('express');
const router = express.Router();
const attendanceController = require('../controller/attendanceController');

// GET home page
router.get('/', attendanceController.getAttendancePage);

// POST new attendance record
router.post('/submit-attendance', attendanceController.submitAttendance);

// GET all attendance records
router.get('/all-attendance', attendanceController.getAllAttendance);

module.exports = router;
